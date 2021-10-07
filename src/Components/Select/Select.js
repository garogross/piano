import React,{useRef,useContext} from 'react'
import classes from "./Select.module.css"
import PianoContext from '../Store/Piano-context'

const Select = () => {
 const selectRef = useRef()
 const ctx = useContext(PianoContext)

 const onChangeHandler = () => {
  ctx.selectChangeHandler(selectRef.current.value)

 }

 return (
  <select className={classes.select} ref={selectRef} onChange={onChangeHandler}>
   <option className={classes.option} value="piano">Piano</option>
   <option className={classes.option} value="guitar">Guitar</option>
   <option className={classes.option} value="sax">Saxsafon</option>
  </select>
 )
}

export default Select
