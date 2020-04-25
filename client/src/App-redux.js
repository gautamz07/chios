import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, Tag } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import TaskTabs from './components/TaskTabs'
import AddTask from './components/AddTask'


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

  
    this._handleTaskSubmit = this._handleTaskSubmit.bind(this)
    this._handleTag = this._handleTag.bind(this)
    this._handleInput = this._handleInput.bind(this)
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

  _handleTaskSubmit() {

    const tag = this.state.selectedTags.pop()

    //debugger
    fetch('/insertIT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taskDetails: {
          task: this.state.task,
          tag,
        }
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))

  }

  _handleTag(tag , checked) {
    console.log(`${tag} ${checked}`)
    const { selectedTags } = this.state
    const nextSelecttags = checked ? [...selectedTags, tag] : selectedTags.filter( e => e !== tag)
    this.setState({
      selectedTags: nextSelecttags,
    })
  }

  _handleInput(e) {
    this.setState({ task: e.target.value })
  }

  render() {

    return (
      <div className='App-Wrapper'>
        <div>HI</div>
      </div>
    )

  }

}

export default App;
