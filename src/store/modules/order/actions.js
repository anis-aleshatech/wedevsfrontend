import Order from "../../../apis/Order";
export const orderSubmitAction = ({ commit, dispatch }, { form }) => {
    commit('ORDER_SUBMIT', { form });

    dispatch('addNotification', {
        type: 'success',
        message: 'Order Submit Successfully.'
    }, { root: true });
// console.log(form);
    
    Order.store(
        form
    ).then((res)=>{
        console.log(res.data);
    }).catch((error)=>{
        console.log(error);
    })
}


