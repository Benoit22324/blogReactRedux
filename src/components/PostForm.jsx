import { useSelector, useDispatch } from 'react-redux';
import { selectContent, selectError, selectLoadingMsg, selectStatut, selectTitle } from '../store/selector/post';
import { addError, addPost, updateContent, updateTitle } from '../store/reducer/PostReducer';

const PostForm = () => {
    const dispatch = useDispatch();
    const title = useSelector(selectTitle);
    const content = useSelector(selectContent);
    const error = useSelector(selectError);
    const statut = useSelector(selectStatut);
    const loadingmsg = useSelector(selectLoadingMsg);

    const add = () => {
        if (title.trim() !== '' && content.trim() !== '')
            dispatch(addPost({title: title, body: content, userId: 1}))
        else if (title.trim() === '' && content.trim() === '') dispatch(addError('Enter a Title & a Content'))
        else if (title.trim() === '' && content.trim() !== '') dispatch(addError('Enter the Title of the post'))
        else if (title.trim() !== '' && content.trim() === '') dispatch(addError('Enter the Content of the post'))
        }

    return <>
        {
            error !== '' && <p className='errormsg'>{error}</p>
        }
        {
            statut === 'adding' && <p>{loadingmsg}</p>
        }
        <div className='post_form'>
            <label>Title:<input type="text" name="title" value={title} onChange={(e) => dispatch(updateTitle(e.target.value))} /></label>
            <label>Content:<textarea name="content" cols="30" rows="5" value={content} onChange={(e) => dispatch(updateContent(e.target.value))}></textarea></label>
            <button onClick={add} className='post_submit'>Add Post</button>
        </div>
    </>
}

export default PostForm