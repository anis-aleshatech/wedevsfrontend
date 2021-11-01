import User from "../../../apis/User";
export const loginSubmitAction = ({ commit, dispatch }, { form }) => {
    commit('LOGIN_SUBMIT', { form });

    dispatch('addNotification', {
        type: 'success',
        message: 'Order Submit Successfully.'
    }, { root: true });

    console.log(form);
    
    User.login(
        form
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error); 
    })
}


