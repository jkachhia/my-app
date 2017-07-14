import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {

    constructor(){
        super();
        this.state ={
            newProject :{}
        }
    }
    static defaultProps ={
        categories:['Web Design','Mobility','Web Dev']
    }
    handleSubmit(e){
        if(this.refs.txtTitle.value===''){
            alert("Title is required");
        }else{
            this.setState({newProject:{
                id:uuid.v4(),
                title:this.refs.txtTitle.value,
                category:this.refs.selCategory.value
            }}, function(){
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            }
            );
        }

        e.preventDefault();
    }
    render() {
        let categoryOption=this.props.categories.map(
            category=> {
                return (
                    <option key={category} value={category}>{category}</option>
                );
            }
        );
        return (
      <div >
        <h3>Add Project</h3> 
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label>
                <input type="text" ref="txtTitle" />
            </div>
            <br/>
            <div>
                <label>Category</label>
                <select ref="selCategory">
                    {categoryOption}
                </select>
            </div>
            <br/>
            <input type="submit" value="submit" />
        </form>
      </div> 
    );
  }
}

   
export default AddProject;
