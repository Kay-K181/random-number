import React from "react";
import { useState } from "react";
import Input from "./Components/Input";
import RandomGen from "./Components/RandomGen";


export default function App(){
  const [page, setPage] = useState ('')
  const [value, setValue] = useState ('')

  return (
    <div>
    {page === '' 
    ? 
    <Input
      value = {value}
      setValue = {setValue}
      setPage = {setPage}
    /> 
    : 
    <RandomGen
      value = {value}
      setPage = {setPage}
    />
    }
    </div>
  )
}