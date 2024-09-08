FROM python:3.12-slim

WORKDIR /opt/backend
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt gunicorn ipython tqdm

COPY . .
EXPOSE 8000

ENV PYTHONUNBUFFERED=1

WORKDIR /opt
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "backend.app:app"]
