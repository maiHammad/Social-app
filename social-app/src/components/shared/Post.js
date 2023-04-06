import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import dummyImage from "../../assets/images/dummyImage.png";
import avatar from "../../assets/images/avatar.png";
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

function Post(props) {
const navigateToPostPage=useNavigate();
  function  clickPost(postId){
    if(props.isMultibulePosts){
            navigateToPostPage(`SinglePost/${props.post.id}`);
    }

    }
    return (
      <Row  xs={1} md={1} className="g-4 mb-4 " id={props.post.id} onClick={e=>clickPost(e.currentTarget.id)}>
          <Col>
            <Card>
                <Row>
                  <Col xs={3} md={3}>
                  <Card.Img variant="top" className='w-100 h-100' src={dummyImage} />
                  </Col>    
                  <Col xs md={9}> 
                  <Card.Body className='h-75  align-items-center flex-wrap d-flex'>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>
                {props.post.body}
                </Card.Text>
              </Card.Body>

         </Col>    

                </Row>
            </Card>
          </Col>
   
            {!props.isMultibulePosts?
                   <Col>
                   <Card>
                   <Card.Footer className="text-muted">
                          <ListGroup as="ul">
                          { props.postComments.length>0?
                              props.postComments.map(comment=>(
                            <ListGroup.Item as="li" key={comment.id}>
                                  <Alert variant="light">
                                 {comment.body}
                                 </Alert>
                                 <Alert variant="light">
                                <label className='d-block text-secondary'>
                                    <Image src={avatar} roundedCircle={true} width={30}></Image>
                                    <small className='px-3'>{comment.name}</small></label>
                                <label className='d-block text-secondary  px-5'><small>{comment.email}</small></label>
                                </Alert>
                            </ListGroup.Item> 
                            )): <ListGroup.Item as="li">No Comments</ListGroup.Item>
                           
                        }
                          </ListGroup>

                        
                    </Card.Footer>
                   </Card>
                   </Col>:""
             }
      </Row>
    );
  }
  
  export default Post;