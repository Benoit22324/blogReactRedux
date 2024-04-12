import { useSelector, useDispatch } from 'react-redux'
import { selectLoadingMsg, selectPosts, selectStatut } from '../../store/selector/post';
import HomePost from '../../components/HomePost';

const Home = () => {
    const dispatch = useDispatch();
    const postlist = useSelector(selectPosts);
    const statut = useSelector(selectStatut);
    const loadingmsg = useSelector(selectLoadingMsg);

    return <>
        <h1>Home Page</h1>
        {
            statut === 'searching' && <p>{loadingmsg}</p>
        }
        <div className='home_postlist'>
            {
                postlist.length > 0 ?
                postlist.map((post, index) => <div className='home_post' key={index}>{HomePost(post)}</div>)
                :
                <p>No post online</p>
            }
        </div>
    </>
}

export default Home