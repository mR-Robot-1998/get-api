import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Table,Container, Alert} from 'react-bootstrap';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      posts:[],
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> {
      return response.json();
    })
    .then((data) => {
      this.setState({
        posts:data
      })
    })
  }
  render() {
    return (
      <Container className='mt-5'>
      {this.state.posts.length > 0  ? (
        <Table striped bordered hover variant="dark">
        <thead>
         <tr>
           <th>#</th>
           <th>ID</th>
            <th>Title</th>
           <th>Body</th>
         </tr>
       </thead>
       <tbody>
        {this.state.posts.map((post)=> (
          <tr>
           <th>#</th>
           <th>{post.id}</th>
            <th>{post.title}</th>
           <th>{post.body}</th>
         </tr>
        ))}
       </tbody>
     </Table>
    
      ) : (
        <Alert variant='info'>
          Loading...
        </Alert>
      )}  
      
    </Container>
    )
  }
}
