# HTN-2022

### Doing development on the source

1. Create a new virtual environment:
    > ```python3 -m venv .venv```
2. Install dependencies:
    > ```pip install -r image_files/requirements.txt```
3. Download Cockroach cert:
    > ```mkdir -p $env:appdata\postgresql\; Invoke-WebRequest -Uri https://cockroachlabs.cloud/clusters/b249d473-800d-4d4b-b2fa-b20fb5838e61/cert -OutFile $env:appdata\postgresql\root.crt```
3. Run backend:
    > ```cd backend```

    > ```flask run```

    > ```cd ..```
4. Run frontend:
    > ```cd frontend```

    > ```yarn start```