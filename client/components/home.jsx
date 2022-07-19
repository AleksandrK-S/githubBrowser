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
    <>
    <Head title="Searching" />
    <div className="flex flex-col justify-center items-center space-y-36 min-h-screen text-white bg-[url(../images/sunshine.jpg)] bg-cover bg-fixed bg-no-repeat">
      <div className="flex flex-col items-top font-semibold text-5xl text-neutral-900">
        Welcome to the github browser! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
      </div>
      <div className="flex flex-col justify-center items-center bg-red-400 rounded-xl border border-white border-2 bg-gradient-to-r from-pink-500 to-orange-200 p-16 ">
        <input
          className="flex flex-col w-full p-5 m-12 bg-orange-100 text-3xl items-center rounded-xl border border-black h-20 w-80 p-2 m-2 text-neutral-900 placeholder-neutral-700 text-base"
          type="text"
          name="userName"
          placeholder="Enter name..."
          id="input-field"
          value={value}
          onChange={onChange}
        />
        <button
          className="flex flex-col items-center justify-center w-72 m-16 px-1 py-1 text-base border border-white rounded-xl border hover:bg-rose-300"
          type="button"
          id="search-button"
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
    </>
  )
}

Home.propTypes = {}

export default Home
