import React from "react"

interface DataProps {
  data: string
}

const DataComponent = ({ data }: DataProps) => {
  return <div>Data: {data}</div>
}

export default DataComponent
