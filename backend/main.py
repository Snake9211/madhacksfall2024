from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI client
openai.api_key = os.getenv("OPENAI_API_KEY")

class ScamQuery(BaseModel):
    query: str

class ScamIndicator(BaseModel):
    text: str
    severity: str

class ScamAnalysis(BaseModel):
    risk_score: float
    indicators: List[str]
    recommendations: List[str]
    analyzed_at: str

def generate_analysis_prompt(scam_details: str) -> str:
    return f"""Please analyze this potential scam and determine its risk level. Consider common scam patterns, language used, and potential red flags.

Potential scam details:
{scam_details}

Provide your analysis in the following specific format:
1. A risk score from 0-100, where 100 is definitely a scam
2. List specific indicators that suggest this is or isn't a scam
3. Provide actionable recommendations for the user

Return your analysis in this exact JSON format:
{{
  "riskScore": number,
  "indicators": string[],
  "recommendations": string[]
}}

Base your analysis on these factors:
- Urgency in the message
- Requests for personal information
- Grammatical errors or unusual language
- Mismatched or suspicious email domains
- Pressure tactics or threats
- Unrealistic promises or rewards
- Request for unusual payment methods
- Links to suspicious websites
- Impersonation of known entities
- Excessive formatting or styling
- Use of generic greetings"""

@app.post("/api/analyze", response_model=ScamAnalysis)
async def analyze_scam(scam_query: ScamQuery):
    try:
        # Validate input
        if not scam_query.query.strip():
            raise HTTPException(status_code=400, detail="Query cannot be empty")

        # Get AI analysis
        completion = await openai.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {
                    "role": "system",
                    "content": "You are a scam analysis expert. Analyze potential scams and provide detailed, accurate assessments. Be thorough but avoid false positives. Format responses exactly as requested."
                },
                {
                    "role": "user",
                    "content": generate_analysis_prompt(scam_query.query)
                }
            ],
            temperature=0.4,
            response_format={"type": "json_object"}
        )

        # Parse the response
        analysis = completion.choices[0].message.content
        
        # Add timestamp
        from datetime import datetime
        analysis_with_timestamp = {
            **analysis,
            "analyzed_at": datetime.now().isoformat()
        }

        return analysis_with_timestamp

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e) #if os.getenv("ENVIRONMENT") == "development" else "Internal server error"
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)