const authreducer=(state={authData:null,errorMessage:null,coupon:[]},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('userprofile',JSON.stringify({...action?.data}));
            return {...state,authData:action?.data}

        case 'LOGOUT':
            localStorage.clear()
            return{...state,authData:null}
        case 'Error':
            return{...state,errorMessage:action?.data}
        case 'Coupon':
            return{...state,coupon:action?.data}
        default:
            return state;
    }
}

export default authreducer;