import React, {useEffect, useState} from 'react';
import axios from "axios";
import "/src/App.css"


const PostsPage = () => {

    const [posts,setPosts] = useState([])


    useEffect(() => {
        const request = async () => {
            const response = await axios.get('https://dummyjson.com/posts')
            setPosts(response.data.posts)
        }
        request()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts && posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

};

// return (
//     <div>
//         <h1>Posts</h1>
//         <ul>
//             {posts.map((item) => (
//                 <li key={item.id}>
//                     <Link to={`/posts${item.id}`}>{item.title}</Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

export default PostsPage;
