using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuotingAPI.ViewModels;
using System;

namespace QuotingAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region "Seed Data"

            builder.Entity<ApplicationUser>().Property(p => p.Id).HasMaxLength(40);
            builder.Entity<Quote>().Property(p => p.QuoteNumber).HasMaxLength(40);

            builder.Entity<ApplicationUser>().ToTable("AspNetUsers");
            builder.Entity<Quote>().ToTable("Quote");

            builder.Entity<IdentityRole>().HasData(
                new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
                new { Id = "2", Name = "Customer", NormalizedName = "CUSTOMER" }
            );

            builder.Entity<Quote>().HasData(
                new { QuoteNumber = "2", Quantity = 10, BindingType = "Plasticoil", TotalPrice = new Decimal(25.59), Description = "This is a quote", DateCreated = new DateTime()}
             );
            #endregion
        }

        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<Quote> Quote { get; set; }
    }

}
