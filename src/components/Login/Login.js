import React from 'react'
import style from './Login.module.css'
import logo from '../../assets/img/amazon-logo.png'
import { Link } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';

function Login() {
    return (
        <div className={style.login}>
            <Link to="/">
                <img className={style.logo} src={logo}/>
            </Link>
            <Formik>
                <div className={style.container}>
                    <h1>Sign In</h1>
                    <Form>
                        <h5>E-mail</h5>
                        <Field type='text'/>

                        <h5>Password</h5>
                        <Field type='password'/>

                        <button className={style.signIn}>Sign In</button>
                    </Form>
                    <p>
                        By signing-in you agree to the <strong>AMAZON-CLONE</strong> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.
                    </p>
                    <button className={style.register}>Create your Amazon-Clone Account</button>
                </div>
            </Formik>
        
        </div>
    )
}

export default Login
