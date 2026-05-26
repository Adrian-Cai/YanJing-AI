from __future__ import annotations

import io
from dataclasses import dataclass

from pypdf import PdfReader

MAX_PDF_BYTES = 5 * 1024 * 1024  # 5MB
MAX_PDF_PAGES = 20
PDF_MAGIC = b"%PDF-"


class PdfValidationError(ValueError):
    """Raised when uploaded PDF fails validation."""


@dataclass
class PdfExtractionResult:
    page_count: int
    raw_text: str


def _normalize_text(text: str) -> str:
    return "\n".join(line.rstrip() for line in text.splitlines() if line.strip())


def validate_pdf_bytes(filename: str | None, content_type: str | None, file_bytes: bytes) -> None:
    if not filename or not filename.lower().endswith(".pdf"):
        raise PdfValidationError("仅支持 PDF 文件上传。")

    if content_type not in {"application/pdf", "application/octet-stream"}:
        raise PdfValidationError("文件 Content-Type 非 PDF。")

    if len(file_bytes) == 0:
        raise PdfValidationError("上传文件为空。")

    if len(file_bytes) > MAX_PDF_BYTES:
        raise PdfValidationError(f"PDF 文件过大，最大支持 {MAX_PDF_BYTES // (1024 * 1024)}MB。")

    if not file_bytes.startswith(PDF_MAGIC):
        raise PdfValidationError("文件头校验失败，不是合法 PDF。")


def extract_pdf_text(file_bytes: bytes) -> PdfExtractionResult:
    try:
        reader = PdfReader(io.BytesIO(file_bytes), strict=True)
    except Exception as exc:  # pypdf throws multiple parser exceptions
        raise PdfValidationError("PDF 解析失败，请检查文件是否损坏。") from exc

    if reader.is_encrypted:
        raise PdfValidationError("不支持加密 PDF，请先解密后上传。")

    page_count = len(reader.pages)
    if page_count == 0:
        raise PdfValidationError("PDF 不包含可读取页面。")
    if page_count > MAX_PDF_PAGES:
        raise PdfValidationError(f"PDF 页数过多，最大支持 {MAX_PDF_PAGES} 页。")

    raw_text = "\n\n".join((page.extract_text() or "") for page in reader.pages)
    normalized = _normalize_text(raw_text)
    if not normalized:
        raise PdfValidationError("未提取到有效文本，请确认 PDF 为文本型简历。")

    return PdfExtractionResult(page_count=page_count, raw_text=normalized)
