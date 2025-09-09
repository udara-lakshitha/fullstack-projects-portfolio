package com.ai_loan_platform.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "loan_applications")
public class LoanApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private double amount;
    private double revenueMonthly;
    private double expensesMonthly;
    private String industry;
    private int yearsInBusiness;
    private Integer creditScore;

    private double approvalProbability;
    private Integer recommendedProductId;
    private String mlModelVersion;

    private String status; // SUBMITTED / REVIEWED / APPROVED / REJECTED
}
