
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>posts section{posts.length}</h1>
            
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
            
        </div>
    );
};

export default Posts;