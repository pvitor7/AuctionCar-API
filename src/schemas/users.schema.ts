import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Informe um email!").max(30, "O email deve ter no máximo 30 caracteres!"),
    password: yup.string().required("Informe a sua senha!").min(6, "A senha deve ter no mínimo 6 caracteres.").max(25, "A senha deve ter no máximo 25 caracteres."),
})

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!").min(10).max(60),
    email: yup.string().required("Email obrigatório!").email("Informe um email!").max(30, "O email deve ter no máximo 30 caracteres!"),
    celphone: yup.string().required("Telefone obrigatório").min(10, "Telefone inválido!").max(12, "Telefone inválido!"),
    password: yup.string().required("Senha obrigatória!").min(6, "A senha deve ter no mínimo 6 caracteres.").max(25, "A senha deve ter no máximo 25 caracteres."),
    confirmPassword: yup.string().required().oneOf([yup.ref("password")], "As senha devem ser iguais!"),
    seller: yup.boolean(),
    buyer: yup.boolean(),
})