using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace QuotingAPI.ViewModels
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() : base() { }

        public string Password { get; set; }
        public string CompanyName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string AccountType { get; set; } = "Retail";//potentially set this as a Role later
        //ie CustomerRetail1, CustomerRetail2, CustomerTrade1, CustomerTrade2
        public ICollection<Quote> Quotes { get; set; }
    }
}
