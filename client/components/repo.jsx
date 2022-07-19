import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import Header from './header'

const Repo = () => {
  const [arr, setArr] = useState([])
  const { userName } = useParams()
  const url = `https://api.github.com/users/${userName}/repos`

  useEffect(() => {
    axios(url)
      .then(({ data }) => data)
      .then((arrOfData) => {
        setArr(arrOfData)
      })
  }, [])

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-neutral-900">
      <Header userName={userName} />
      <Head title="Repository" />
      <div className="bg-red-400 border-red-400 w-96 p-5 text-center text-xl font-mono rounded border">
        Repository list
      </div>
      {arr.map((e) => (
        <Link
          className="bg-neutral-900 text-white w-96 text-center rounded border border-white"
          to={`/${userName}/${e.name}`}
          key={e.id}
        >
          {e.name}
        </Link>
      ))}
    </div>
  )
}

Repo.propTypes = {}

export default React.memo(Repo)
