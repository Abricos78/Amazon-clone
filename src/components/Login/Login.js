import React from 'react'
import style from './Login.module.css'
import logo from '../../assets/img/amazon-logo.png'
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../../redux/loginReducer';
import { auth } from '../../firebase';

function Login({email, password, setEmail, setPassword}) {

    let history = useHistory()
    const registerBtn = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className={style.login}>

            <Link to="/">
                <img className={style.logo} src={logo} alt="logo"/>
            </Link>

            <div className={style.container}>
                <h1>Sign In</h1>

                <form >
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button className={style.signIn} onClick={signIn}>Sign In</button>

                </form>

                <p>
                    By signing-in you agree to the <strong>AMAZON-CLONE</strong> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.
                </p>

                <button className={style.register} onClick={registerBtn}>Create your Amazon-Clone Account</button>

            </div>     
        </div>
    )
}

let mapStateToProps = state => {
    return {
        email: state.loginPage.email,
        password: state.loginPage.password
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setEmail: email => {
            dispatch(setEmail(email))
        },
        setPassword: password => {
            dispatch(setPassword(password))
        }
    }
}

let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
