import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import joblib
import os

# Tiny dummy dataset
data = pd.DataFrame({
    "amount": [5000, 10000, 20000, 15000, 8000, 12000, 25000, 3000],
    "revenue": [20000, 50000, 80000, 60000, 30000, 45000, 100000, 15000],
    "expenses": [10000, 20000, 50000, 25000, 15000, 20000, 60000, 12000],
    "years": [2, 5, 10, 7, 3, 4, 12, 1],
    "credit": [600, 700, 720, 680, 640, 660, 750, 580],
    "approved": [0, 1, 1, 1, 0, 1, 1, 0]
})

X = data[["amount", "revenue", "expenses", "years", "credit"]]
y = data["approved"]

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

model = LogisticRegression()
model.fit(X_train, y_train)

joblib.dump(model, "model.pkl")

print("✅ Model trained and saved to model.pkl")