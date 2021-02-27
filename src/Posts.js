import React ,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, CardText, Form, FormGroup, CardBody} from 'reactstrap'
import { db } from "./Firebase";



function Posts() {

    const [post, setPost] = useState([])
    const [displayPost, setDisplayPost] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();

        db.collection('posts').add({
            post:post
            
        })
        .then(()=>{
            alert('Your post has been submitted!')
        })
        .catch((error)=>{
            alert(error.message);
        })

        setPost('')
    }

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>{
            setDisplayPost(snapshot.docs.map(doc => doc.data()))

        })
    })



    return (
        <div>
        <div className="text-center jumbotron">
            <Link to="/signin">
            <Button>Signin</Button>
            </Link>


            <h1>Post</h1>
            <Form className="login-form" onSubmit={handleSubmit}>
                <FormGroup>
                <textarea type="text"
                className="post-input"
                placeholder="Write your post here"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                ></textarea>
                <Button type="submit" className="btn-lg btn-block mt-3">Post</Button>
                
                </FormGroup>
                
            </Form>

            
          {
            displayPost.map( (post) =>(
                <Card className="card">
                    <CardBody>
                        <CardText>
                            <p>{ post.post}</p>
                        </CardText>
                    </CardBody>
                </Card>
            ))
            }

          
        </div>
        </div>

    )            
}

export default Posts

