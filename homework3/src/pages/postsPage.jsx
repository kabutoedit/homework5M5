import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'
import { useSearchParams } from "react-router-dom";


const PostsPage = () => {

    const [posts,setPosts] = useState([])
    const [params,setParams] = useSearchParams()

    const changePage = (page) => {

        const requestEachPosts = async () => {
            const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(page - 1) * 10}`)
            setPosts(response.data.posts)
        }
        requestEachPosts()
    }

    const resetPage = () => {
        setParams({})

        const requestAllPosts = async () => {
            const response = await axios.get(`https://dummyjson.com/posts`)
            setPosts(response.data.posts)
        }
        requestAllPosts()
    }


    useEffect(() => {
        const requestAllPosts = async () => {
            const response = await axios.get(`https://dummyjson.com/posts`)
            setPosts(response.data.posts)
        }
        requestAllPosts()
    },[])


    return (
        <div>
            <div className={"pages"}>
                <button onClick={resetPage}>Все посты</button>
                {[1, 2, 3].map((id) =>(
                    <button key={id} onClick={() => changePage(id)}>{id}</button>
                ))}
            </div>
            <h2>Posts</h2>
                <ul>
                    {posts && posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
        </div>
    );
};

export default PostsPage;
