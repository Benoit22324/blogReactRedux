import { NavLink } from "react-router-dom"

const HomePost = (post, author) => {
    return <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className="author">By: {author.email}</p>
        <NavLink to={`/post/${post.id}`}>More</NavLink>
    </>
}

export default HomePost