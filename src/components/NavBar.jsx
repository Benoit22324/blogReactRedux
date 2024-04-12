import { NavLink } from "react-router-dom"

const NavBar = () => {
    return <>
        <nav className="Navbar">
            <NavLink style={({isActive}) => isActive ? {color: "orange", fontWeight: 'bold'} : {}} to={'/'}>Home</NavLink>
            <NavLink style={({isActive}) => isActive ? {color: "orange", fontWeight: 'bold'} : {}} to={'/addpost'}>Add Post</NavLink>
        </nav>
    </>
}

export default NavBar