using System.ComponentModel.DataAnnotations;

namespace hanivet_backend.Entities;

public class Clinic
{
    [Key]
    public int Id { get; set; }

    public int UserId { get; set; }
    public User User { get; set; } = null!;

    [Required]
    [StringLength(100)]
    public required string ClinicName { get; set; }

    [StringLength(200)]
    public string? Address { get; set; }

    public double? Latitude { get; set; }
    public double? Longitude { get; set; }

    [Phone]
    public string? PhoneNumber { get; set; }

    public double AverageRating { get; set; } = 0;
}