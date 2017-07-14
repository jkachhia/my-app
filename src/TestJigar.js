import React, { Component } from 'react';

class TestJ extends Component {
    render() {

        var xyz='Jaldhi';
        return (
<div>This is test Appp by JIGAR {xyz}
        <div id='Test123'>This is test Appp by JIGAR2</div>
</div>
        );
    }

}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function AppZ() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
export default TestJ;