import React from 'react';
import LoginSignUpLeftLayout from './loginSignUpLeftLayout';
import LoginSignUpRightLayout from './loginSignUpRightLayout';
const Chatkit = require('@pusher/chatkit-server');
const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:2aa89743-e046-4af4-a53c-5a9241e1c1c4",
    key: "13d9fe32-9413-4b0d-8a9b-bc2b02fdefbe:F0wsGfqikiaCSmtpTLpqNOcxcu4HsG9fX/cvF0bIZTQ="
})

export default class Authenticate extends React.Component {


    
    state = {
            login : {
                
                static:{
                    header: 'Login',                    
                    helpText: 'Not registered? ',
                    helpTextHyperLink: 'Create an account'
                },
                dynamic : {
                    isLogin: true,
                    isUserNameNotExist: false,
                    isPasswordIncorrect: false,
                    loginUsername: '',
                    loginPassword: ''
                },
                error : {
                    userLoginError: 'User Does Not Exist',
                    passwordLoginError:'Invalid Password'
                }
                
            },
            signUp: {

                static : {
                    header: 'Sign Up',
                    helpText: 'Already have an account? ',
                    helpTextHyperLink: 'Log In'
                },
                dynamic : {
                    isSignUp: false,
                    fullname: '',
                    email: '',
                    signUpUsername: '',
                    signUpPassword: '',
                },
                error : {
                    isUserNameExist:false,
                    message:'Username already taken!!'  
                }

                
            }
    }

    // Is user is in Login page or Sign Up Page
    handleLoginStatus = () => {
        this.setState((prevState) => {
            return {

                ...prevState,
                login : {
                        ...prevState.login,
                        dynamic: {
                            ...prevState.login.dynamic,
                            isLogin: !prevState.login.dynamic.isLogin,
                            isUserNameNotExist: false,
                            isPasswordIncorrect: false,
                        }
                        
                },
                signUp: {
                    ...prevState.signUp,
                    dynamic: {
                        ...prevState.signUp.dynamic,
                        isSignUp: !prevState.signUp.dynamic.isSignUp,
                    },
                    error: {
                        ...prevState.signUp.error,
                        isUserNameExist: false,
                    }

                    
                }

            }
        })
    }
    
    // Manage user data in Login / Sign Up page
    handleLoginSignUpState = (event) => {

        const { name, value } = event.target;

        if(this.state.login.dynamic.isLogin){
            
            this.setState(prevState => {
                return {
                    ...prevState,
                    login: {
                        ...prevState.login,
                        dynamic: {
                            ...prevState.login.dynamic,
                            [name]: value,
                        }
                    }
                }
            })
            
        }else {

            this.setState(prevState => {
                return {
                    ...prevState,
                    signUp: {
                        ...prevState.signUp,
                        dynamic: {
                            ...prevState.signUp.dynamic,
                            [name]: value
                        }
                    }
                }
            })
        }
        
    }


    handleSubmit = (event) => {
        
        event.preventDefault();
        

        // Create New User during sign up
        if (this.state.signUp.dynamic.isSignUp){
            
            if(this.state.signUp.error.isUserNameExist == false){

                chatkit.createUser({
                    id: Math.floor(Math.random() * 100000).toString(),
                    name: this.state.signUp.dynamic.signUpUsername,
                    customData: { 
                            fullname: this.state.signUp.dynamic.fullname,
                            email: this.state.signUp.dynamic.email,
                            password: this.state.signUp.dynamic.signUpPassword,
                    }
                }).then(() => {
                        console.log('User created successfully');
                        this.props.history.push('/talkative');
                    }).catch((err) => {
                        console.log('User Do not created');
                });
            }
        }else {
            this.userAuthenticateDuringLogin()
        }
        
    }
    
