import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../X2/blogService';

function BlogList() {
  const blogs = getAllBlogs();

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Blog</Link>
    </div>
  );
}

export default BlogList;