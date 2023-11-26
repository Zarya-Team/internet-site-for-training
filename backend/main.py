import fastapi

from src.settings.const import BASE_URL
from src.apps.service.router import router, tags_metadata
from src.apps.utils import auth_backend, current_active_user, fastapi_users
from src.apps.schema import UserCreate, UserRead, UserUpdate

app = fastapi.FastAPI()
appv1 = fastapi.FastAPI(
    title="API для сайта с рецепами",
    tags_metadata=tags_metadata,
    version="0.0.1",
)

appv1.include_router(router)

appv1.include_router(fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"])
appv1.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
appv1.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
appv1.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)
appv1.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)


app.mount(BASE_URL, appv1)

# if __name__ == '__main__':
#     import uvicorn

#     uvicorn.run(app, host='127.0.0.1', port=5000)