    handleBlur = (loginOrSignUp) => {
        
        let allUser;

        chatkit.getUsers()
        .then((res) => {
            
            allUser = [...res];
            switch (loginOrSignUp) {
                case 'signUpUsername':
                    
                    let bool = this.userNameExitDuringSignUp(allUser)
                    
                    if(bool){
                        
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                signUp: {
                                    ...prevState.signUp,
                                    error: {
                                        ...prevState.signUp.error,
                                        isUserNameExist: true,
                                    }
                                }
                            }
                        })
                    }else {

                        this.setState(prevState => {
                            return {
                                ...prevState,
                                signUp: {
                                    ...prevState.signUp,
                                    error: {
                                        ...prevState.signUp.error,
                                        isUserNameExist: false,
                                    }
                                }
                            }
                        })
                    }
                    break;
                default:
                    
            }
        }).catch((err) => {
            console.log(err);
        });

    }

    userNameExitDuringSignUp = (allUser) => {

        const userName = this.state.signUp.dynamic.signUpUsername;
        let boolean = false;
        for (let item in allUser) {
            
            if (userName === allUser[item].name) {
                boolean = true;
                
                break;
            }
        }
        return boolean;
    }
    

    userAuthenticateDuringLogin = () => {
        chatkit.getUsers()
            .then((res) => {
                 let allUser = [...res];

                let userBool = false;
                let passwordBool = false;
                const userName = this.state.login.dynamic.loginUsername;
                const password = this.state.login.dynamic.loginPassword;
                console.log(allUser)
                for (let item in allUser) {

                    if (userName === allUser[item].name) {
                        userBool = true;
                        if (password === allUser[item].custom_data.password ){
                            passwordBool = true;
                        }
                        break;
                    }
                }


                if(userBool){

                    if (passwordBool){
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                login: {
                                    ...prevState.login,
                                    dynamic: {
                                        ...prevState.login.dynamic,
                                        isUserNameNotExist: false,
                                        isPasswordIncorrect:false
                                    }
                                }
                            }
                        })

                        this.props.history.push('/talkative');

                    }else {
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                login: {
                                    ...prevState.login,
                                    dynamic: {
                                        ...prevState.login.dynamic,
                                        isUserNameNotExist: false,
                                        isPasswordIncorrect: true
                                    }
                                }
                            }
                        })

                    }


                }else{
                    this.setState(prevState => {
                        return {
                            ...prevState,
                            login: {
                                ...prevState.login,
                                dynamic: {
                                    ...prevState.login.dynamic,
                                    isUserNameNotExist: true,
                                    isPasswordIncorrect: false
                                }
                            }
                        }
                    })
                }

            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        
        return (
            <div className="loginParentComponent">
                <LoginSignUpLeftLayout/>
                <LoginSignUpRightLayout loginOrSignUp={this.state} 
                                        onClick={this.handleLoginStatus}
                                        helpText={this.state.login.dynamic.isLogin ? 
                                                    this.state.login.static.helpText :
                                                    this.state.signUp.static.helpText } 
                                        helpTextHyperLink={this.state.login.dynamic.isLogin ?
                                                            this.state.login.static.helpTextHyperLink :
                                                            this.state.signUp.static.helpTextHyperLink} 
                                        button={this.state.login.dynamic.isLogin ? 'Login': 'Sign Up'}

                                        showSignUpErrorMessage={this.state.signUp.dynamic.isSignUp ? this.state.signUp.error.isUserNameExist : false}
                                        signUpErrorMesg={this.state.signUp.error.message}

                                        showUserLoginErrorMessage={this.state.login.dynamic.isLogin ? this.state.login.dynamic.isUserNameNotExist : false}
                                        userLoginErrorMesg={this.state.login.error.userLoginError}

                                        showPasswordLoginErrorMessage={this.state.login.dynamic.isLogin ? this.state.login.dynamic.isPasswordIncorrect : false}
                                        passwordLoginErrorMesg={this.state.login.error.passwordLoginError}

                                        handleLoginSignUpState={this.handleLoginSignUpState}
                                        handleSubmit={this.handleSubmit}
                                        handleBlur={this.handleBlur}
                                        />
            </div>
        )
    }
    
}