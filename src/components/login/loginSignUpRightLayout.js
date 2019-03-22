import React from 'react';
import UserAuthenticateForm from '../../assets/appData/UserAuthenticateForm'

const Login  = (props) => {

    let loginOrSignUpForm = 0,headerLabel = null;

    if(props.loginOrSignUp.login.isLogin){

        headerLabel = props.loginOrSignUp.login.header;
        loginOrSignUpForm = UserAuthenticateForm.login.map((item,index) => {

            return (
                <div key={item.id} className="loginSignUp__Group">
                    <input type={item.type} id={item.name} placeholder={item.placholder} className="loginSignUp__input"/>
                    <label className="loginSignUp__label" htmlFor={item.name}>{item.labelName}</label>
                </div>
            )
        })
    }else {

        headerLabel = props.loginOrSignUp.signUp.header;
        loginOrSignUpForm =  UserAuthenticateForm.signUp.map((item,index) => {

            return (
                <div key={item.id} className="loginSignUp__Group">
                    <input type={item.type} id={item.name} placeholder={item.placholder} className="loginSignUp__input"/>
                    <label className="loginSignUp__label" htmlFor={item.name}>{item.labelName}</label>
                </div>
            )
        })
    }
    
    return (
            <div className='loginSignUpRightLayout'>
                <h1>{headerLabel}</h1>
                <form className="loginSignUp">
                    {loginOrSignUpForm}
                </form>
                
            </div>
    )
}
export default  Login;