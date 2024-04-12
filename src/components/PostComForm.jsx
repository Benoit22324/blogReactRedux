import { useSelector, useDispatch } from 'react-redux'
import { selectComContent, selectLoadingMsg, selectStatut } from '../store/selector/comment'
import { addComment, updateComment } from '../store/reducer/CommentReducer';

const PostComForm = ({id, user}) => {
    const dispatch = useDispatch();
    const content = useSelector(selectComContent);
    const statut = useSelector(selectStatut);
    const loadingmsg = useSelector(selectLoadingMsg);

    const add = () => {
        if (content.trim() !== '')
            dispatch(addComment({postId: id, name: user.name, email: user.email, body: content}))
    }

    return <>
        {
            statut === 'adding' && <p>{loadingmsg}</p>
        }
        <div className='comment_form'>
            <textarea className='comment_input' name="content" value={content} onChange={(e) => dispatch(updateComment(e.target.value))} cols="50" rows="3"></textarea>
            <button className='comment_submit' onClick={add}>Add Comment</button>
        </div>
    </>
}

export default PostComForm