package com.udara.smartloan.backend_java.controller;

import com.udara.smartloan.backend_java.entity.Loan;
import com.udara.smartloan.backend_java.service.LoanService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @GetMapping
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    @GetMapping("/user/{userId}")
    public List<Loan> getLoansByUser(@PathVariable Long userId) {
        return loanService.getLoansByUserId(userId);
    }

    @PostMapping("/user/{userId}")
    public Loan createLoan(@PathVariable Long userId, @RequestBody Loan loan) {
        return loanService.createLoan(userId, loan);
    }

}
