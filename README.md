# ¿Qué es esto?

Este proyecto es una muestra de una api de express con js y algunas pocas funcionalidades utilizadas para dar formación sobre node y express en BeMyCar

## Instalación

Instalar [Node.js](https://nodejs.org/en)

Lanzar el comando:

> npm install

Y una vez creado puedes iniciar con

> npm run start

## Instrucciones

1. Crea un **.env**, en la raíz dle proyecto con la siguiente variable:

<code>
PORT=[Tu puerto 3000]
MONGO_URI=[TU URI DE MONGO]
SECRET_WORD=[TU CADENA DE SEGURIDAD PARA HASHEAR LAS PASSWORD]
ENV=[ENTORNO]
</code>

2. Puedes ver los ejemplos en las rutas:

> http://localhost:3000/

## Entidades

### User

- URL BASE (/user)

- Endpoints:
  - Register (/register):
    Method: POST
    Auth: none
    Body: JSON - {name:string, email:string, password:string}
    Returns: Bearer Token
  - Login (/login):
    Method: POST
    Auth: none
    Body: JSON - {email:string, password:string}
    Returns: Bearer Token
  - MyInfo (/profile):
    Method: GET
    Auth: Authorization header - Bearer <token>
    Body: none
    Returns: userInfo

### Boargame

- URL BASE (/boargame)

- Endpoints:
  - Create (/create):
    Method: POST
    Auth: Authorization header - Bearer <token>
    Body: JSON - {
    title: String,
    genere: String,
    minPlayers: Number,
    maxPlayers: Number,
    playingTime: Number, //Minutes
    age: Number
    }
    Returns: Created Boardgame
