import { useEffect, useState } from "react"
import { postData } from "../services/PostApi";

export const Form = ({data, setData, updateDataApi, setUpdateDataApi}) => {

    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })

    useEffect(() => {
        updateDataApi && 
        setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || ""
        })
    }, [updateDataApi])

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setAddData((prevData) =>{
            // console.log(prevData);
            return {
                ...prevData, 
                [name] : value
            }
        })
    }

    const addPostData = async () => {
       const res = await postData(addData)
        console.log("response" , res);
           if(res.status === 201){
            setData([...data, res.data])
            setAddData({title:"", body:""})
           }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData()
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    autoComplete="off"
                    placeholder="add title"
                    value={addData.title}
                    onChange={handleInputChange}></input>
            </div>

            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    id="body"
                    name="body"
                    autoComplete="off"
                    placeholder="add body"
                    value={addData.body}
                    onChange={handleInputChange}></input>
            </div>

            <button type="submit">Add</button>
        </form>
    )
}