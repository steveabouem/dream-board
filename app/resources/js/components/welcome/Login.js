import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts';
import { Formik, Field, Form } from 'formik';
import { Icon } from '../common';
import * as Yup from 'yup';
import { requestLogin, requestRegistry } from '../../api';

export const LoginPage = () => {
    const { user } = useContext(UserContext);
    const [process, setProcess] = useState(1);

    const isLogingIn = process === 1;

    const submit = (values, actions) => {
        if (process === 1) {
            requestLogin(values);

        } else {
            requestRegistry(values);
        }
    };

    const loginValidations = Yup.object().shape({
        userName: Yup.string().required(),
        password: Yup.string().required(),
        conf_password: isLogingIn ? Yup.string() : Yup.string().required(),
        email: Yup.string().email().required(), 
    });

    return (
        <Formik
            onSubmit={(values, actions) => submit(values, actions)}
            initialValues={{
                userName: '',
                password: '', //password,
                conf_password: '',
                email: '', //find a way to hash
                profileImageUrl: '',
            }}
            validationSchema={loginValidations}
        >
            {({ touched, errors, values, submitForm, isValid, isSubmitting }) => (
                <div className="overlay-form center">
                    <div className="overlay-form-inner">
                        <div className="form-title">
                            <span className="left">{trans('auth.form.login_title')}</span>
                            <span className="right">
                                {trans(`auth.form.${isLogingIn ? 'register' : 'login'}.goto`)}
                                <span className="pointer" onClick={() => setProcess(isLogingIn ? 2 : 1)}>{trans('auth.links.here')}</span>
                            </span>
                        </div>
                        <ul>
                            <li className={'form-field-wrap ' + (errors.email && touched.email ? ' error' : '')}>
                                <label>{trans('auth.form.username')}</label>
                                <Field name="userName" className={'form-field' + (errors.userName && touched.userName ? ' error' : '')}/>
                            </li>
                            <li>
                                <label>{trans('auth.form.email')}</label>
                                <Field name="email" className={'form-field' + (errors.email && touched.email ? ' error' : '')}/>
                            </li>
                            <li>
                                <label>{trans('auth.form.password')}</label>
                                <Field name="password" type="password" className={'form-field' + (errors.password && touched.password ? ' error' : '')}/>
                            </li>
                            {!isLogingIn && (
                                <li>
                                    <label>{trans('auth.form.confirm')}</label>
                                    <Field name="conf_password" type="password" className={'form-field' + (errors.c_password && touched.c_password ? ' error' : '')}/>
                                </li>
                            )}
                            <span className={'submit-form ' + (!isValid || isSubmitting ? 'inactive' : '')}>
                                <Icon icon="chevron-circle-right"  handleClick={() => isValid && !isSubmitting ? submitForm(values) : null}/>
                            </span>
                        </ul>
                    </div>
                </div>
            )}
        </Formik>
    );
};