<!-- Axios with CRUD operation -->
 
-services
    1. PostApi.jsx

-PostApi.jsx
- install the axios library form react 
- we will render the data from postapi.jsx to app.jsx

- get method
import axios from "axios";
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
// by using "get" Method
export const getMethod = () =>{
    return api.get("/posts");
}

Request Method: GET
Status Code: 200 OK

- delete method
    const handleDeletePost = async(id) => {
            const res = await deletePost(id);
            // console.log(res);
            if(res.status === 200){
                const newUpdatedPost = data.filter((currPost) => {
                    return currPost.id !== id
                })
                setData(newUpdatedPost)
            }}

Request Method: DELETE
Status Code: 200 OK