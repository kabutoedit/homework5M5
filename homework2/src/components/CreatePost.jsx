import React, {useState} from 'react';
import axios from "axios";
import "/src/App.css"
import {Link, useNavigate} from "react-router-dom";

const CreatePost = () => {

    const [posts,setPosts] = useState([])
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [id,setId] = useState('')

    const navigation = useNavigate()

    const handleClick = () => {
        navigation("/posts")
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleIdChange = (e) => {
        setId(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const postData = {
        title: title,
        body: body,
        id: 1,
    }

    const handleSubmit = async(e) => {
        e.preventDefault

            const response = await axios.post('https://dummyjson.com/posts/add', postData)
            setPosts('post has created', response.data.posts)
            alert('Post processing')

    }

    return (
        <div>
            <h1>Create new post</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input type="text" value={title} onChange={handleTitleChange}/>
                </label>
                <label>Id:
                    <input type="text" value={id} onChange={handleIdChange}/>
                </label>
                <label>Body:
                    <input type="text" value={body} onChange={handleBodyChange}/>
                </label>
                <button type="submit" onClick={handleClick}>+</button>
            </form>
        </div>
    );
};

export default CreatePost;