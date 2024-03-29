import { PostGrid } from "./Profile.styles"
import {initialState as postData} from "../../Redux/PostData"
import {useParams} from "react-router-dom"

const ProfilePosts = ()=>{
  const {id} =useParams();

  let filteredPosts = postData.filter((post)=>{
    return post.userID ===id
  })
  //map返回后的数据 需要在div中加unique的key，方便sorting  
  return <PostGrid>
    {filteredPosts.length
    ?
    (
      filteredPosts.map((post,index)=>{
      return(
        <div key={`${index}-${post.userID}`}>
          <img src={post.postLink} alt="post" />
        </div> 
      )
    })
    )
    :
    <h2 className="empty-post-section">No Posts Yet!</h2>
    }
  </PostGrid>
}

export default ProfilePosts