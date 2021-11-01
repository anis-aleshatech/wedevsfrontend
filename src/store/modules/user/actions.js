import User from "../../../apis/User";
export const loginSubmitAction = ({ commit, dispatch }, loginForm ) => {
   

    dispatch('addNotification', {
        type: 'success',
        message: 'Order Submit Successfully.'
    }, { root: true });

    
    
    User.login(
        loginForm
    ).then((res)=>{
        commit('LOGIN_SUBMIT', res.data);
        
    }).catch((error)=>{
        console.log(error.message); 
    })
}


export const registrationSubmitAction = ({ commit, dispatch },  registrationForm ) => {
    commit('REGISTRATION_SUBMIT', { registrationForm });

    dispatch('addNotification', {
        type: 'success',
        message: 'Registration Successfully.'
    }, { root: true });

    
    User.register(
        registrationForm
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error.message); 
    })
}


