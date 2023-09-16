import { useReducer } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import {useLogout} from '../hooks/useLogout'


const Navbar = () => {

    const { logout } = useLogout()
    const {user} = useAuthContext()

    const handleclick = () => {
        logout()
    }

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>    
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleclick}>Logout</button>
                        </div>)}
                    { !user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                    )}
                </nav>            
            </div>
        </header>
    )
}

export default Navbar;