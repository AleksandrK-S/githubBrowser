import React, { useState } from 'react'
import Head from './head'

import { history } from '../redux'

const Home = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    console.log(value)
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-36 h-screen text-white bg-neutral-900">
     <div className="flex flex-col items-top font-semibold text-5xl text-white"
     >
      Welcome to the github browser! (͡° ͜ʖ ͡°)
     </div>
       <Head title="Searching" />
      <div className="flex flex-col bg-red-400 rounded border border-red-400 p-16  ">
        <input className="flex flex-col justify-center bg-red-200 text-3xl items-center rounded border border-black h-20 w-80 p-2 m-2 text-neutral-900 placeholder-neutral-600 text-base" type="text" name="userName" placeholder="Enter name..." id="input-field" value={value} onChange={onChange} />
        <button
          className="flex flex-col justify-center items-center transition duration-300 ease-in-out delay-150 text-base p-2 m-16 text-justify h-10 w-48 text-white justify-center border-white bottom-0 bg-neutral-900 content-between content-center rounded border"
          type="button"
          id="search-button"
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
