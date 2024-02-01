import React, {useEffect, useState} from 'react';
import axios from "axios";
import "/src/App.css"


const Api = () => {

    const [post,setPost] = useState([])

    useEffect(() => {
        const request = async () => {
            const response = await axios.get('https://dummyjson.com/posts?limit=12')
            setPost(response.data.post)
        }
    })

    return (
        <div>
            <h1>Posts</h1>
            {post.map((item) => (
                <li key={item.id}>
                <Link to={`/posts${item.id}`}>{item.title}</Link>
                </li>
            ))}
        </div>
    );
};

export default Api;