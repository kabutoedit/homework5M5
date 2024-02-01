import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import "/src/App.css"
import axios from "axios";


const SinglePost = () => {
    const {postId} = useParams()
    const [getPost,setGetPost] = useState({})

    useEffect(() => {
        const request = async () => {
            const response = await axios.get( `https://dummyjson.com/posts/${postId}`)
            setGetPost(response.data)
        }
        request()
    }, [])

    const navigate = useNavigate()
    const click = () => {
        navigate('/')
    }

    return (
        <div>
        <h1>You are reading {`${getPost.id} post`}</h1>
            <p>{getPost.title}</p>
            <button onClick={click}>HOME</button>
        </div>
    );
};

export default SinglePost;