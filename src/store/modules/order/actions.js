import Order from "../../../apis/Order";
export const orderSubmitAction = ({ commit },  form ) => {
    commit('ORDER_SUBMIT', { form });


    Order.store(
        form
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error); 
    })
}


