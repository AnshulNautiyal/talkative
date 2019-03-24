import React from 'react';
import UserAuthenticateForm from '../../assets/appData/UserAuthenticateForm';
import 'bulma';

const Login  = (props) => {

    let loginOrSignUpForm = 0,headerLabel = null;

    if(props.loginOrSignUp.login.dynamic.isLogin){

        headerLabel = props.loginOrSignUp.login.static.header;
        loginOrSignUpForm = UserAuthenticateForm.login.map((item,index) => {

            return (
                <div key={item.id} className="loginSignUp__Group">
                    <input type={item.type} 
                            id={item.name} 
                            placeholder={item.placeholder} 
                            className="loginSignUp__input" 
                            required
                            name={item.name}
                            onChange={props.handleLoginSignUpState}
                            minLength={item.length }
                            onBlur={() => props.handleBlur(item.name)}
                            />
                    <label className="loginSignUp__label" htmlFor={item.name}>{item.labelName}</label>
                </div>
            )
        })
    }else {

        headerLabel = props.loginOrSignUp.signUp.static.header;
        loginOrSignUpForm =  UserAuthenticateForm.signUp.map((item,index) => {

            return (
                <div key={item.id} className="loginSignUp__Group">
                    <input type={item.type} 
                            id={item.name} 
                            placeholder={item.placeholder} 
                            className="loginSignUp__input" 
                            required
                            name={item.name}
                            onChange={props.handleLoginSignUpState} 
                            minLength={item.length}  
                            onBlur={() => props.handleBlur(item.name)}  
                            />
                    <label className="loginSignUp__label" htmlFor={item.name}>{item.labelName}</label>
                </div>
            )
        })
    }
    
    return (
        <div className='loginSignUpRightLayout'>
                <h1>{headerLabel}</h1>
                <form className="loginSignUp" onSubmit={props.handleSubmit}>
                    {loginOrSignUpForm}
                    <input type="submit" value={props.button} className="btn btn--green"/>
                    <div className="signUpHelpText" > {props.helpText}<span onClick={props.onClick}>{props.helpTextHyperLink}</span></div> 
                </form>
                {
                    props.showSignUpErrorMessage && (
                    <div className="errorMesg notification errorMesgColor is-danger has-margin-10">
                        {/* <button className="delete"></button> */}
                        {props.signUpErrorMesg}
                    </div>)
                }
                {
                    props.showUserLoginErrorMessage && (
                    <div className="errorMesg notification errorMesgColor is-danger has-margin-10">
                        {/* <button className="delete"></button> */}
                        {props.userLoginErrorMesg}
                    </div>)
                }
                {
                    props.showPasswordLoginErrorMessage && (
                        <div className="errorMesg notification errorMesgColor is-danger has-margin-10">
                            {/* <button className="delete"></button> */}
                            {props.passwordLoginErrorMesg}
                        </div>)
                }
            </div>
    )
}
export default  Login;