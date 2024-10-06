<!-- Axios with CRUD operation -->
 
-services
    1. PostApi.jsx

-PostApi.jsx
- install the axios library form react 
- we will render the data from postapi.jsx to app.jsx

- GET method
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

- DELETE method
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


- POST method
    const handleDeletePost = async(id) => {
        try {
            const res = await deletePost(id);
            console.log(res);
            if(res.status === 200){
                const newUpdatedPost = data.filter((currPost) => {
                    return currPost.id !== id
                })
                setData(newUpdatedPost) 
            }else{
                console.log("fail to delete the post ", res.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

Request Method: POST
Status Code: 201 Created


- post method
export const postData = (post) => {
    return api.post("/posts", post)
}
this we have posts as root and post is our payload/data to pass
