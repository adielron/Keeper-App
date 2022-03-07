import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { createTrue } from "typescript";
import axios from "axios";


function CreateArea(props) {
  const [clicked,setclicked] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    event.preventDefault();
    setclicked(false)




  axios.post('http://localhost:3001/',{
    title:note.title,
    content:note.content
  })

  setNote({
    title: "",
    content: ""
  });
  }

  function mouseClick(){
    setclicked(true)
  }

  return (
    <div>
      <form className="create-note">
      {clicked &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"

        />
      }
           <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked?"3":'1'}
          onClick={mouseClick}
        />

        <Zoom
        in={clicked}>
        <Fab color="primary" onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
