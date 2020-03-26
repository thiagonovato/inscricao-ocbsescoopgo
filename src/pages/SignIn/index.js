import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { signInRequest } from "../../store/modules/auth/actions";

import logoOcb from "../../assets/logo-ocb-menor.png";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("O e-mail é obrigatório."),
  password: Yup.string().required("A senha é obrigatória.")
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handlerSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logoOcb} alt="Covid19" />

      <Form schema={schema} onSubmit={handlerSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">{loading ? "Aguarde..." : "Acessar"}</button>
        <Link to="/">Voltar ao Formulário</Link>
      </Form>
    </>
  );
}
