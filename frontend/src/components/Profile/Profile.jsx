import {Container} from "./Profile.styles"
import ProfileInfo from "./ProfileInfo"
import ProfilePosts from "./ProfilePosts"

//functional component jsx使用jsx语法

const Profile = ()=>{
  return (
  <Container>
    <ProfileInfo/>
    <ProfilePosts/>
  </Container>
  )
}

export default Profile