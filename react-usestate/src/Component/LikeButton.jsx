import React from "react";
import { useState } from "react";

const LikeButton = () => {
  const [userLiked, setUserLiked] = useState(0);
  const [userUnlike, setUserUnlike] = useState(userLiked);

  console.log("userLiked", userUnlike);
  return (
    <div className="container">
      <button onClick={() => setUserLiked(userLiked - 1)}>-</button>
      {userLiked > 0 ? "Unlike" : "Like"} {userLiked}
      <button onClick={() => setUserLiked(userLiked + 1)}>+</button>
    </div>
  );
};

export default LikeButton;
