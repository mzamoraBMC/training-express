# 👀 ¿Qué es esto?

Este proyecto es una muestra de una api de express con js y algunas pocas funcionalidades utilizadas para dar formación sobre node y express en BeMyCar

## 🏁 Instalación

Instalar [Node.js](https://nodejs.org/en)

Lanzar el comando:

> npm install

Y una vez creado puedes iniciar con

> npm run start

## 🗒️ Instrucciones

1. Crea un **.env**, en la raíz del proyecto con la siguiente variable:

> PORT=[Tu puerto 3000]
> MONGO_URI=[TU URI DE MONGO]
> SECRET_WORD=[TU CADENA DE SEGURIDAD PARA HASHEAR LAS PASSWORD]
> ENV=[ENTORNO]

2. Puedes ver los ejemplos en las rutas:

> http://localhost:3000/

## 🙂 Entidades

### User

- URL BASE (/user)

| Name     | Endpoint  | Method | Auth                                 | Body                                         | Returns      |
| -------- | --------- | ------ | ------------------------------------ | -------------------------------------------- | ------------ |
| Register | /register | POST   | none                                 | {name:string, email:string, password:string} | Bearer Token |
| Login    | /login    | POST   | none                                 | {email:string, password:string}              | Bearer Token |
| MyInfo   | /profile  | GET    | Authorization header with Bear token | none                                         | userInfo     |

### Boargame

- URL BASE (/boargame)

| Name   | Endpoint | Method | Auth                                 | Body                                                                                                        | Returns      |
| ------ | -------- | ------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------ |
| Create | /create  | POST   | Authorization header with Bear token | { title: String, genere: String, minPlayers: Number, maxPlayers: Number, playingTime: Number, age: Number } | Bearer Token |
