import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/selector/post';

const Post = () => {
    const {id} = useParams();
    const postlist = useSelector(selectPosts);
    const post = postlist.find((post) => post.id === parseInt(id));

    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>By: {post.userId}</p>
        <h2>Comments</h2>
    </>
}

export default Post