import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000/user"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });


export const signIn=(formdata)=>API.post("/Login",formdata);
export  const signUp=(formdata)=>API.post("/Signup",formdata);
export  const coupon=(formdata)=>API.post("/coupons",formdata);
export  const getcoupon=(formdata)=>API.post("/getallcoupon",formdata);