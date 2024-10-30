import { NavLink, Outlet, useNavigation } from "react-router-dom";
import './Home.css'


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
             <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contct</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                
            </nav>
          {
                 navigation.state ==="loading"?<p>loading</p>: <Outlet/>
          }
           
            <h1>this is home </h1>

            
        </div>
    );
};

export default Home;