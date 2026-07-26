using System.ComponentModel.DataAnnotations;
namespace hanivet_backend.Models;
//Db tablolarım burada yer alıyor.

    public enum UserRole
    {
        PetOwner,
        Clinic
    }
public class User{
[Key]
    public int Id {get; set;}
[Required]// Data Annotation 
[StringLength(30)] // Data Annotation .... Çalışması için namespace eklendi.
public required string Username{get;set;}

[Required]
[EmailAddress] // mail formatını kontrol eder.Geçersiz mail kaydedilmesini engeller.
public required string Email {get;set;}

[Required]
[StringLength(100)]
public required string PasswordHash {get ;set;}

[Required]
 public required UserRole Role {get;set;}

 public DateTime CreatedAt {get;set;} = DateTime.Now;


//Navigation Property  - bir kullanıcı ya PetOwner ya da Clinic olacak.
 public PetOwner? PetOwner {get;set;}
 public Clinic? Clinic{get;set;}
 




}    
