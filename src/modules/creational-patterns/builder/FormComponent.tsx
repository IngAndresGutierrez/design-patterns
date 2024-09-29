import React from "react"

const FormComponent = ({ title, buttonText, withFooter }: any) => {
  return (
    <div>
      {title && <h4>{title}</h4>}
      <button>{buttonText || "Submit"}</button>
      {withFooter && <footer>Footer Content</footer>}
    </div>
  )
}

export default FormComponent
