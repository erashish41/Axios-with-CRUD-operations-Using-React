import { useEffect, useState } from "react"
import { postData } from "../services/PostApi";

export const Form = ({data, setData, updateDataApi, setUpdateDataApi}) => {

    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })

    let isEmpty = Object.keys(updateDataApi).length === 0

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
            setUpdateDataApi({})
        }
    }

    const updatePostData = async () => {
       try {
        const res = await putData(updateDataApi.id, addData);
        console.log(res);
        if(res.status === 200){
        setData((prev) => {
            return prev.map((currElm) => {
                return currElm.id === updateDataApi.id ? res.data : currElm;
            })
        })

            setAddData({title: "",body: ""})
        }
        }catch (error) {
            console.log(error);
       }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if(action === "Add"){
            addPostData();
        }else if(action === "Edit"){
            updatePostData();
        }
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

            <button 
                type="submit"
                value={isEmpty ? "Add" : "Edit"}
                >
                    {isEmpty ? "Add" : "Edit" }
                </button>
        </form>
    )
}