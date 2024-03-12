import React from 'react'

interface inputProps{
    placeholder:string;
    type: string
    name?:string;
    value?:string | number;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    className?:string;
    checked?:boolean;
}

// const InputBox:React.FC<inputProps>= ({type,name,value,onChange,placeholder}) => {
const InputBox= ({type,name,value,onChange,placeholder,className,checked}:inputProps) => {

  return (
        <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className} 
        checked={checked}
        />
      )
}

export default InputBox


