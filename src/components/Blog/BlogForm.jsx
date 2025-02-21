import React, { useState, useContext } from "react";
import { BlogContext } from "./BlogContext";

function BlogForm() {
  const { addBlog, editBlog, editId, blogs } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  React.useEffect(() => {
    if (editId) {
      const blog = blogs.find((b) => b.id === editId);
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
        setImage(blog.image);
      }
    }
  }, [editId, blogs]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Convert image to preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      editBlog(editId, title, content, image);
    } else {
      addBlog(title, content, image);
    }
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Preview" style={{ width: "100px" }} />}
      <button type="submit">{editId ? "Update" : "Create"} Blog</button>
    </form>
  );
}

export default BlogForm;
