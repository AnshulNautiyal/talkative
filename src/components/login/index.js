import React from 'react';
import LoginSignUpLeftLayout from './loginSignUpLeftLayout';
import LoginSignUpRightLayout from './loginSignUpRightLayout';


export default class Authenticate extends React.Component {

    state = {
            login : {
                isLogin:true,
                header:'Login',
                username:'',
                password:''
            },
            signUp: {
                isSignUp:false,
                header:'Sign Up',
                fullname:'',
                email:'',
                username:'',
                password:''
            }
    }
    render() {
        return (
            <div className="loginParentComponent">
                <LoginSignUpLeftLayout/>
                <LoginSignUpRightLayout loginOrSignUp={this.state}/>
            </div>
        )
    }
    
}