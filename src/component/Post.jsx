import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {
    const{title,id}=post
    const navigate = useNavigate()
    const handlepost = ()=>{
        navigate(`/posts/${id}`)

    }
    return (
        <div>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>show more</Link>
            <button onClick={handlepost}>show more2</button>
            
        </div>
    );
};
Post.propTypes ={
    post:PropTypes.object.isRequired
}

export default Post;