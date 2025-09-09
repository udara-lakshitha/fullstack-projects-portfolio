package com.ai_loan_platform.backend.service;

import com.ai_loan_platform.backend.client.MLClient;
import com.ai_loan_platform.backend.model.LoanApplication;
import com.ai_loan_platform.backend.repository.LoanApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LoanService {
    private final LoanApplicationRepository loanRepo;
    private final MLClient mlClient;

    public LoanService(LoanApplicationRepository loanRepo, MLClient mlClient) {
        this.loanRepo = loanRepo;
        this.mlClient = mlClient;
    }

    public LoanApplication submitLoan(LoanApplication loan) {
        Map<String, Object> features = new HashMap<>();
        features.put("amount", loan.getAmount());
        features.put("revenue_monthly", loan.getRevenueMonthly());
        features.put("expenses_monthly", loan.getExpensesMonthly());
        features.put("industry", loan.getIndustry() != null ? loan.getIndustry() : "general");
        features.put("years_in_business", loan.getYearsInBusiness());
        features.put("credit_score", loan.getCreditScore());

        Map<String, Object> mlResponse = mlClient.predict(features);

        // Save ML results
        loan.setApprovalProbability((Double) mlResponse.get("approval_prob"));
        loan.setRecommendedProductId((Integer) mlResponse.get("recommended_product_id"));
        loan.setMlModelVersion((String) mlResponse.get("model_version"));
        loan.setStatus("SUBMITTED");

        return loanRepo.save(loan);
    }

    public List<LoanApplication> getAllLoans() {
        return loanRepo.findAll();
    }
}
