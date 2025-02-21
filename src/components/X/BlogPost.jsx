import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getAllBlogs, deleteBlog } from '../X2/blogService';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getAllBlogs().find(blog => blog.id === parseInt(id, 10));

  if (!blog) return <div>Blog not found!</div>;

  const handleDelete = () => {
    deleteBlog(blog.id);
    navigate('/');
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
}

export default BlogPost;