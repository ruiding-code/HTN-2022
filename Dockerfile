FROM python:3.8-slim-buster

WORKDIR /app

COPY image_files/requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

RUN rm requirements.txt


COPY backend/ /app/

ENTRYPOINT [ "app.py" ]
