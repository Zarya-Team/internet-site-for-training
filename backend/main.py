import fastapi

from src.settings.const import BASE_URL
from src.apps.service.router import router

app = fastapi.FastAPI()
appv1 = fastapi.FastAPI()

appv1.include_router(router)


app.mount(BASE_URL, appv1)

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app, host='127.0.0.1', port=5000)