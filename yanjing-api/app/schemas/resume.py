from pydantic import BaseModel


class ResumeUploadResponse(BaseModel):
    filename: str
    size_bytes: int
    page_count: int
    raw_text: str
