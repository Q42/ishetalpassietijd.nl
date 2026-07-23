# Is het al passietijd?

Een simpele website die je vertelt of het op dit moment [passietijd](https://blog.q42.nl/passietijd/) is.

## Opzet & hosting

Dit is een statische site. Er wordt client-side met JavaScript bepaald of het op dit moment passietijd is, zie `passietijd.js`.

Momenteel is de hosting op GitHub Pages.

## Development

### Unit tests

De unit tests maken gebruik van de [ingebouwde Node.JS test runner](https://nodejs.org/learn/test-runner/using-test-runner).
Draai de unit tests met het volgende commando: 

```
node --test
```
