import React from "react";

const DataDetail = (props) => {
  if(!props.song) return null;
  return (
    <article>
      <h3>Song Title and Artist: {props.song.title.label}</h3>
      <p>Genre: {props.song.category.attributes.label}</p>
    </article>
  )
}

export default DataDetail;
