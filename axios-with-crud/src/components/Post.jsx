import { useEffect, useState } from "react";
import { deletePost, getPost } from "../services/PostApi";
import { Form } from "./Form";

export const Post = () => {

    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({})

    const getPostData = async () => {
        const res = await getPost();
        // console.log(res.data);
        setData(res.data);
    }
    
    useEffect(() => {
        getPostData()
    },[])

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

    const handleUpdatePost = (currEl) => setUpdateDataApi(currEl)

    return (
        <>
            <section className="section-form">
                <Form 
                    data= {data}
                    setData= {setData}
                    updateDataApi= {updateDataApi}
                    setUpdateDataApi= {setUpdateDataApi}
                    />   
            </section>
            <section className="section-post">
            <ol>
                {data.map((currEl) =>{
                    const {id, body, title} = currEl
                            return <li key={id}>
                                <p>{title}</p>
                                <p>{body}</p>
                                <button onClick={() => handleUpdatePost(currEl)}>Edit</button>
                                <button 
                                    className="btn-delete"
                                    onClick={()=> handleDeletePost(id)}>Delete</button>
                            </li>
                        }
                    )
                }
            </ol>
        </section>
    </>
)}