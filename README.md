# AuctionCar
Plataforma de leilão de automóveis

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [uuid](https://www.npmjs.com/package/uuid)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcrypt)


## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

## 3. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [User]()
  - [POST - /register](#4.1.-criação-de-usuário)
  - [POST - /login]()
  - [GET - /users]()
  - [GET - /users/motor]()

## 4. **User**

[ Voltar para os Endpoints ](#5-endpoints)

A criação do usuário é definida pelos campos abaixo

| Campo        | Tipo    | Descrição                                        |
| ------------ | ------- | ------------------------------------------------ |
| id           | string  | Identificador único do usuário.                  |
| name         | string  | O nome do usuário.                               |
| email        | string  | O e-mail do usuário.                             |
| celphone     | string  | O número de contato do usuário.                  |
| password     | string  | A senha de login do usuário.                     |

## Endpoints

| Método | Rota              | Descrição                                                             |
| ------ | ----------------- | --------------------------------------------------------------------- |
| POST   | /login            | Gera o token de autenticação.                                         |
| POST   | /users/register   | Criação de um Usuário.                                                |
| GET    | /users            | Lista todos os usuários.                                              |
| PATCH  | /users            | Atualiza um Usuario usando seu ID como parâmetro                      |
| DELETE | /users            | Deleta um Usuario usando seu ID como parâmetro                        |

### 4.1. **Criação de Usuario**

### `/users/register`

### Exemplo de Request:

```
POST /users/register
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "Shanks",
	"email": "Shanks@email.com",
	"celphone": "2222-333",
	"password": "Ruivo"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "263a03b0-a41a-4d4e-9cdc-05a52d4e61c1",
	"name": "Shanks",
	"email": "Shanks@email.com",
	"celphone": "2222-333",
	"is_active": true,
	"created_at": "2022-11-03T01:43:09.695Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 400 Bad Request| Illegal arguments.        |

### 4.2. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

### `/login`

### Exemplo de Request:

```
POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
	{
		"email": "Shanks@email.com",
		"password": "Ruivo"
	}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1NDM4MiwiZXhwIjoxNjU4MzU3OTgyfQ.ERXtzLfQ9KtDsMaqWrQczgonuYxGo9XT5a6bI0u2ZkU"
}
```

### Possíveis Erros:

| Código do Erro | Descrição             |
| -------------- | --------------------- |
| 404 Not Found  | Account not found.    |

### 4.3. **Listando Usuários**

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

Para listar todos os usuários, você não precisa estar logado.

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "263a03b0-a41a-4d4e-9cdc-05a52d4e61c1",
		"name": "Shanks",
		"celphone": "2222-333",
		"email": "Shanks@email.com",
		"password": "$2a$10$7aLQaCgxhLbCE/9JWAo6UOHiggoXt6zChtyuTO4W3TXoecO30ND3i",
		"is_active": true,
		"created_at": "2022-11-03T01:43:09.695Z",
		"updated_at": "2022-11-03T01:43:09.695Z"
	},
    {
		"id": "263a03b0-a41a-4d4e-9cdc-05a52d4e61c1",
		"name": "Monkey D. Luffy",
		"celphone": "2222-222",
		"email": "Luffy@email.com",
		"password": "$2a$10$7aLQaCgxhLbCE/9JWAo6UOHiggoXt6zChtyuTO4W3TXoecO30ND3i",
		"is_active": true,
		"created_at": "2022-11-03T01:43:09.695Z",
		"updated_at": "2022-11-03T01:43:09.695Z"
	}
]
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 401 Unathorized | Invalid token.                    |

### 4.4. **Atualizando Usuários**

### `/users`

### Exemplo de Request:

```
PATCH /users
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```
Para Atualizar um único os usuários você precisa estar logado.

OBS: Todas as informações podem ser atualizados, ou apenas uma

### Corpo da Requisição:

```json
{
	"name": "Shank- O Ruivo",
	"celphone": "2222-331"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"message": "User Updated",
	"user": {
		"id": "72ae05ac-cc8a-4679-9cb9-f53a4b574fc9",
		"name": "Shank- O Ruivo",
		"password": "Shank@email.com",
		"celphone": "2222-331",
		"updated_at": "2022-10-25T17:49:06.944Z"
	}
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 401 Unathorized | Invalid token.                    |

### 4.5. **Deletando Usuários Especifico**

### `/users`

### Exemplo de Request:

```
DELETE /users
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```
Para Deletar um único os usuários você precisa estar logado.


### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 401 Unathorized | Invalid token.                    |

### 4.6. **Listando Usuários Especifico**

### `/users/motor`

### Exemplo de Request:

```
GET /users/motor
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```
Para listar um único os usuários você precisa estar logado, pois recebera informações dos Veiculos do usuario logado.

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "263a03b0-a41a-4d4e-9cdc-05a52d4e61c1",
	"name": "Shanks",
	"celphone": "2222-333",
	"email": "Shanks@email.com",
	"password": "$2a$10$7aLQaCgxhLbCE/9JWAo6UOHiggoXt6zChtyuTO4W3TXoecO30ND3i",
	"is_active": true,
	"created_at": "2022-11-03T01:43:09.695Z",
	"updated_at": "2022-11-03T01:43:09.695Z",
	"vehicles": [
		{
			"id": "390ec6b6-3684-4607-8c60-5e930ab2ab7f",
			"heading": "Moto-2",
			"status": "Venda",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"created_at": "2022-11-03T01:52:31.159Z",
			"updated_at": "2022-11-03T01:52:31.159Z"
		},
		{
			"id": "605aa718-6f4d-4eff-bb94-c4c03b0a288f",
			"heading": "Carro-2",
			"status": "Venda",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"created_at": "2022-11-03T04:15:33.662Z",
			"updated_at": "2022-11-03T04:15:33.662Z"
		},
		{
			"id": "42c817d3-ca2f-499d-a23c-9cd489bd9166",
			"heading": "Carro-2",
			"status": "Venda",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"created_at": "2022-11-03T04:20:50.181Z",
			"updated_at": "2022-11-03T04:20:50.181Z"
		}
	]
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 401 Unathorized | Invalid token.                    |


## 5. **Categorias**

A criação de uma categoria é definida pelos campos abaixo

| Campo        | Tipo    | Descrição                                        |
| ------------ | ------- | ------------------------------------------------ |
| id           | string  | Identificador único do usuário.                  |
| categorie    | string  | O nome do usuário.                               |

## Endpoints

| Método | Rota              | Descrição                                                             |
| ------ | ----------------- | --------------------------------------------------------------------- |
| GET    | /users/motor      | Lista um Usuario usando seu ID como parâmetro                         |
| POST   | /categorie        | Criação de uma Categoria                                              |
| GET    | /categorie        | Lista Todas as Categorias                                             |
| GET    | /categorie/:id    | Lista Todos os Veiculos de uma Categoria usando seu ID como parâmetro |
| GET    | /categorie/car    | Lista Todos os Veiculos da Categoria chamada Carro                    |
| GET    | /categorie/motto  | Lista Todos os Veiculos da Categoria chamada Moto                     |




### 5.1. **Criando Categorias**

### `/categorie`

### Exemplo de Request:

```
POST /categorie
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```


### Corpo da Requisição:

```json
{
	"categorie": "Carro"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
	"id": "50871410-624c-4eb7-9e63-4f3161788356",
	"categorie": "Carro",
	"created_at": "2022-11-02T22:25:40.804Z"
}
```

### 5.2. **Listando Categorias**

### `/categorie`

### Exemplo de Request:

```
GET /categorie
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "aec8cefe-4f19-4dd8-a582-f5dbf64048c9",
		"categorie": "Moto",
		"created_at": "2022-11-02T22:25:33.412Z",
		"updated_at": "2022-11-02T22:25:33.412Z"
	},
	{
		"id": "50871410-624c-4eb7-9e63-4f3161788356",
		"categorie": "Carro",
		"created_at": "2022-11-02T22:25:40.804Z",
		"updated_at": "2022-11-02T22:25:40.804Z"
	}
]
```

### 5.3. **Listando todos os Veiculos de uma Categorias**

### `/categorie/:id`

### Exemplo de Request:

```
GET /categoire/11288fd9-5c1c-40b8-a6c9-66b95574f0fb
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

Para Listar é necessario o id da categoria correspondente

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "50871410-624c-4eb7-9e63-4f3161788356",
	"categorie": "Carro",
	"created_at": "2022-11-02T22:25:40.804Z",
	"updated_at": "2022-11-02T22:25:40.804Z",
	"vehicles": [
		{
			"id": "23713340-92f5-4b55-932c-9c5ffb4ec6a1",
			"heading": "Carro-2",
			"status": "Venda",
			"year": "2001",
			"km": "1000",
			"price": "20000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"created_at": "2022-11-02T23:16:03.708Z",
			"updated_at": "2022-11-02T23:16:03.708Z"
		},
		{
			"id": "b1a4661c-3b57-4b9e-9c8e-57e9c281d9f1",
			"heading": "Carro-1",
			"status": "Leilão",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e usado",
			"published": false,
			"img": "link_image",
			"created_at": "2022-11-02T23:29:30.058Z",
			"updated_at": "2022-11-02T23:29:30.058Z"
		},
		{
			"id": "6321bde7-9a64-4c4a-9b48-4cb81a974982",
			"heading": "Carro-3",
			"status": "Leilão",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "velho, porém limpo",
			"published": false,
			"img": "link_image",
			"created_at": "2022-11-02T23:29:50.308Z",
			"updated_at": "2022-11-02T23:29:50.308Z"
		}
	]
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Not Found   | Category not found.               |

### 5.4. **Listando todos os Veiculos da Categorias Carro**

### `/categorie/car`

### Exemplo de Request:

```
GET /categoire/car
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

Para Listar é necessario que o nome da categorie seja Carro

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "618d5ae6-3c21-4032-bb03-f683e1683ee0",
	"categorie": "Carro",
	"created_at": "2022-11-07T10:26:58.326Z",
	"updated_at": "2022-11-07T10:26:58.326Z",
	"vehicles": [
		{
			"id": "95b2c9fc-0426-4148-884e-e27b3fb94ec7",
			"heading": "Carro-1",
			"status": "Leilão",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"user_name": "Shanks",
			"created_at": "2022-11-08T10:49:27.840Z",
			"updated_at": "2022-11-08T10:49:27.840Z"
		},
		{
			"id": "3be2afee-817b-4e08-b69e-a3f52f4f55ed",
			"heading": "Carro-2",
			"status": "Leilão",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"user_name": "Monkey D Luffy",
			"created_at": "2022-11-08T10:50:13.766Z",
			"updated_at": "2022-11-08T10:50:13.766Z"
		}
	]
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Not Found   | Category not found.               |

### 5.5. **Listando todos os Veiculos da Categorias Moto**

### `/categorie/motto`

### Exemplo de Request:

```
GET /categoire/motto
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

Para Listar é necessario que o nome da categorie seja Moto

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "849d4123-f9aa-45a6-bbdb-d8126743eb55",
	"categorie": "Moto",
	"created_at": "2022-11-07T10:27:04.989Z",
	"updated_at": "2022-11-07T10:27:04.989Z",
	"vehicles": [
		{
			"id": "dab1f896-8a0f-465d-ae71-6c0f23303095",
			"heading": "Moto-1",
			"status": "Leilão",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"user_name": "Shanks",
			"created_at": "2022-11-08T10:49:15.704Z",
			"updated_at": "2022-11-08T10:49:15.704Z"
		},
		{
			"id": "8a4c9cdf-ba95-4acd-b0fa-0b2af086aa75",
			"heading": "Moto-2",
			"status": "Leilão",
			"year": "2001",
			"km": "2000",
			"price": "30000",
			"description": "lindo e novo",
			"published": false,
			"img": "link_image",
			"user_name": "Monkey D Luffy",
			"created_at": "2022-11-08T10:50:25.125Z",
			"updated_at": "2022-11-08T10:50:25.125Z"
		}
	]
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Not Found   | Category not found.               |

## 6. **Veiculos**

A criação de um Veiculo é definida pelos campos abaixo

| Campo        | Tipo    | Descrição                                        |
| ------------ | ------- | ------------------------------------------------ |
| id           | string  | Identificador único do usuário.                  |
| heading      | string  | O nome do Veiculo.                               |
| status       | string  | O tipo de Venda Leilão/Venda.                    |
| year         | string  | O Ano do Carro.                                  |
| km           | string  | A Kilometragem do Carro Atualmente.              |
| price        | string  | O preço minímo do veiculo.                       |
| description  | string  | O uam breve sescrição sobre o Veiculo.           |
| published    | boollean| Informa se a publicação está visível ou não.     |
| img          | string  | A imagem principal do veiculo para.              |
| categorie    | string  | A categoria principal do veiculo.                |



## Endpoints

| Método | Rota              | Descrição                                                             |
| ------ | ----------------- | --------------------------------------------------------------------- |
| POST   | /vehicle          | Criação de um Veiculo                                                 |
| GET    | /vehicle          | Lista Todos os Veiculos                                               |
| GET    | /vehicle/:id      | Retorna uma informação sobre um Veiculo usanod sei ID como parâmetro  |
| DELETE | /vehicle/:id      | Deleta uma Informação sobre um Veiculo usanod sei ID como parâmetro   |

### 6.1. **Criando um Veiculo**

### `/vehicle`

### Exemplo de Request:

```
POST /vehicle
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```

Para criar um veiculo é necessario estar logado

### Corpo da Requisição:

```json
{
	"heading": "Carro-2",
	"status": "Venda",
	"year": "2001",
	"km": "2000",
	"price": "30000",
	"description": "lindo e novo",
	"published": false,
	"img": "link_image",
	"categorie": "Carro"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "42c817d3-ca2f-499d-a23c-9cd489bd9166",
	"heading": "Carro-2",
	"status": "Venda",
	"year": "2001",
	"km": "2000",
	"price": "30000",
	"description": "lindo e novo",
	"published": false,
	"img": "link_image",
	"crated_at": "2022-11-03T04:20:50.181Z",
	"categorie": {
		"id": "50871410-624c-4eb7-9e63-4f3161788356",
		"categorie": "Carro"
	}
}
```



### 6.2. **Listando Veiculos**

### `/vehicle`

### Exemplo de Request:

```
GET /vehicle
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
    {
		"id": "23713340-92f5-4b55-932c-9c5ffb4ec6a1",
		"heading": "Carro-2",
		"status": "Venda",
		"year": "2001",
		"km": "1000",
		"price": "20000",
		"description": "lindo e novo",
		"published": false,
		"img": "link_image",
		"created_at": "2022-11-02T23:16:03.708Z",
		"updated_at": "2022-11-02T23:16:03.708Z",
		"categorieId": "50871410-624c-4eb7-9e63-4f3161788356",
		"userId": null
	},
	{
		"id": "b1a4661c-3b57-4b9e-9c8e-57e9c281d9f1",
		"heading": "Carro-1",
		"status": "Leilão",
		"year": "2001",
		"km": "2000",
		"price": "30000",
		"description": "lindo e novo",
		"published": false,
		"img": "link_image",
		"created_at": "2022-11-02T23:29:30.058Z",
		"updated_at": "2022-11-02T23:29:30.058Z",
		"categorieId": "50871410-624c-4eb7-9e63-4f3161788356",
		"userId": null
	},
    	{
		"id": "ef8fb013-06e4-4aab-a837-0843bed1c948",
		"heading": "Moto-1",
		"status": "Leilão",
		"year": "2001",
		"km": "2000",
		"price": "30000",
		"description": "lindo e novo",
		"published": false,
		"img": "link_image",
		"created_at": "2022-11-02T23:35:35.165Z",
		"updated_at": "2022-11-02T23:35:35.165Z",
		"categorieId": "aec8cefe-4f19-4dd8-a582-f5dbf64048c9",
		"userId": null
	},
	{
		"id": "0c8e4c57-67b6-48ac-8275-cdf21302b230",
		"heading": "Moto-2",
		"status": "Venda",
		"year": "2001",
		"km": "2000",
		"price": "30000",
		"description": "lindo e novo",
		"published": false,
		"img": "link_image",
		"created_at": "2022-11-02T23:35:50.592Z",
		"updated_at": "2022-11-02T23:35:50.592Z",
		"categorieId": "aec8cefe-4f19-4dd8-a582-f5dbf64048c9",
		"userId": null
	}
]
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 401 Unathorized | Invalid token.                    |

### 6.3. **Listando Veiculos Especificos**

### `/vehicle/:id`

### Exemplo de Request:

```
GET /vehicle/19381458-2c39-48e6-b35a-cd8bc091c3be
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "19381458-2c39-48e6-b35a-cd8bc091c3be",
	"heading": "Carro-9",
	"status": "Leilão",
	"year": "2001",
	"km": "2000",
	"price": "30000",
	"description": "lindo e novo",
	"published": false,
	"img": "link_image",
	"created_at": "2022-11-02T23:33:45.666Z",
	"updated_at": "2022-11-02T23:33:45.666Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Not Found   | Veihicle not found.               |

### 6.4. **Deletando Veiculos Especificos**

### `/vehicle/:id`

### Exemplo de Request:

```
DELETE /vehicle/19381458-2c39-48e6-b35a-cd8bc091c3be
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Not Found   | Category not found.               |

## 7. **Galeria**

A criação de uma Galeria é definida pelos campos abaixo

| Campo        | Tipo    | Descrição                                        |
| ------------ | ------- | ------------------------------------------------ |
| id           | string  | Identificador único do usuário.                  |
| url          | string  | Um Link da Imagem.                               |



## Endpoints

| Método | Rota              | Descrição                                                                |
| ------ | ----------------- | ------------------------------------------------------------------------ |
| POST   | /gallery/:id      | Adiciona uma imagem a galeria de um veiculo usando seu ID como parâmetro |
| GET    | /gallery          | Lista Todos as imagens da galeria                                        |

### 7.1. **Adicionado uma imagem a galeria de veiculo**

### `/gallery/:id`

### Exemplo de Request:

```
GET /gallery/19381458-2c39-48e6-b35a-cd8bc091c3be
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"url": "img-1"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "944a0a3c-8ca0-4e22-a3de-d0044b66f246",
	"url": "img-5"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Not Found   | Veihicle not found.               |

### 7.2. **Listando Todas as imagens da Galeria**

### `/gallery`

### Exemplo de Request:

```
GET /gallery
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "c6a3d2e5-2cfd-48d7-9a35-e7f202141f7b",
		"url": "img-1",
		"vehicleId": "95b2c9fc-0426-4148-884e-e27b3fb94ec7"
	},
	{
		"id": "2fe021ab-5d5f-41c4-95af-92e68985833e",
		"url": "img-2",
		"vehicleId": "95b2c9fc-0426-4148-884e-e27b3fb94ec7"
	},
	{
		"id": "cf2ad274-1272-48ed-9f8e-b6fa5ed16649",
		"url": "img-2",
		"vehicleId": "95b2c9fc-0426-4148-884e-e27b3fb94ec7"
	},
	{
		"id": "14d801c6-d953-40b7-ab6e-9fb2dd1afa90",
		"url": "img-3",
		"vehicleId": "95b2c9fc-0426-4148-884e-e27b3fb94ec7"
	},
	{
		"id": "eb13d9ae-e75c-4e02-b944-abcb08104978",
		"url": "img-4",
		"vehicleId": "95b2c9fc-0426-4148-884e-e27b3fb94ec7"
	},
	{
		"id": "944a0a3c-8ca0-4e22-a3de-d0044b66f246",
		"url": "img-5",
		"vehicleId": "95b2c9fc-0426-4148-884e-e27b3fb94ec7"
	}
]
```