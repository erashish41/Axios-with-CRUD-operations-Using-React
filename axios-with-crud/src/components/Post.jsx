import { useEffect, useState } from "react";
import { getPost } from "../services/PostApi";

export const Post = () => {

    const [data, setData] = useState([])

    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
      }
    
      useEffect(() => {
        getPostData()
      },[])

    return <section className="section-post">
            <ol>
                {data.map((currEl) =>{
                        const {id, body, title} = currEl
                            return <li key={id}>
                                <p>{title}</p>
                                <p>{body}</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </li>
                    })
                }
            </ol>
    </section>
}