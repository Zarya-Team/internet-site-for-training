import fastapi

from src.settings.const import BASE_URL
from src.apps.service.router import router, tags_metadata

app = fastapi.FastAPI()
appv1 = fastapi.FastAPI(
    title="OpenAPI",
    tags_metadata = tags_metadata,
    version="0.0.1",
)

appv1.include_router(router)


app.mount(BASE_URL, appv1)

# if __name__ == '__main__':
#     import uvicorn

#     uvicorn.run(app, host='127.0.0.1', port=5000)