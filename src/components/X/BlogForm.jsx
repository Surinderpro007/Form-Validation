import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBlog, updateBlog, getAllBlogs } from '../X2/blogService';

function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialBlog = id ? getAllBlogs().find(blog => blog.id === parseInt(id, 10)) : null;
  
  const [blog, setBlog] = useState(initialBlog || { title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialBlog) {
      updateBlog(initialBlog.id, blog);
    } else {
      createBlog(blog);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={blog.title} 
        onChange={(e) => setBlog({ ...blog, title: e.target.value })} 
        placeholder="Title"
      />
      <textarea 
        value={blog.content} 
        onChange={(e) => setBlog({ ...blog, content: e.target.value })} 
        placeholder="Content"
      ></textarea>
      <button type="submit">{initialBlog ? 'Update' : 'Create'} Blog</button>
    </form>
  );
}

export default BlogForm;