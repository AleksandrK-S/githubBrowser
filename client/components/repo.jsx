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
    <div className="flex justify-center items-center flex-col h-screen bg-neutral-900">
      <Header userName={userName} />
      <Head title="Repository" />
      <div className="bg-orange-100 w-96 p-5 text-center rounded border">{userName}</div>
      {arr.map((e) => (
        <Link
          className="bg-violet-200 text-neutral w-96 text-center rounded border border-black"
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
