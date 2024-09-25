<!-- Axios with CRUD operation -->
 
-services
    1. PostApi.jsx

-PostApi.jsx
- install the axios library form react 
- we will render the data from postapi.jsx to app.jsx


import axios from "axios";
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
// by using "get" Method
export const getMethod = () =>{
    return api.get("/posts");
}

