let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

export const getAllBlogs = () => blogs;

export const createBlog = (blog) => {
  const newBlog = { id: Date.now(), ...blog };
  blogs.push(newBlog);
  localStorage.setItem('blogs', JSON.stringify(blogs));
  return newBlog;
};

export const updateBlog = (id, updatedBlog) => {
  blogs = blogs.map(blog => 
    blog.id === id ? { ...blog, ...updatedBlog } : blog
  );
  localStorage.setItem('blogs', JSON.stringify(blogs));
  return blogs.find(blog => blog.id === id);
};

export const deleteBlog = (id) => {
  const index = blogs.findIndex(blog => blog.id === id);
  if (index > -1) {
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }
};