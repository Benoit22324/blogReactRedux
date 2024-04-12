import { useSelector } from 'react-redux'
import { selectComments, selectLoadingMsg, selectStatut } from '../store/selector/comment';

const PostComList = ({id}) => {
    const comlist = useSelector(selectComments);
    const statut = useSelector(selectStatut);
    const loadingmsg = useSelector(selectLoadingMsg);

    const thiscom = comlist.filter((com) => com.postId === id);

    return <>
        {
            statut === 'searching' && <p>{loadingmsg}</p>
        }
        {
            thiscom.length > 0 ?
            thiscom.map((comment, index) =>
            <div key={index} className='comment'>
                <p>{comment.body}</p>
                <p>From {comment.email}</p>
            </div>)
            :
            <p>No Comment</p>
        }
    </>
}

export default PostComList