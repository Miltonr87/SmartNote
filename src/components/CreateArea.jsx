import React, {useState} from "react";

function CreateArea(props) {
const [note, setNote] = useState ({
    title: "",
    content: ""
});

function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name] : value,

        };
    });
}

function submitNote (event) {
    props.onAdd(note);
    setNote({                    // Erase previous note on display 
    title: "",
    content: ""});
    event.preventDefault();     // Prevent the reload of App after click on add button!
}

  return (
    <div>
      <form>
        <input name="title" 
        onChange = {handleChange}
        value={note.title} 
        placeholder="Title" />
        <textarea name="content"
         onChange = {handleChange}   
         value={note.content} 
         placeholder="Take a note..." 
         rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;