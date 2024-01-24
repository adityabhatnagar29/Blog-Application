import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    blogs: [
      {
        id: "1",
        title: "Smart Watch",
        category: "Watch Information",
        description: "A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.",
      },
      {
        id: "2",
        title: "Java",
        category: "Programming Language",
        description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      },
      {
        id: "3",
        title: "IPHONE",
        category: "Moblie Review",
        description: " The iPhone, renowned for its seamless integration of hardware and software, epitomizes innovation and reliability. With each iteration, Apple refines design, performance, and features, offering users a sleek and intuitive experience. Its ecosystem boasts a robust App Store, exceptional camera systems, and the powerful A-series chip, ensuring smooth functionality and optimal performance. The latest models often introduce advancements in photography, display technology, and battery life, while iOS updates continually enhance functionality and security. Despite premium pricing, the iPhone remains a benchmark in the smartphone industry, providing users with a harmonious blend of style, functionality, and performance."
      },
      {
        id: "4",
        title: "React Js",
        category: "Programming Language",
        description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript." },
      {
        id: "5",
        title: "R.R.R",
        category: "Movie Review",
        description: "RRR is a 2022 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad." },
      {
        id: "6",
        title: "Role Of Education",
        category: "Educational Info.",
        description: "There are six main roles of education. They transmit culture, social placement, and social control as agents of change and promote social and political integration.Education also acts as a social form of control. We learn specific values at school, including punctuality, respect, perseverance, obedience, and discipline. Schools also instill a sense of conformity and promote virtue and law-abiding behavior." },
    ]
  } 

  const blogReducer = createSlice({
    name: "blogReducer",
    initialState,
    reducers: {
      addBlog: (state, action) => {
        state.blogs.push(action.payload);
      },
      updateBlog: (state, action) => {
        const { id, title, category, description } = action.payload;
        const bid = state.blogs.findIndex((blog) => blog.id === id);
        //values updation
          state.blogs[bid].title = title;
          state.blogs[bid].category = category;
          state.blogs[bid].description = description;
      },
      deleteBlog: (state, action) => {
        const id = action.payload;
        state.blogs = state.blogs.filter((blog) => blog.id !== id);
      },
    }
  });
  
  
  export const { addBlog, updateBlog, deleteBlog } = blogReducer.actions;
  export default blogReducer.reducer;