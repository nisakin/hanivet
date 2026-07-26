using Microsoft.EntityFrameworkCore;
using hanivet_backend.Models;
 
 namespace hanivet_backend.Data;
 public class AppDbContext : DbContext
 {
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {
    }
    public DbSet<User> Users { get ; set; }
 }