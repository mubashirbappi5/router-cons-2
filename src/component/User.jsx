import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name,email,phone,id} = user
    return (
        <div>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <Link to={`/users/${id}`}>Show Details</Link>

            
        </div>
    );
};
User.propTypes ={
    user:PropTypes.object.isRequired,
}
export default User;