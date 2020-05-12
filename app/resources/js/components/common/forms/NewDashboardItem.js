import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Icon } from '..';

export const NewDashboardItem = ({ children, fields }) => {

    const fieldCheks = fields.reduce((acc, field) => (
        {...acc, [field.name]: Yup[field.type]().required()}
    ), {});

    const validations = Yup.object().shape({fieldCheks});

    const initialValues = fields.reduce((acc, field) => (
        {...acc, [field.name]: ''}
    ), {});

    return (
        <div className="overlay-form center">
            <div className="overlay-form-inner">
                <span className="left center">TITLE</span>
                <span className="right"/>
                <ul>
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validations}

                    >
                        {({values, errors, touched, isSubmitting, submitForm, isValid}) => (
                            <React.Fragment>
                                {fields.map((f, i ) => (
                                    <li className={'form-field-wrap ' + (errors[f.name] && touched[f.name] ? ' error' : '')} key={`dashboard-field-${f.name}`}>
                                        <label>{f.label}</label>
                                        <Field name={f.name} className={'form-field' + (errors[f.name] && touched[f.name] ? ' error' : '')}/>
                                    </li>
                                ))}
                                <span className={'submit-form ' + (!isValid || isSubmitting ? 'inactive' : '')}>
                                    <Icon icon="chevron-circle-right"  handleClick={() => isValid && !isSubmitting ? submitForm(values) : null}/>
                                </span>

                            </React.Fragment>
                        )}
                    </Formik>
                </ul>
            </div>
        </div>
    );
};
