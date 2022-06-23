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
    <div className="flex justify-center items-center h-screen">
      <Head title="Searching" />
      <div className="flex flex-col bg-violet-300 rounded border m-80 p-10 w-80">
        <input className="p-2" type="text" id="input-field" value={value} onChange={onChange} />
        <button
          className="bg-orange-100 m-2 p-2 content-between content-center rounded border"
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
