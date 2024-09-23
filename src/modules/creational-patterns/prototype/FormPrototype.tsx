import React, { FC, useState } from "react"

interface FormProps {
  title: string
  fields: string[]
}

const Form: FC<FormProps> = ({ title, fields }) => {
  const [values, setValues] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  )

  const handleChange = (field: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [field]: value }))
  }

  return (
    <div>
      <h4>{title}</h4>
      {fields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type="text"
            value={values[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}

const cloneForm = (formProps: FormProps, newTitle?: string): FormProps => {
  return { ...formProps, title: newTitle || formProps.title }
}

export default Form
export { cloneForm }
