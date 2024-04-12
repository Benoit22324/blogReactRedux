import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import Post from './pages/Post'
import NavBar from './components/NavBar'
import { fetchPosts } from './store/reducer/PostReducer'
import { fetchUsers } from './store/reducer/UsersReducer'
import { fetchComments } from './store/reducer/CommentReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
  }, [])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addpost' element={<AddPost/>}/>
        <Route path='/post/:id' element={<Post/>}/>
      </Routes>
    </>
  )
}

export default App
