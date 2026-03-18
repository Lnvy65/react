//import { useState } from 'react'
import reactLogo from './assets/react.svg'

function Profile() {
  return(
    <>
      <img src={reactLogo} alt="리액트 로고" style={{ height : 60}} />
    </>
  )
}

export default function App() {
  
  return (
    <>
      {Profile()}
      <Profile />
    </>
  )
}