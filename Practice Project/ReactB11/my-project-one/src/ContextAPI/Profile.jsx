import React,{useContext} from 'react'
import userContext from './UserContext'

const Profile = () => {
    const {user}=useContext(userContext)
 if(!user)return (
    <div>
      Please Login
    </div>
  )
  return (
    <div>
     Welcome {user.email} !!!
    </div>
  )
}

export default Profile
