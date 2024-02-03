import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'
import { useSearchParams } from "react-router-dom";
import {useSelector} from "react-redux";


const PostsPage = () => {

    const [posts,setPosts] = useState([])
    const [params,setParams] = useSearchParams()

    const counter = useSelector(state => state.counter)

    const changeUserFilter = (id) => {
        setParams({page: id})
        console.log(id)
    }

    const resetuserFilter = () => {
        setParams({})
    }

    useEffect(() => {
        const requestAllPosts = async () => {
            const response = await axios.get(`https://dummyjson.com/posts`)
            setPosts(response.data.posts)
        }
        requestAllPosts()
    },[])

    useEffect(() => {
        const requestEachPosts = async () => {
            const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${counter}`)
            setPosts(response.data.posts)
        }
        requestEachPosts()
    },[])

    return (
        <div>
            <div className={"userFilter"}>
                <button onClick={resetuserFilter}>Все посты</button>
                {[1, 2, 3].map((id) =>(
                    <button key={id} onClick={() => changeUserFilter(id)}>{id}</button>
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
