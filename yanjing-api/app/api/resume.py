from fastapi import APIRouter

router = APIRouter()


@router.post('/upload')
def upload_resume() -> dict[str, str]:
    return {'message': 'TODO: upload resume and parse text'}
