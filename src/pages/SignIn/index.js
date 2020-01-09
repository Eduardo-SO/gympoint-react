import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

export default function SignIn() {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email('• Email inválido')
            .required('• Digite seu e-mail'),
        password: Yup.string().required('• Digite sua senha'),
    });

    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={Logo} alt="Gympoint" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <strong>Seu e-mail</strong>
                <Input name="email" placeholder="exemplo@gmail.com" />
                <strong>Sua senha</strong>
                <Input
                    name="password"
                    type="password"
                    placeholder="••••••••••••"
                />

                <button type="submit">Entrar no sistema</button>
            </Form>
        </>
    );
}
