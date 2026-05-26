from fastapi import APIRouter

router = APIRouter()


@router.get('/session/{session_id}')
def get_report(session_id: str) -> dict[str, str]:
    return {'message': f'TODO: report for {session_id}'}
