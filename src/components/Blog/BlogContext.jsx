import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);

  const addBlog = (title, content, image) => {
    setBlogs([...blogs, { id: uuidv4(), title, content, image }]);
  };

  const editBlog = (id, title, content, image) => {
    setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, title, content, image } : blog)));
    setEditId(null);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, editBlog, deleteBlog, editId, setEditId }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
