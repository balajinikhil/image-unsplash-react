import axios from 'axios';


const axiosConfig = axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization:'Client-ID DHJjgxY4gMh7c96maLKJh1jEaHN1ZNiELubHxPSFI_o'
    },
    
})



export default axiosConfig ;