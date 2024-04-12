import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/selector/post';
import PostComList from '../../components/PostComList';
import { selectUsers } from '../../store/selector/users';
import PostComForm from '../../components/PostComForm';

const Post = () => {
    const {id} = useParams();
    const postlist = useSelector(selectPosts);
    const userlist = useSelector(selectUsers);
    const post = postlist.find((post) => post.id === parseInt(id));
    const author = userlist.find((user) => user.id === post.userId);
    const curUser = userlist.find((user) => user.id === 1);

    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p className='author'>By: {author.email}</p>
        <h2>Comments</h2>
        <PostComForm id={post.id} user={curUser} />
        <PostComList id={post.id} />
    </>
}

export default Post