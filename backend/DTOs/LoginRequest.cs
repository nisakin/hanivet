using System.ComponentModel.DataAnnotations;
using hanivet_backend.Entities;
namespace hanivet_backend.DTOs;
 public class LoginRequest{

[Required]
[EmailAddress]
public required string Email{get;set;}

[Required]
public required string Password{get;set;}

public UserRole? ExpectedRole {get;set;}


 }