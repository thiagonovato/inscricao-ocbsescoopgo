import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputMask from 'react-input-mask';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { subscriptionRequest } from '~/store/modules/subscription/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Seu CPF está correto?')
    .required('O CPF é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  phone: Yup.string()
    .matches(/\(\d{2,}\) \d{4,}\-\d{4}/g, 'Seu telefone está correto?')
    .required('Telefone é obrigatório.'),
  cooperativa: Yup.string().required('A Cooperativa é obrigatória.'),
});

export default function FormComponent() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handlerSubmit(data, { resetForm }) {
    let { name, cpf, email, phone, cooperativa } = data;

    dispatch(subscriptionRequest(name, cpf, email, phone, cooperativa));

    resetForm();
  }

  return (
    <div>
      <Form schema={schema} onSubmit={handlerSubmit}>
        <div className='itemForm'>
          <Input name='name' placeholder='Nome comlpeto' className='textForm' />
        </div>
        <div className='itemForm'>
          <InputMask mask='999.999.999-99'>
            {() => <Input name='cpf' placeholder='CPF' className='textForm' />}
          </InputMask>
        </div>
        <div className='itemForm'>
          <Input
            type='email'
            name='email'
            placeholder='E-mail'
            className='textForm'
          />
        </div>
        <div className='itemForm'>
          <InputMask mask='(99) 99999-9999'>
            {() => (
              <Input name='phone' placeholder='Telefone' className='textForm' />
            )}
          </InputMask>
        </div>
        <div className='itemForm'>
          <Input
            name='cooperativa'
            placeholder='Cooperativa'
            className='textForm'
          />
        </div>

        <div className='buttonForm'>
          <button type='submit' className='button'>
            {loading ? 'Aguarde...' : 'Enviar'}
          </button>
        </div>
      </Form>
      <div>
        Cadastre-se para participar do sorteio de dois exemplares do livro
        "Filosofia de Gestão - Cultura e Estratégia com Pessoas"
      </div>
    </div>
  );
}
