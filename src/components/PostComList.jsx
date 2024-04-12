import { useSelector, useDispatch } from 'react-redux'
import { selectComments, selectLoadingMsg, selectStatut } from '../store/selector/comment';
import { useEffect } from 'react';
import { fetchComments } from '../store/reducer/CommentReducer';

const PostComList = ({id}) => {
    const dispatch = useDispatch();
    const comlist = useSelector(selectComments);
    const statut = useSelector(selectStatut);
    const loadingmsg = useSelector(selectLoadingMsg);
    console.log(comlist)

    useEffect(() => {
        dispatch(fetchComments(id))
    }, [])

    return <>
        {
            statut === 'searching' && <p>{loadingmsg}</p>
        }
        {
            comlist.length > 0 ?
            comlist.map((comment) =>
            <div>
                <p>{comment.body}</p>
                <p>From {comment.email}</p>
            </div>)
            :
            <p>No Comment</p>
        }
    </>
}

export default PostComList