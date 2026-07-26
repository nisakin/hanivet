using hanivet_backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Controller Desteği. Controler classlarını aktif eder.Yani api/user gibi endpointler çalışır.
builder.Services.AddControllers();

//EF Core + SQL Server Bağlantısı
builder.Services.AddDbContext<AppDbContext>(options =>
options.UseSqlServer(
    builder.Configuration.GetConnectionString("DefaultConnection")
)
);

//Swagger. Tarayıcıdan endpoint test edilecek.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//CORS
builder.Services.AddCors(options=>
{
    options.AddPolicy("AllowAll", 
    policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();

    });
});
var app =builder.Build();

//Swagger 
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

//CORS 
app.UseCors("AllowAll");

//Controller route sistemi
app.MapControllers();
app.Run();