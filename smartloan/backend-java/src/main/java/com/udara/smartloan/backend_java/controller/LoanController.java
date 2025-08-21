package com.udara.smartloan.backend_java.controller;

import com.udara.smartloan.backend_java.entity.Loan;
import com.udara.smartloan.backend_java.entity.User;
import com.udara.smartloan.backend_java.repo.LoanRepository;
import com.udara.smartloan.backend_java.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
public class LoanController {
    @Autowired
    private LoanRepository loanRepository;

    @Autowired
    private UserRepository userRepository;

    // Get all loans
    @GetMapping
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    // Get loans by user
    @GetMapping("/user/{userId}")
    public List<Loan> getLoansByUser(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found")
        );
        return loanRepository.findByUser(user);
    }

    // Create loan for users
    @PostMapping("user/{userId}")
    public Loan createLoan(@PathVariable Long userId, @RequestBody Loan loan) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found")
        );
        loan.setUser(user);
        return loanRepository.save(loan);
    }

}
