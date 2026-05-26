from fastapi import APIRouter, File, HTTPException, UploadFile, status

from app.schemas.resume import ResumeUploadResponse
from app.services.pdf_service import PdfValidationError, extract_pdf_text, validate_pdf_bytes

router = APIRouter()


@router.post('/upload', response_model=ResumeUploadResponse)
async def upload_resume(file: UploadFile = File(...)) -> ResumeUploadResponse:
    file_bytes = await file.read()

    try:
        validate_pdf_bytes(file.filename, file.content_type, file_bytes)
        extraction = extract_pdf_text(file_bytes)
    except PdfValidationError as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc

    return ResumeUploadResponse(
        filename=file.filename or 'resume.pdf',
        size_bytes=len(file_bytes),
        page_count=extraction.page_count,
        raw_text=extraction.raw_text,
    )
