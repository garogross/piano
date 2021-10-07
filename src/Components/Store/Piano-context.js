import React from 'react'

const PianoContext = React.createContext({
 notes: [],
 pianoNotesSrc: [],
 guitarNotesSrc: [],
 saxNotesSrc: [],
 option: "",
 selectChangeHandler: (value) => {}
})


export default PianoContext
