# Is het al passietijd?

Een simpele website die je vertelt of het op dit moment [passietijd](https://blog.q42.nl/passietijd/) is.

## Lokaal draaien in Docker

```
docker build -t ishetalpassietijd .
docker run -d -p 4242:4242 --env PORT=4242 ishetalpassietijd
```

Service is now available at http://localhost:4242.

## Deploy naar Google Cloud 

```
gcloud config set project ishetalpassietijd
gcloud run deploy --source .
```