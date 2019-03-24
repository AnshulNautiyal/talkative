const UserAuthenticateForm =  {

    login:[
        {   
        id:Math.floor(Math.random()*1000000),
        labelName:'User Name',
        type:"text",
        name:'loginUsername',
        placeholder:'User Name'
        },
        {
            id:Math.floor(Math.random()*1000000),
            labelName:'Password',
            type:'password',
            name:'loginPassword',
            placeholder:'Password',
            length:5
        }
    ],

    signUp:  [
        {   
            id:Math.floor(Math.random()*100000),
            labelName:'Full Name',
            type:'text',
            name:'fullname',
            placeholder:'Full Name'
        },
        {
            id:Math.floor(Math.random()*100000),
            labelName:'Email',
            type:'email',
            name:'email',
            placeholder:'Email ID'
        },
        {
            id:Math.floor(Math.random()*100000),
            labelName:'User Name',
            type:'text',
            name:'signUpUsername',
            placeholder:'User Name'
        },
        {
            id:Math.floor(Math.random()*100000),
            labelName:'Password',
            type:'password',
            name:'signUpPassword',
            placeholder:'Password',
            length: 5
        }
    ]

}

export default UserAuthenticateForm;