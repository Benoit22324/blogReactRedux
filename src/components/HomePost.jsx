import { NavLink } from "react-router-dom"

const HomePost = (post) => {
    return <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>By: {post.userId}</p>
        <NavLink to={`/post/${post.id}`}>More</NavLink>
    </>
}

export default HomePost