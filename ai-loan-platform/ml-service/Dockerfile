# Base Python image
FROM python:3.10-slim

WORKDIR /app

# Install system dependencies (if needed for ML libs like numpy, pandas, scikit-learn)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for Docker caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source
COPY . .

# Expose port for service
EXPOSE 10000

# Run with uvicorn (FastAPI/Flask style)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "10000"]