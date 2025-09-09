package com.ai_loan_platform.backend.repository;

import com.ai_loan_platform.backend.model.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {
}
