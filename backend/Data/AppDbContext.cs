using Microsoft.EntityFrameworkCore;
using hanivet_backend.Entities;
 
 namespace hanivet_backend.Data;
 public class AppDbContext : DbContext
 {
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {
    }
    public DbSet<User> Users { get ; set; }
    public DbSet<PetOwner> PetOwners { get; set; }
    public DbSet<Pet> Pets { get; set; }
    public DbSet<Clinic> Clinics { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // User - PetOwner (1-1 ilişki)
        modelBuilder.Entity<User>()
            .HasOne(u => u.PetOwner)
            .WithOne(p => p.User)
            .HasForeignKey<PetOwner>(p => p.UserId);

        // User - Clinic (1-1 ilişki)
        modelBuilder.Entity<User>()
            .HasOne(u => u.Clinic)
            .WithOne(c => c.User)
            .HasForeignKey<Clinic>(c => c.UserId);

        // PetOwner - Pet (1-çok ilişki)
        modelBuilder.Entity<PetOwner>()
            .HasMany(p => p.Pets)
            .WithOne(pet => pet.PetOwner)
            .HasForeignKey(pet => pet.PetOwnerId);
    }
 }