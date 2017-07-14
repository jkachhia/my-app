import React, { Component } from 'react';
import Project from './Component/Project';
import AddPorject from './Component/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state ={
      projects :[],
      todos:[]
    
    }
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/posts?userId=1',
      dataType: 'json',
      cache:false,
      success:function (data){
        this.setState({todos:data},function(){
          console.log(this.state);
        });
      }.bind(this),
      error:function(xhr,status,err){
      console.log(err);
      }  
    });
  }

  getProject(){
  this.setState({projects :[
        {
        id:uuid.v4(),
        title:"Bu",
        category:"Web Desig"
      },
      {
        id:uuid.v4(),
        title:"So App",
        category:"Mobile"
      },{
        id:uuid.v4(),
        title:"Ecom",
        category:"Web Develop"
      }
      ]
    });
  }
    componentWillMount(){
    this.getProject();
    this.getTodos();
  }
  componentDidMount(){
this.getTodos();
  }
  handleAddProjet(project){
    let projects=this.state.projects;
    projects.push(project);
    this.setState(projects:projects);
  }
  handleDeleteProject(id){
    let projects=this.state.projects;
    let index=projects.findIndex(x=>x.id==id);
    projects.splice(index,1);
 this.setState(projects:projects);   
  }
  render() {
    return (
      <div className="App">
        <AddPorject addProject={this.handleAddProjet.bind(this)} />
        <h3> latest Project </h3>
        <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div> 
    );
  }
}


   
export default App;
