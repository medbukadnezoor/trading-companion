# CORS Test Module
# This file is to test CORS functionality and trigger a new backend deployment

from fastapi import APIRouter

cors_test_router = APIRouter()

@cors_test_router.get("/api/cors-test")
async def cors_test():
    """
    Endpoint to test CORS settings.
    Returns a simple message that can be requested from the frontend
    to test if CORS is properly configured.
    """
    return {
        "message": "CORS is properly configured!",
        "status": "success"
    }

# Import this router in main.py with:
# from app.cors_test import cors_test_router
# app.include_router(cors_test_router)