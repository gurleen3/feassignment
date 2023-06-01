import * as api from "../api/api";

export const signin=(formdata,navigate)=>async(dispatch)=>{

    try {
        const{data}=await api.signIn(formdata);
        dispatch({ type:'AUTH', data });
        navigate('/')
        
    } catch (error) {
        dispatch({type:'Error',data:error?.response?.data})

       
    }

};

export const signup=(formdata,navigate)=>async(dispatch)=>{

    try {
        const{data}=await api.signUp(formdata);
        dispatch({ type: 'AUTH', data });
        navigate('/')
        
    } catch (error) {
    
        dispatch({type:'Error',data:error?.response?.data})
        
    }

};

export const coupon =(formdata)=>async(dispatch)=>{
    try {
        const{data}=await api.coupon(formdata);
        dispatch({ type: 'Coupon', data });
    } catch (error) {
        dispatch({type:'Error',data:error?.response?.data})
        
    }
}

export const getallcoupon =(formdata)=>async(dispatch)=>{
    try {
        const{data}=await api.getcoupon(formdata);
        dispatch({ type: 'Coupon', data });
    } catch (error) {
        dispatch({type:'Error',data:error?.response?.data})
        
    }
}