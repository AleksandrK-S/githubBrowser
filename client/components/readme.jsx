import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Head from './head'
import Header from './header'

const Readme = () => {
  const [readme, setReadme] = useState('')
  const { userName, repositoryName } = useParams()
  const url = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`

  useEffect(() => {
    axios(url)
      .then(({ data }) => data)
      .then((str) => {
        setReadme(str)
      })
  }, [url])

  return (
    <div className="flex justify-center items-center flex-col p-10 min-h-screen bg-neutral-900">
      <Header userName={userName} repositoryName={repositoryName} />
      <Head title="ReadmeFile" />
        <div id="description" className="p-10 bg-neutral-600 text-white max-w-full text-center rounded border border-white overflow-x-auto">
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
