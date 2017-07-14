import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Project extends Component {
    deletePorject(id){
        this.props.onDelete(id);
    }
    render() {
  
  let projectItems;
  if(this.props.projects){
      projectItems=this.props.projects.map(projects => {
          //console.log(projects);
          return (
              <ProjectItem key={projects.title} project={projects} onDelete={this.deletePorject.bind(this)} />
          );

      });
  }
  
        return (
      <div className="Project">
        {projectItems}
      </div> 
    );
  }
}
Project.propTypes={
  projects:React.PropTypes.array,
  onDelete:React.PropTypes.func
}
   
export default Project;
