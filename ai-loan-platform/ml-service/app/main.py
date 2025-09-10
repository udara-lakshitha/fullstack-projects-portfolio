from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import joblib
import os

app = FastAPI(title="ML Loan Service")

MODEL_PATH = os.getenv("ML_MODEL_PATH", "model.pkl")
MODEL_VERSION = os.getenv("ML_MODEL_VERSION", "heuristic-0.1")
PORT = int(os.getenv("PORT", 8000))

class Features(BaseModel):
    amount: float
    revenue_monthly: float
    expenses_monthly: float
    industry: str
    years_in_business: int
    credit_score: Optional[int] = None

@app.get("/")
async def root():
    return {"status": "ok", "service": "ml"}

@app.post("/predict")
async def predict(f: Features):
    if os.path.exists(MODEL_PATH):
        model = joblib.load(MODEL_PATH)
        X = [[
            f.amount,
            f.revenue_monthly,
            f.expenses_monthly,
            f.years_in_business,
            f.credit_score or 650
        ]]
        prob = model.predict_proba(X)[0][1]
        return {
            "approval_prob": round(float(prob), 4),
            "recommended_product_id": 1,
            "model_version": "0.1"
        }
    else:
        # fallback simple heuristic
        dti = f.expenses_monthly / max(f.revenue_monthly, 1)
        prob = 1 - (dti * 0.6) + (f.years_in_business * 0.02)
        if f.credit_score:
            prob += (f.credit_score - 650) / 2000.0
        prob = max(0, min(1, prob))
        return {
            "approval_prob": round(prob, 4),
            "recommended_product_id": 1,
            "model_version": "heuristic-0.1"
        }