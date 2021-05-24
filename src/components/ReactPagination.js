import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination'
import axios from 'axios'
import TableList from './TableList'

function ReactPagination() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setPosts(res.data)
        setLoading(false)
      }
  
      fetchPosts()
    }, [])
  
    if (loading && posts.length === 0) {
      return <h2>Loading...</h2>
    }
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(posts.length/postsPerPage)
    
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-3">To Do List</h1>
        <TableList posts={currentPosts}/> 
        <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
      </div>
    );
  }
  
  export default ReactPagination;