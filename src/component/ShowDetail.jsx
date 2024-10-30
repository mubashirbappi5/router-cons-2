
import { useLoaderData } from 'react-router-dom';

const ShowDetail = () => {
    const users = useLoaderData();
    const {name,website} = users
    return (
        <div>
            <h1>this is details</h1>
            <h2>{name}</h2>
            <h4>{website}</h4>
            
        </div>
    );
};

export default ShowDetail;