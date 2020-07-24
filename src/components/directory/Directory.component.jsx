import React, { useState, useEffect } from "react";
import "./directory.styles.scss";
import directoryData from "../../directory.data";
import MenuItem from "../menu-item/MenuItem.component";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(directoryData);
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
