import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>users:{users.length}</h1>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
            
        </div>
    );
};

export default Users;