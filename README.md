# 👀 ¿Qué es esto?

Este proyecto es una muestra de una api de express con js y algunas pocas funcionalidades utilizadas para dar formación sobre node y express en BeMyCar

## 🏁 Requisitos

Tener instalado [Node.js](https://nodejs.org/en).

Disponer de una bbdd [Mongo](https://www.mongodb.com/es/atlas) con conexión disponible mediante Uri.

Crear un archivo **.env**, en la raíz del proyecto con las siguientes variables:

> PORT=[Tu puerto 3000]

> MONGO_URI=[TU URI DE MONGO]

> SECRET_WORD=[TU CADENA DE SEGURIDAD PARA HASHEAR LAS PASSWORD]

> ENV=[ENTORNO]

## 📟 Comandos

Instalación de dependencias:

> npm install

Arrancar el servicio:

> npm run start

## 🙂 Entidades

### User

- URL BASE (/user)

| Name     | Endpoint  | Method | Auth                                 | Body                                         | Returns      |
| -------- | --------- | ------ | ------------------------------------ | -------------------------------------------- | ------------ |
| Register | /register | POST   | none                                 | {name:string, email:string, password:string} | Bearer Token |
| Login    | /login    | POST   | none                                 | {email:string, password:string}              | Bearer Token |
| MyInfo   | /profile  | GET    | Authorization header with Bear token | none                                         | userInfo     |

### Boardgame

- URL BASE (/boardgame)

| Name   | Endpoint | Method | Auth                                 | Body                                                                                                        | Returns          |
| ------ | -------- | ------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| Create | /create  | POST   | Authorization header with Bear token | { title: String, genere: String, minPlayers: Number, maxPlayers: Number, playingTime: Number, age: Number } | boardgame Object |
