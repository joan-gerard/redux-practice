import React from 'react'
import { UserType } from './interface'

type Props = {
    user: UserType
}

const UserCard: React.FC<Props> = ({user}) => {
  return (
    <div>
        <h2>{user.name}</h2>
        <p>{user.username}</p>
    </div>
  )
}

export default UserCard