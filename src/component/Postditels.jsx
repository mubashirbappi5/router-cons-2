import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Postditels = () => {
    const postditl = useLoaderData();
    const navigate = useNavigate()
    const {postid} = useParams()
    const {title,body} = postditl;
    const handleback =()=>{
        navigate(-1)

    }
    console.log(postid)
    return (
        <div>
           <h4>{title}</h4>
           <p>{body}</p>
           <button onClick={handleback}>back</button>
            
        </div>
    );
};

export default Postditels;