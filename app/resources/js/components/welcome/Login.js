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
        actions.setSubmitting(true);
        
        if (isLogingIn) {
            requestLogin(values)
            .then(({data}) => {
                console.log({data});
            })
            .catch((e) => {
                console.log('login error', e);
                actions.setSubmitting(false);
            });

        } else  if ( !isLogingIn && values.password !== values.conf_password) {
            //show error msg or modal
        } else {
            requestRegistry(values)
            .then(({data}) => {
                console.log({data});
                actions.setSubmitting(false);
                
            })
            .catch((e) => {
                console.log('reg error', e);
            });
        }
        actions.resetForm();
    };

    const loginValidations = Yup.object().shape({
        name: Yup.string().required().min(4),
        password: Yup.string().required().min(8),
        conf_password: isLogingIn ? Yup.string() : Yup.string().required().min(8),
        email: Yup.string().email().required(), 
    });

    return (
        <Formik
            onSubmit={(values, actions) => submit(values, actions)}
            initialValues={{
                name: '',
                password: '',
                conf_password: '',
                email: '',
                profileImageUrl: '',
            }}
            validationSchema={loginValidations}
        >
            {({ touched, errors, values, submitForm, isValid, isSubmitting, resetForm }) => (
                <div className="overlay-form center">
                    <div className="overlay-form-inner">
                        <div className="form-title">
                            <span className="left">{trans(`auth.form.${!isLogingIn ? 'register_title' : 'login_title'}`)}</span>
                            <span className="right">(
                                {trans(`auth.form.${isLogingIn ? 'register' : 'login'}.goto`)}
                                <span className="pointer" onClick={() => {
                                    resetForm(); setProcess(isLogingIn ? 2 : 1);
                                }}>{trans('auth.links.here')}</span>
                            )</span>
                        </div>
                        <ul>
                            <li className={'form-field-wrap ' + (errors.email && touched.email ? ' error' : '')}>
                                <label>{trans('auth.form.username')}</label>
                                <Field name="name" className={'form-field' + (errors.name && touched.name ? ' error' : '')}/>
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
                                    <Field name="conf_password" type="password" className={'form-field' + (errors.conf_password && touched.conf_password ? ' error' : '')}/>
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