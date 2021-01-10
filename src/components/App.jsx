import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import Notes from '../notes';             Map testing
import CreateArea from "./CreateArea"; 

function App() {

  const [notesArray, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  }

    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notesArray.map((noteItem) => {
          return <Note
           title={noteItem.title}
           content={noteItem.content}  
           />
        })}
        
        <Footer />
      </div>
    );
  }

export default App;
