from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import these modules when you have created them
# from app.core.config import settings
# from app.api.api import api_router
# from app.db.session import create_db_and_tables

app = FastAPI(
    title="Trading Companion API",
    description="API for the Trading Companion application",
    version="0.1.0",
)

# Set up CORS - updated for Vercel deployment with correct frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://trading-companion.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router when available
# app.include_router(api_router, prefix="/api")

@app.on_event("startup")
async def startup_event():
    # Create tables for development
    pass

@app.get("/")
async def root():
    return {"message": "Welcome to Trading Companion API. Visit /docs for API documentation."}

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "Trading Companion API"}

# Handler for Vercel serverless deployment
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000)