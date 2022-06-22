import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const Header = ({ userName, repositoryName }) => {
  return (
    <div className="flex flex-col text-neutral items-center text-justify bg-orange-100 w-full rounded border h-30 top-0 p-1 fixed">
      <div className="font-bold my-1 text-neutral text-lg " id="user-name">
        {userName}
      </div>
      <div className="font-bold my-1 text-neutral text-lg" id="repository-name">{repositoryName}</div>
      <div className="flex justify-between w-full px-4">
        <Link
          id="go-back"
          className="border rounded m-1 px-2 bg-violet-200 justify-center border-black"
          to="/"
        >
          Back{' '}
        </Link>
        <Link
          id="go-repository-list"
          className="border rounded m-1 px-2 bg-violet-200 justify-center border-black"
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
