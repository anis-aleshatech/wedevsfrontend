import User from "../../../apis/User";
export const loginSubmitAction = ({ commit, dispatch }, { loginForm }) => {
    commit('LOGIN_SUBMIT', { loginForm });

    dispatch('addNotification', {
        type: 'success',
        message: 'Order Submit Successfully.'
    }, { root: true });

    console.log(loginForm);
    
    User.login(
        loginForm
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error); 
    })
}


export const registrationSubmitAction = ({ commit, dispatch }, { registrationForm }) => {
    commit('REGISTRATION_SUBMIT', { registrationForm });

    dispatch('addNotification', {
        type: 'success',
        message: 'Registration Successfully.'
    }, { root: true });

    console.log(registrationForm);
    
    User.register(
        registrationForm
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error); 
    })
}


