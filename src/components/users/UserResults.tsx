import React, { useEffect } from 'react'
import { useContext } from 'react'
import Spinner from '../Spinner'
import UserItem from './UserItem'
import { User } from './UserResultsTypes'
import GithubContext from '@/context/github/GithubContext'
import AlertContext from '@/context/alert/AlertContext'

const UserResults: React.FC = () => {
  const githubSearchContext = useContext(GithubContext)
  const alertSearchContext = useContext(AlertContext)

  if (githubSearchContext == null) return <div>No Context Found</div>
  const { users, loading } = githubSearchContext

  if (alertSearchContext == null) return <div>No Alerts Found</div>
  const { setAlert } = alertSearchContext

  useEffect(() => {
    if (users.length === 0 && !loading) {
      setAlert('No users found', 'error')
    }
  }, [users])

  if (!loading) {
    return (
      <div
        className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'
        key='userSearch'
      >
        {users.length > 0 &&
          users.map((user: User, i: number) => (
            <UserItem user={user} key={user.id || i} />
          ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
