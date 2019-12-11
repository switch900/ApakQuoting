using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuotingAPI.ViewModels
{
    public class Quote
    {
        [Key]
        public string QuoteNumber { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public string BindingType { get; set; }
        public Decimal TotalPrice { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public ApplicationUser ApplicationUser { get; set; }
    }
}
