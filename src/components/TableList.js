import React from 'react'

function TableList({posts}) {
        return (
        
        <div>

                <table className="table text-white table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index)=>(
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.completed ? "Completed" : "Pending"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

    </div>
     
  )
}

export default TableList
