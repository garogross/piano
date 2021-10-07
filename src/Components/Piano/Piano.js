import React, { useContext, useState} from 'react'
import classes from "./Piano.module.css"
import PianoContext from '../Store/Piano-context'
import Key from '../Key/Key'
import Select from '../Select/Select'



const Piano = () => {
 const ctx = useContext(PianoContext)
 
 

 return (
  <React.Fragment>
   <div className={classes.piano}>
   {ctx.notes.map((note, index) => (
    <Key
     key={note.id}
     index={index}
     note={note}
    />
   ))}
   </div>
   <Select />
   <p className={classes.instruction}>{`Play with ${ctx.notes.map((note) => note.key)} keys`}</p>
  </React.Fragment>
  
 )
}

export default Piano
