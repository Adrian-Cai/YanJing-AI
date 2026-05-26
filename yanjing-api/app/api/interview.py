from fastapi import APIRouter

router = APIRouter()


@router.post('/question')
def generate_question() -> dict[str, str]:
    return {'message': 'TODO: generate interview question'}
