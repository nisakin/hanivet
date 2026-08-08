using System.ComponentModel.DataAnnotations;
using hanivet_backend.Entities;

namespace hanivet_backend.DTOs;

public class RegisterRequest
{
[Required]
[StringLength(30)]
    public required string Username{get; set;}

[Required]
[EmailAddress]
public required string Email {get; set;}

[Required]
[MinLength(6)]
public required string Password{get;set;}

[Required]
public required UserRole Role{get;set;}


}