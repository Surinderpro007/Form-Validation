import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";

function BlogList() {
  const { blogs, deleteBlog, setEditId } = useContext(BlogContext);

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          {blog.image && <img src={blog.image} alt="Blog" style={{ width: "100px" }} />}
          <button onClick={() => setEditId(blog.id)}>Edit</button>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
