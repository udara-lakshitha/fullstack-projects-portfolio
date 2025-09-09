package com.ai_loan_platform.backend.controller;

import com.ai_loan_platform.backend.model.LoanApplication;
import com.ai_loan_platform.backend.service.LoanService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
public class LoanApplicationController {

    private final LoanService loanService;

    public LoanApplicationController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping("/submit")
    public LoanApplication submitLoan(@RequestBody LoanApplication loan) {
        return loanService.submitLoan(loan);
    }

    @GetMapping
    public List<LoanApplication> getAllLoans() {
        return loanService.getAllLoans();
    }

}
