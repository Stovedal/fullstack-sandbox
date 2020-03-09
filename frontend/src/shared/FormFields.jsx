import React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'

export const TextField = ({ value, onChange, label, className, onBlur }) => {

  return (
    <FormControl className={className}>
      <InputLabel>{label}</InputLabel>
      <Input 
        onBlur={() => onBlur()}
        autoFocus
        value={value} onChange={onChange} />
    </FormControl>
  )
}
