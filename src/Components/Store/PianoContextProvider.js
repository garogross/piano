import React,{useState,useEffect} from 'react'
import PianoContext from './Piano-context'

import cPiano from "../../audio/piano/c.mp3"
import cfPiano from "../../audio/piano/cf.mp3"
import dPiano from "../../audio/piano/d.mp3"
import dfPiano from "../../audio/piano/df.mp3"
import ePiano from "../../audio/piano/e.mp3"
import fPiano from "../../audio/piano/f.mp3"
import ffPiano from "../../audio/piano/ff.mp3"
import gPiano from "../../audio/piano/g.mp3"
import gfPiano from "../../audio/piano/gf.mp3"
import aPiano from "../../audio/piano/a.mp3"
import afPiano from "../../audio/piano/af.mp3"
import bPiano from "../../audio/piano/b.mp3"

import cGuitar from "../../audio/guitar/c.mp3"
import cfGuitar from "../../audio/guitar/cf.mp3"
import dGuitar from "../../audio/guitar/d.mp3"
import dfGuitar from "../../audio/guitar/df.mp3"
import eGuitar from "../../audio/guitar/e.mp3"
import fGuitar from "../../audio/guitar/f.mp3"
import ffGuitar from "../../audio/guitar/ff.mp3"
import gGuitar from "../../audio/guitar/g.mp3"
import gfGuitar from "../../audio/guitar/gf.mp3"
import aGuitar from "../../audio/guitar/a.mp3"
import afGuitar from "../../audio/guitar/af.mp3"
import bGuitar from "../../audio/guitar/b.mp3"

import cSax from "../../audio/saxsafon/c.mp3"
import cfSax from "../../audio/saxsafon/cf.mp3"
import dSax from "../../audio/saxsafon/d.mp3"
import dfSax from "../../audio/saxsafon/df.mp3"
import eSax from "../../audio/saxsafon/e.mp3"
import fSax from "../../audio/saxsafon/f.mp3"
import ffSax from "../../audio/saxsafon/ff.mp3"
import gSax from "../../audio/saxsafon/g.mp3"
import gfSax from "../../audio/saxsafon/gf.mp3"
import aSax from "../../audio/saxsafon/a.mp3"
import afSax from "../../audio/saxsafon/af.mp3"
import bSax from "../../audio/saxsafon/b.mp3"


const pianoNotesSrc = [
 cPiano,
 cfPiano,
 dPiano,
 dfPiano,
 ePiano,
 fPiano,
 ffPiano,
 gPiano,
 gfPiano,
 aPiano,
 afPiano,
 bPiano,
]

const guitarNotesSrc = [
 cGuitar,
 cfGuitar,
 dGuitar,
 dfGuitar,
 eGuitar,
 fGuitar,
 ffGuitar,
 gGuitar,
 gfGuitar,
 aGuitar,
 afGuitar,
 bGuitar,
]

const saxNotesSrc = [
 cSax,
 cfSax,
 dSax,
 dfSax,
 eSax,
 fSax,
 ffSax,
 gSax,
 gfSax,
 aSax,
 afSax,
 bSax,
]


const PianoContextProvider = (props) => {
 const notes = [
  {
   note: "c",
   key: "q",
   id: 1
  },
  {
   note: "cf",
   key: "w",
   id: 2
  },
  {
   note: "d",
   key: "e",
   id: 3
  },
  {
   note: "df",
   key: "r",
   id: 4
  },
  {
   note: "e",
   key: "t",
   id: 5
  },
  {
   note: "f",
   key: "y",
   id: 6
  },
  {
   note: "ff",
   key: "u",
   id: 7
  },
  {
   note: "g",
   key: "i",
   id: 8
  },
  {
   note: "gf",
   key: "o",
   id: 9
  },
  {
   note: "a",
   key: "p",
   id: 10

  },
  {
   note: "af",
   key: "[",
   id: 11
  },
  {
   note: "b",
   key: "]",
   id: 12
  },
 ]

 const [option, setOption] = useState("")
 const [instrumentType, setInstrumentType] = useState(pianoNotesSrc)



 const selectChangeHandler = value => {
  setOption(value)
 }

 useEffect(() => {
  if (option === "piano") {
  setInstrumentType(pianoNotesSrc)
 }
 if (option === "guitar") {
  setInstrumentType(guitarNotesSrc)
 }
 if (option === "sax") {
  setInstrumentType(saxNotesSrc)
 }
},[option])



 return (
  <PianoContext.Provider
   value={{
    notes: notes,
    pianoNotesSrc: pianoNotesSrc,
    guitarNotesSrc: guitarNotesSrc,
    saxNotesSrc: saxNotesSrc,
    option: option,
    instrumentType: instrumentType,
    selectChangeHandler: selectChangeHandler


   }}
  >
   {props.children}
  </PianoContext.Provider>
 )
}


export default PianoContextProvider
