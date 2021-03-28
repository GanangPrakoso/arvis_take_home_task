# Arvis Store App Build Guide

This project is builded using react.js, integrated with firebase authentication, and using json-server as fake server and data mock up.

the package i used in this project:

- firebase
- react-router-dom
- redux
- redux-thunk
- sweetalert2
- axios

#

## Preparing the server

cd into `server` folder, then run this following command in terminal to install the json-server package:

### npm install

after that you can start the fake server by typing this command in the terminal:

### npm run start:mock-server

the server is running on port 3001

#

## API Documentation

**Get all products**

- **URL**

`/productList`

- **Method:**

`GET`

- **URL Params**

  **Required:**

`None`

**Optional:**

`None`

- **Data Params**

`None`

- **Success Response:**

  - **Code:** 201 <br />

    **Content:** `[{ id: ..., productName: ..., price: ..., imageSrc: ..., description: ..., stock: ... }]`

- **Error Response:**

  - **Code:** 500 <br />

    **Content:** `{ msg : err.message }`

**Get detail products**

- **URL**

`/productList/:id`

- **Method:**

`GET`

- **URL Params**

  **Required:**

`None`

**Optional:**

`None`

- **Data Params**

`None`

- **Success Response:**

  - **Code:** 200 <br />

    **Content:** `{ id: ..., productName: ..., price: ..., imageSrc: ..., description: ..., stock: ... }`

- **Error Response:**

  - **Code:** 500 <br />

    **Content:** `{ msg : err.message }`

**Patch product**

- **URL**

`/productList/:id`

- **Method:**

`PATCH`

- **Data Params**

`stock`

- **Success Response:**

  - **Code:** 200 <br />

    **Content:** `{ id: ..., productName: ..., price: ..., imageSrc: ..., description: ..., stock: ... }`

- **Error Response:**

  - **Code:** 500 <br />

    **Content:** `{ msg : err.message }`

**Get social media pictures**

- **URL**

`/instagramPic`

- **Method:**

`GET`

- **URL Params**

  **Required:**

`None`

**Optional:**

`None`

- **Data Params**

`None`

- **Success Response:**

  - **Code:** 200 <br />

    **Content:** `[{ id: ..., src: ... }]`

- **Error Response:**

  - **Code:** 500 <br />

    **Content:** `{ msg : err.message }`
