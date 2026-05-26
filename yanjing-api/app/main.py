from fastapi import FastAPI

from app.api import auth, evaluation, interview, report, resume

app = FastAPI(title="YanJing API", version="0.1.0")

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(resume.router, prefix="/api/resume", tags=["resume"])
app.include_router(interview.router, prefix="/api/interview", tags=["interview"])
app.include_router(evaluation.router, prefix="/api/evaluation", tags=["evaluation"])
app.include_router(report.router, prefix="/api/report", tags=["report"])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
