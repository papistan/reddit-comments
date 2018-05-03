import React from "react";
import Comment from "./Comment/comment";

import "./comments.css";

const Comments = props => {
  let topNodes = props.data[1];
  let data = props.data[0];

  let renderComments = function() {
    return topNodes.map(id => {
      let comment = data[id];
      return (
        <Comment
          key={comment.id}
          comment={comment}
          data={data}
          users={props.users}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
        />
      );
    });
  };

  return <div className="comments">{renderComments()}</div>;
};

export default Comments;
