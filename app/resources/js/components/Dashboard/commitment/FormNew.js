import React from 'react';
import { Formik, Field } from 'formik';
import { LabelledField } from '../../common';

export const FormNew = () => {

    return (
        <Formik
            initialValues={{name: '', deadlines: '', details: ''}}
            onSubmit={createCommitment}
        >
            {({touched, errors, values, isSubmitting}) => (
                <div>
                    <LabelledField 
                        label="Name"
                        placeholder="Name your commitment"
                    />
                </div>
            )}
        </Formik>
    )
};

