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
    password: "MyTest#123456",
    confirmPassword: "MyTest#123456"
  };


  test("Teste de criação de usuário", async () => {

    const newUser = await request(app).post("/users/register").send(user1);
    expect(newUser.body).toHaveProperty("id");
    expect(newUser.body.name).toBe(user1.name);
    expect(newUser.body.email).toBe(user1.email);
    expect(newUser.body.celphone).toBe(user1.celphone);
    expect(newUser.body).toHaveProperty("created_at");
  });


  test("Teste de criação de usuário sem nome", async () => {
    const user2 = {
      name: "",
      celphone: "00988889999",
      email: "user.test2@email.com",
      password: "MyTest#123456",
      confirmPassword: "MyTest#123456"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("Nome obrigatório!");
  });

  test("Teste de criação de usuário sem email", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "",
      password: "MyTest#123456",
      confirmPassword: "MyTest#123456"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("Email obrigatório!");
  });

  test("Teste de criação de usuário com email inválido", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "testeInvalidEmail",
      password: "MyTest#123456",
      confirmPassword: "MyTest#123456"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("Informe um email!");
  });

  test("Teste de criação de usuário com email maior do que 30 caracteres", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "testeInvalidEmail12345678910987654321@mail.com",
      password: "MyTest#123456",
      confirmPassword: "MyTest#123456"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("O email deve ter no máximo 30 caracteres!");
  });

  test("Teste de criação de usuário com senha menor do que 6 caracteres", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "teste2@mail12345678910987654321@mail.com",
      password: "MyTes",
      confirmPassword: "MyTes"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("A senha deve ter no mínimo 6 caracteres.");
  });

  test("Teste de criação de usuário com senha maior do que 25 caracteres", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "teste2@mail12345678910987654321@mail.com",
      password: "MyTest#12345612345678910987654321@mailpassword",
      confirmPassword: "MyTest#12345612345678910987654321@mailpassword"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("A senha deve ter no máximo 25 caracteres.");
  });

  test("Teste de criação de usuário com confirmação de senha incorreta", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "teste2@mail12345678910987654321@mail.com",
      password: "MyTest#12345612345678910987654321@mailpassword",
      confirmPassword: "MyTest#12345612345678910987654321@mailpassworD"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("As senha devem ser iguais!");
  });

  test("Testando login", async () => {
    const loginResp = await request(app).post(`/login`).send({email: user1.email, password: user1.password});
    expect(loginResp.body).toHaveProperty('token');
  })


  test("Testando login com email inválido", async () => {
    const loginResp = await request(app).post(`/login`).send({email: "invalid email", password: "Pass1234"});
    expect(loginResp.body.message).toBe('Informe um email!');
  })

  test("Teste de criação de usuário com confirmação de senha incorreta", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889999",
      email: "teste2@mail12345678910987654321@mail.com",
      password: "MyTest#12345612345678910987654321@mailpassword",
      confirmPassword: "MyTest#12345612345678910987654321@mailpassworD"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("As senha devem ser iguais!");
  });

  test("Teste de criação de usuário com telefone com menos de 10 caracteres", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889",
      email: "teste2@mail.com",
      password: "MyTest#1234",
      confirmPassword: "MyTest#1234"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("Telefone inválido!");
  });


  test("Teste de criação de usuário com telefone com mais de 12 caracteres", async () => {
    const user2 = {
      name: "User Test 2",
      celphone: "00988889886655987",
      email: "teste2@mail.com",
      password: "MyTest#1234",
      confirmPassword: "MyTest#1234"
    };
    const newUser = await request(app).post("/users/register").send(user2);
    expect(newUser.body.message).toBe("Telefone inválido!");
  });




  test("Testando login com senha com email maior do que 30 caracteres", async () => {
    const loginResp = await request(app).post(`/login`).send({email: "test12345678987654321012345678910@email.com", password: "Pass12345678987", confirmPassword: "Pass12345678987"});
    expect(loginResp.body.message).toBe("O email deve ter no máximo 30 caracteres!");
  })


  test("Testando login a senha com senha com menos de 6 caracteres", async () => {
    const loginResp = await request(app).post(`/login`).send({email: "test email", password: "1234", confirmPassword: "1234"});
    expect(loginResp.body.message).toBe("A senha deve ter no mínimo 6 caracteres.");
  })

  test("Testando login com senha com senha maior do que 25 caracteres", async () => {
    const loginResp = await request(app).post(`/login`).send({email: "test@email.com", password: "Pass12345678987654321012345678910", confirmPassword: "Pass12345678987654321012345678910"});
    expect(loginResp.body.message).toBe("A senha deve ter no máximo 25 caracteres.");
  })


});
