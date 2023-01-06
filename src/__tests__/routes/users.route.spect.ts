import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import AppDataSource from "../../data-source";

describe("Teste de rota de usuários", () => {
  let connection: DataSource;
  let token: string;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Erro durante a inicialização do banco de dados", err)
      );
  });

  afterAll(async () => await connection.destroy());

  const user1 = {
    name: "User Test 1",
    celphone: "00988889999",
    email: "user.test1@email.com",
    password: "MyTest#123456"
  };


  test("Teste de criação de usuário", async () => {

    const newUser = await request(app).post("/users/register").send(user1);
    expect(newUser.body).toHaveProperty("id");
    expect(newUser.body.name).toBe(user1.name);
    expect(newUser.body.email).toBe(user1.email);
    expect(newUser.body.celphone).toBe(user1.celphone);
    expect(newUser.body).toHaveProperty("created_at");
  });

  test("Testando login", async () => {
    const loginResp = await request(app).post(`/login`).send({email: user1.email, password: user1.password});
    expect(loginResp.body).toHaveProperty('token');
})


});
