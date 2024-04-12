import { useSelector } from 'react-redux'
import { selectLoadingMsg, selectPosts, selectStatut } from '../../store/selector/post';
import HomePost from '../../components/HomePost';
import { selectUsers } from '../../store/selector/users';

const Home = () => {
    const postlist = useSelector(selectPosts);
    const statut = useSelector(selectStatut);
    const loadingmsg = useSelector(selectLoadingMsg);
    const userlist = useSelector(selectUsers);

    const findAuthor = (id) => {
        const author = userlist.find((user) => user.id === id)
        return author
    }

    return <>
        <h1>Home Page</h1>
        {
            statut === 'searching' && <p>{loadingmsg}</p>
        }
        <div className='home_postlist'>
            {
                postlist.length > 0 ?
                postlist.map((post, index) => <div className='home_post' key={index}>{HomePost(post, findAuthor(post.userId))}</div>)
                :
                <p>No post online</p>
            }
        </div>
    </>
}

export default Home