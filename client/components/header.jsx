import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const Header = ({ userName, repositoryName }) => {
  return (
    <div className="flex flex-col text-neutral items-center text-justify bg-red-400 border-red-400 w-full rounded border h-10 top-0 p-1 fixed">
      <div className="font-bold my-1 text-neutral font-mono text-lg " id="user-name">
        {userName}
      </div>
      <div className="font-bold my-1 text-neutral text-lg" id="repository-name">{repositoryName}</div>
      <div className="flex justify-between w-full top-0 px-4 ">
        <Link
          id="go-back"
          className="flex flex-row top-0 border text-white rounded m-1 px-2 bg-neutral-900 justify-center border-white"
          to="/"
        >
          Back{' '}
        </Link>
        <Link
          id="go-repository-list"
          className="flex flex-row top-0 border rounded m-1 px-2 bg-neutral-900 text-white justify-center border-white"
          to={`/${userName}`}
        >
          {' '}
          RepoList
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
