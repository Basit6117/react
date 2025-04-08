// // Formik and Yup Library for form and validation
import React from 'react'
import { useFormik } from 'formik'
import { yupToFormErrors } from 'formik'
import * as Yup from 'yup';
const FormikLogin = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required()
            .max(12, 'must be less than 12')
            .min(3, 'must be greater than 3'),
            password: Yup.string().required().min(4).max(10)
        })
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <label htmlFor='username'>Username</label>
                <input type="text"
                    name='username'
                    id='username'
                    value={formik.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                />
                <span  className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</span>
                <label htmlFor='password'>Password</label>

                <input type="password"
                    name='password'
                    id='password'
                    value={formik.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <span className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</span>

                <button type='submit'>Button</button>
            </form>
        </div>
    )
}

export default FormikLogin
