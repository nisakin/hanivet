using System.ComponentModel.DataAnnotations;
namespace hanivet_backend.Entities;
public class Pet 
{
[Key]
    public int Id{get;set;}

[Required]
[StringLength(30)]
public required string Name {get;set;}

[Required]
[StringLength(30)]
public required string Species{get;set;}

[StringLength(30)]
public string? Breed{get;set;}

public DateTime? BirthDate {get;set;}

public string? PhotoUrl{ get;set;}


public int PetOwnerId {get;set;}
public PetOwner PetOwner{get;set;} =null!;
}