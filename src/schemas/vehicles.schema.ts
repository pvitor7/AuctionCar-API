import * as yup from "yup";

export const vehicleSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Informe um email!").max(30),
    password: yup.string().required("Informe a sua senha!").min(6, "A senha deve ter no mínimo 6 caracteres.").max(25, "A senha deve ter no máximo 25 caracteres."),
})
