import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, Tag } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import TaskTabs from './components/TaskTabs'


// import AddTask from './components/AddTask'
import AddTask from './components/containers/AddTask'


const { CheckableTag } = Tag;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 
*/

const tagsFromServer = ['javascript' , 'github']

class App extends Component {

  constructor() {
    super()

    this.state = {
      task: '',
      selectedTags: [],
      tasks: [],
      tags: [],
      currentTasksList: []
    }
  
    this._handleTaskClicked = this._handleTaskClicked.bind(this)
  }

  componentDidMount() {
    fetch( '/getlist' , {
      method: "POST"
    }) 
    .then( ( resp ) => {
        console.log(resp)
        return resp.json();
    })
    .then( ( data ) => {
        console.log(data)
        let arr = [...data];  
        this.setState({
          ...this.state,
          tasks : arr
        });

    })
    .catch( ( err ) => {
        console.log( err );                
    }); 



    fetch( '/gettags' , {
      method: "POST"
    }) 
    .then( ( resp ) => {
        console.log(resp)
        return resp.json();
    })
    .then( ( data ) => {
        console.log(data)
        let arr = [...data];  
        this.setState({
          ...this.state,
          tags : arr
        });

    })
    .catch( ( err ) => {
        console.log( err );                
    }); 

  }

  _handleTaskClicked(id) {
    fetch('/getTaggedTasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taskID: id
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        ...this.state,
        currentTasksList: res
      })
    })
  }
  
  render() {

    return (
      <div className='App-Wrapper'>
      {/* <AddTask
        handleSubmit={this._handleTaskSubmit}
        tags={this.state.tags}
        handleInput={this._handleInput}
        handleTag={this._handleTag}
        selectedTags={this.state.selectedTags}
      /> */}

      <AddTask />
      <TaskTabs 
        tags={this.state.tags}
        currentTasksList={this.state.currentTasksList}
        handleClickOfTab={this._handleTaskClicked}
      />  
    </div>
    )

  }

}

export default App;
