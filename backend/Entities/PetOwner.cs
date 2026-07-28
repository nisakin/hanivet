using System.ComponentModel.DataAnnotations;
namespace hanivet_backend.Entities;
public class PetOwner 
{
    [Key]
 public int Id{get; set;}

 public int UserId{get;set;}
 public User User{get;set;} =null!;

[StringLength(50)]
 public string? FullName{get;set;}

[Phone]
public string? PhoneNumber{get;set;}

public string? ProfilePhotoUrl{get;set;}

public ICollection<Pet> Pets {get;set;} = new List<Pet>();

} 
