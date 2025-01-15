import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup";
const FormikComponent = () => {
    return (
        <div className='container-fluid'>
            <Formik initialValues={{
                UserName: '',
                Age: 0,
                City: '-1',
                Mobile: ''
            }}

                validationSchema={yup.object({
                    UserName: yup.string().required('UserName is Required').min(4, 'Name too short'),
                    Age: yup.number().required('Age Required').min(18, 'Age min 18').max(60, 'Age max 60'),
                    City: yup.string().notOneOf(['-1'], 'Please Select your city').required('City is Required'),
                    Mobile: yup.string().required('Mobile Number is Required').matches(/\+91\d{10}/, 'Invalid Mobile Number')
                })}
                onSubmit={(user) => {
                    console.log(user);
                }}>
                <Form>
                    <dl>
                        <dt>UserName</dt>
                        <dd> <Field type="text" name='UserName'></Field>
                        </dd>
                        <dd className='text-danger'><ErrorMessage name='UserName'></ErrorMessage></dd>
                        <dt>Age</dt>
                        <dd> <Field type="text" name='Age'></Field>
                        </dd>
                        <dd className='text-danger'><ErrorMessage name='Age'></ErrorMessage></dd>
                        <dt>City</dt>
                        <dd>
                            <Field as="select" name="City">
                                <option value="-1">Select your city</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Chicago">Chicago</option>
                            </Field>
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="City" />
                        </dd>
                        <dt>Mobile</dt>
                        <dd> <Field type="text" name='Mobile'></Field>
                        </dd>
                        <dd className='text-danger'><ErrorMessage name='Mobile'></ErrorMessage></dd>
                    </dl>
                    <button type="submit" >Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormikComponent
