import { useState } from 'react'
import './App.css'
import Blogs from './Componants/Blogs/Blogs'
import Bookmarks from './Componants/Bookmarks/Bookmarks'
import Header from './Componants/Header/Header'
import './index.css'

function App() {
  const[bookmarks, setBookmarks] = useState([])
  const[readingTime, setReadingTime] = useState(0)

  const handleReadingTime=(time) =>{
      console.log("I am read",time)
      const newtime = readingTime+time;
      setReadingTime(newtime)
  }

  const handleBookmark = blog =>{
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
  }



  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto'>
      <Blogs handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
