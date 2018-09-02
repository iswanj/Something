﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Company;
using Service.ViewModels.Company;

namespace WebApplication.ApiControllers
{
    [Produces("application/json")]
    [Route("api/Companies")]
    [Authorize]
    public class CompaniesController : BaseApiController
    {
        private readonly ICompanyService _companyService;
        public CompaniesController(UserManager<ApplicationUser> userManager, ICompanyService companyService ) : base(userManager)
        {
            _companyService = companyService;
        }

        // GET: api/Companies
        [HttpGet]
        public IEnumerable<CompanyViewModel> Get()
        {
            var companies = _companyService.GetCompanies();
            return companies;
        }
        
        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]string value)
        {
            if (string.IsNullOrEmpty(value) || value.Length < 3)
            {
                return BadRequest(value);
            }

            var companyId = _companyService.CreateCompanyAsync(value, GetUserId()).ConfigureAwait(false);
            return Created(string.Empty, companyId);
        }
    }
}