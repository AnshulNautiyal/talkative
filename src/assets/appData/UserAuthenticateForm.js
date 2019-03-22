const UserAuthenticateForm =  {

    login:[
        {   
        id:Math.floor(Math.random()*1000000),
        labelName:'User Name',
        type:"text",
        name:'username',
        placholder:'User Name'
        },
        {
            id:Math.floor(Math.random()*1000000),
            labelName:'Password',
            type:'password',
            name:'password',
            placholder:'Password'
        }
    ],

    signUp:  [
        {   
            id:Math.floor(Math.random()*100000),
            labelName:'Full Name',
            type:'text',
            name:'fullname',
            placholder:'Full Name'
        },
        {
            id:Math.floor(Math.random()*100000),
            labelName:'Email',
            type:'email',
            name:'email',
            placholder:'Email ID'
        },
        {
            id:Math.floor(Math.random()*100000),
            labelName:'User Name',
            type:'text',
            name:'username',
            placholder:'User Name'
        },
        {
            id:Math.floor(Math.random()*100000),
            labelName:'Password',
            type:'password',
            name:'password',
            placholder:'Password'
        }
    ]

}

export default UserAuthenticateForm;