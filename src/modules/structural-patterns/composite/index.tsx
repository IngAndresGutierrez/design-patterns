import React from "react"

import CommentComponent from "./CommentComponent.tsx"

const CompositeMain = () => {
  const comments = [
    {
      text: "This is the first comment",
      replies: [
        {
          text: "This is a reply",
          replies: [{ text: "This is a nested reply" }],
        },
      ],
    },
    {
      text: "This is the second comment",
    },
  ]

  return (
    <div>
      <h1>Composite</h1>
      {comments.map((comment, index) => (
        <CommentComponent key={index} {...comment} />
      ))}
    </div>
  )
}

export default CompositeMain
