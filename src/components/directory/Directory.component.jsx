import React, { useState, useEffect } from "react"
import "./directory.styles.scss"
import directoryData from "../../directory.data"
import MenuItem from "../menu-item/MenuItem.component"

const Directory = () => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    setSections(directoryData)
  }, [])

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
}

export default Directory
