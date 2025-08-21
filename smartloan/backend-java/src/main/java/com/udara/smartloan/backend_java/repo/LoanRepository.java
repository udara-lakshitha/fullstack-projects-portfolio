package com.udara.smartloan.backend_java.repo;

import com.udara.smartloan.backend_java.entity.Loan;
import com.udara.smartloan.backend_java.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByUser(User user);
}
