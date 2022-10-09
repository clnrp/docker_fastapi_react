docker run -d -v $(pwd)/backend/app/:/api/app -p 81:8000 --name fastapi_tests fastapi
docker run -d -v $(pwd)/frontend/src:/app/src -p 3000:3000 --name reactjs_tests reactjs
docker run -d -v $(pwd)/postgresql/data/:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD=admin --name postgresql_tests postgresql
#docker run -d -v $(pwd)/apache/html:/var/www/html -p 80:80 --rm --name php-apache apache
