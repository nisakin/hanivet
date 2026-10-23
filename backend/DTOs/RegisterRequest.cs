using System.ComponentModel.DataAnnotations;
using hanivet_backend.Entities;

namespace hanivet_backend.DTOs;

public class RegisterRequest
{

[Required]
[EmailAddress]
public required string Email { get; set;}

[Required]
[MinLength(6)]
public required string Password { get; set;}

[Required]
[EnumDataType(typeof(UserRole))]
public required UserRole Role { get; set;}

//Only used for PetOwner registration
[StringLength(30)]
public string? Username { get; set;}

//Only used for Clinic registration
[StringLength(100)]
public string? ClinicName { get; set;}

}