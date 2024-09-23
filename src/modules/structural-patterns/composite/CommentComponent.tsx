import React from "react"

interface CommentProps {
  text: string
  replies?: CommentProps[]
}

const CommentComponent = ({ text, replies }: CommentProps) => {
  return (
    <div>
      <p>{text}</p>
      {replies && (
        <div style={{ paddingLeft: "20px" }}>
          {replies.map((reply, index) => (
            <CommentComponent key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentComponent
