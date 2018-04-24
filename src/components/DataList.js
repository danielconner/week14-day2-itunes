import React from "react";

const DataList = (props) => {
  const options = Object.keys(props.songs).map((song, index) => {
    return <option value={song} key={index}>{song}</option>
  });

  const handleChange = (event) => {
    let song = event.target.value;
    props.onSongSelected(song);
  }

  return(
    <select
      id="songList"
      defaultValue="default"
      onChange={handleChange}>
      <option disabled value="default">Choose a Song</option>
      {options}
    </select>
  )

}

export default DataList;
