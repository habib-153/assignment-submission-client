import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://assignment-11-server-side-category-0001.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error=>{
            console.log('error tracked in interceptor',error.response)
            if(error.response.status ===401 || error.response.status === 403){
                logOut()
                    .then(()=>{
                        navigate('/login')
                    })
                    .catch(err => console.error(err))
            }
        })
    },[logOut, navigate])
    return axiosSecure;
};

export default useAxiosSecure;