import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Informe um email!").max(30),
    password: yup.string().required("Informe a sua senha!").min(6, "A senha deve ter no mínimo 6 caracteres.").max(25, "A senha deve ter no máximo 25 caracteres."),
})

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório").min(10).max(60),
    email: yup.string().required("Informe um email!").email().max(30),
    celphone: yup.string().required("Telefone obrigatório").min(10).max(16),
    password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres.").max(25, "A senha deve ter no máximo 25 caracteres.").required("Informe a sua senha!"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senha devem ser iguais!"),
    seller: yup.boolean(),
    buyer: yup.boolean(),
})