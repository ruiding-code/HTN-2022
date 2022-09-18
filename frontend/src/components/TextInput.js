import React from "react";
import TextField from '@material-ui/core/TextField';

export function TextInput() {
  return (
    <TextField 
        id="standard-basic" 
        variant="standard" 
        type="text"
        fullWidth
        autoComplete='off'
        style={{background: "white", borderRadius: 50, paddingLeft:50, paddingRight:50}}
        placeholder={"Enter text here..."}
    />
  );
}