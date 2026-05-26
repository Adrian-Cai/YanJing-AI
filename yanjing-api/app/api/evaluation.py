from fastapi import APIRouter

router = APIRouter()


@router.post('/answer')
def evaluate_answer() -> dict[str, str]:
    return {'message': 'TODO: evaluate answer'}
