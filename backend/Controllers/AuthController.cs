using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using hanivet_backend.Data;
using hanivet_backend.DTOs;
using hanivet_backend.Entities;

namespace hanivet_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        bool emailExists = await _context.Users.AnyAsync(u => u.Email == request.Email);
        if (emailExists)
        {
            return BadRequest("Bu email adresi zaten kayıtlı.");
        }

        string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

        var user = new User
        {
            Username = request.Username,
            Email = request.Email,
            PasswordHash = passwordHash,
            Role = request.Role
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("Kayıt Başarılı.");
    }
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password , user.PasswordHash))
{
    return Unauthorized("Email veya şifre hatalı.");
}
if (request.ExpectedRole.HasValue && user.Role != request.ExpectedRole.Value)
{
    return BadRequest("Bu hesap türü için farklı bir giriş sayfası kullanmalısınız.");
}
string token = GenerateJwtToken(user);

return Ok (new
{
    token,
    role = user.Role.ToString(),
    username = user.Username
});

    }
    private string GenerateJwtToken(User user)
    {
        var jwtKey = _configuration["Jwt:Key"]!;
        var jwtIssuer = _configuration["Jwt:Issuer"]!;
        var jwtAudience = _configuration["Jwt:Audience"]!;
        var expiryMinutes = int.Parse(_configuration["Jwt:ExpiryMinutes"]!);
        
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier , user.Id.ToString()),
            new Claim(ClaimTypes.Name , user.Username),
            new Claim(ClaimTypes.Email , user.Email),
            new Claim(ClaimTypes.Role , user.Role.ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        
        var token = new JwtSecurityToken(
            issuer: jwtIssuer,
            audience: jwtAudience,
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(expiryMinutes),
            signingCredentials: credentials
        );
        return new JwtSecurityTokenHandler().WriteToken(token);

    }






}