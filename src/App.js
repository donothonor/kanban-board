import React from 'react';
import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      backLogCurrentList: [],
      readyCurrentList:[],
      inProgressCurrentList:[],
      finishedCurrentList: []
    }
  }
  
  onBackLogSubmit = item => {
    this.setState(state => ({
      backLogCurrentList: state.backLogCurrentList.concat(item),
    }))
  }
  onReadySubmit = item => {
    this.setState(state => ({
      backLogCurrentList: state.backLogCurrentList.filter(listItem => listItem !== item),
      readyCurrentList: state.readyCurrentList.concat(item)
    }))
  }
  onInProgressSubmit = item => {
    this.setState(state => ({
      readyCurrentList: state.readyCurrentList.filter(listItem => listItem !== item),
      inProgressCurrentList: state.inProgressCurrentList.concat(item)
    }))
  }
  onFinishSubmit = item => {
    this.setState(state => ({
      inProgressCurrentList: state.inProgressCurrentList.filter(listItem => listItem !== item),
      finishedCurrentList: state.finishedCurrentList.concat(item)
    }))
  }
  
  render () {
    const { backLogCurrentList, readyCurrentList, inProgressCurrentList, finishedCurrentList} = this.state
    return(
    <>
      <Header />
      <main className='main'>
        <Card 
          name = 'Backlog'
          list = {backLogCurrentList}
          submit = {this.onBackLogSubmit}
          selectList = {[]} 
        />
        <Card 
          name = 'Ready'
          list = {readyCurrentList}
          submit={this.onReadySubmit}
          selectList = {backLogCurrentList}
        />
        <Card 
          name = 'In Progress'
          list = {inProgressCurrentList}
          submit={this.onInProgressSubmit}
          selectList = {readyCurrentList}
        />
        <Card 
          name = 'Finished'
          list = {finishedCurrentList}
          submit={this.onFinishSubmit}
          selectList = {inProgressCurrentList}
        />
      </main>
      <Footer
        name={'Vadim Spiridonov'}
        year={2022} 
        activeTasks={backLogCurrentList.length}
        finishedTasks={finishedCurrentList.length}
      />
    </>
    )
  }
}

export default App;
