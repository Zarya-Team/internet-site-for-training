from sqlalchemy.pool import NullPool
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

async_engine = create_async_engine(
    "postgresql+asyncpg://neko:1313@localhost/postgres",
    echo=True,
    future=True,
    poolclass=NullPool,
)

async_session_maker = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False, autoflush=True
)

async def get_async_session() -> AsyncSession:
    async with async_session_maker() as session:
        yield session

Base = declarative_base()
metadata = Base.metadata
