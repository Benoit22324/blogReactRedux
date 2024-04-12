import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import NavBar from './components/NavBar'
import { useEffect } from 'react'
import { fetchPosts } from './store/reducer/PostReducer'
import Post from './pages/Post'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
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
