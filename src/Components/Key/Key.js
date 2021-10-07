import React, { useState, useContext, useRef } from 'react'
import classes from "./Key.module.css"
import PianoContext from '../Store/Piano-context'



const Key = (props) => {
  const [pressedKey, setPressedKey] = useState()
  const [isPressed, setIsPressed] = useState(false)
  const ctx = useContext(PianoContext)
  const audioRef = useRef()

  const isFlat = props.note.note.length === 2

  const keyDownHandler = () => {
    setPressedKey(props.index)
    setIsPressed(true)
    audioRef.current.play()
  }
  const keyUpHandler = () => {
    audioRef.current.currentTime = 0
    audioRef.current.pause()
    setIsPressed(false)
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === props.note.key) {
      keyDownHandler()
    }
  })
  window.addEventListener("keyup", (e) => {
    keyUpHandler()

  })
  const onMouseDownHandler = () => {
    keyDownHandler()
  }
  const onMouseUpHandler = () => {
    keyUpHandler()
  }



  return (
    <div className={`${isFlat ? classes.flat : ""} ${isPressed ? classes.pressed : ""} ${classes.key} `} onMouseUp={onMouseUpHandler} onMouseDown={onMouseDownHandler}>
      <audio src={ctx.instrumentType[pressedKey]} ref={audioRef} ></audio>
    </div>
  )
}

export default Key
