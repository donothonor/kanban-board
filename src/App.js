import React from 'react';
import './App.css';
import Header from './components/Header'
import BackLog from './components/BackLog'
import Ready from './components/Ready'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskToRemove: '',
      backLogCurrentList: []
    }
  }
  getTaskToRemove = (task) => {
    this.state.taskToRemove = task
  }
  updateBackLogList = (data) => {
    this.state.backLogCurrentList.push(data)
  }  
  render () {
    return(
    <>
      <Header />
      <main className='main'>
        <BackLog
          taskToRemove = {this.state.taskToRemove}
          updateBackLogList = {this.updateBackLogList}
        ></BackLog>
        <Ready
          getTaskToRemove = {this.getTaskToRemove}
          selectList = {this.state.backLogCurrentList}        
          ></Ready>
        {/* <InProgress></InProgress>
        <Finished></Finished> */}
      </main>
    </>
    )
  }
}

export default App;
