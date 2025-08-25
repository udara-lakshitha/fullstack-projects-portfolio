package com.udara.smartloan.backend_java.service;

import com.udara.smartloan.backend_java.entity.Loan;
import com.udara.smartloan.backend_java.entity.User;
import com.udara.smartloan.backend_java.repo.LoanRepository;
import com.udara.smartloan.backend_java.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanService {

    private final LoanRepository loanRepository;
    private final UserRepository userRepository;

    public LoanService(LoanRepository loanRepository, UserRepository userRepository) {
        this.loanRepository = loanRepository;
        this.userRepository = userRepository;
    }

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public List<Loan> getLoansByUserId(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return loanRepository.findByUser(user);

    }

    public Loan createLoan(Long userId, Loan loan) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found")
                );
        loan.setUser(user);
        return loanRepository.save(loan);
    }

    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }

}
