import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Post from '../shared/Post';
import { useParams } from 'react-router-dom';
function SinglePost(){
    const params=useParams();
    const postId=params.postId;
    const [postDetails,setpostDetails]=useState({});
    const [postComments,setPostComments]=useState({});
    const getPostsDetails=()=>{
       const getPostDetails= axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
       const getPostComments= axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
       axios.all([getPostDetails, getPostComments]).then(axios.spread(function(postDetailsResule, postCommentsResult) {
        setpostDetails(postDetailsResule.data);
        setPostComments(postCommentsResult.data);
      }));
    }
    useEffect(()=>{
        getPostsDetails();
    },[])
    if(postDetails!==undefined){
        return(
            <Container>
              <Post post={postDetails}  isMultibulePosts={false} postComments={postComments}/>
            </Container>
        );
    }

}

export default SinglePost;