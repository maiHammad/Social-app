import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Post from '../shared/Post';


function Home(props){
    const [postsList, setPostsList]= useState([]);
    const getPostsList=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result =>{
            setPostsList(result.data);
        })
        .catch(error =>{

        })
    }
    useEffect(()=>{
        getPostsList();
    },[])
    return(
        
        <Container>
         {
            postsList.map(post=>(
                <Post post={post} key={post.id} isMultibulePosts={true}/>
            ))
         }
         
        {/*//add post modal
       <AddPostModal show={show} setShow={setShow} onpostAdded={getPostsList()}/>*/}

        </Container>
    );
}

export default Home;