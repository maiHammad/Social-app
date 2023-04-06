import React,{useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

function AddPostModal(props){
    const handleClose = () => props.setShow(false);
    const [postTitle,setPostTitle]=useState('');
    const [postBody,setPostBody]=useState('');
    const [formHasError,setFormError]=useState(false);
    const [postAdded,setPostAdded]=useState(false);
    const navigateToPostsPage=useNavigate();


    function addNewPost(e){
     e.preventDefault();
     const postData={
        postTitle,
        postBody,
        userId:1
     }
     if(postTitle.length===0||postBody.length===0){
        setFormError(true);
     }else{
        setFormError(false);
        axios.post('https://jsonplaceholder.typicode.com/posts',postData)
        .then(result =>{
            setPostAdded(true);
            setTimeout(() => {
                handleClose();
                navigateToPostsPage(`/`);
         }, 1000);

        })
        .catch(error =>{
    
        })
     }

    }
    return(
        <>
      <Modal show={props.show} onHide={handleClose}>
      <Form onSubmit={addNewPost}>

        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="addPostForm.postTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Post Title"
                autoFocus
                name="postTitle"
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addPostForm.postBody"
            >
              <Form.Label>Post Content</Form.Label>
              <Form.Control as="textarea"
               rows={3}
               name="postBody"
               value={postBody}
               onChange={(e)=>setPostBody(e.target.value)} />
            </Form.Group>
            {formHasError?
                <Alert variant="danger">
                Please Fill Requird Data. 
              </Alert>:""
            }
      {postAdded?
            <Alert variant="success">
            Post Added Successfully.
          </Alert>:""
      }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type='submit'>
            Submit</Button>
        </Modal.Footer>
        </Form>

      </Modal>


    </>
    );
}
export default AddPostModal;