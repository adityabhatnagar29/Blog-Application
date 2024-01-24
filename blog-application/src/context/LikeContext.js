import React, { createContext, useState, useContext } from "react";

const Like_Context = createContext();

export const useLikeContext = () => {
  return useContext(Like_Context);
};

const Like = ({ children }) => {
  const [blogLikes, setLikes] = useState({});

  const handleLike = (blog_id) => {
    setLikes((prevLikes) => ({
      prevLikes,
      [blog_id]: {
        likes:
          (prevLikes[blog_id]?.likes || 0) +
          (prevLikes[blog_id]?.liked ? -1 : 1),
        liked: !prevLikes[blog_id]?.liked,
      },
    }));
  };

  return (
    <Like_Context.Provider value={{ blogLikes, handleLike }}>
      {children}
    </Like_Context.Provider>
  );
};

export default Like;
