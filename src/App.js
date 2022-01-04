import React from 'react';
import './App.css';
import Header from './components/Header'
import BackLog from './components/BackLog'
import Ready from './components/Ready'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      backLogCurrentList: [],
      readyCurrentList:[],
      selectCurrentList: []
    }
  }
  onBackLogSubmit = item => {
    this.setState(state => ({
      backLogCurrentList: state.backLogCurrentList.concat(item),
      selectCurrentList: state.selectCurrentList.concat(item)
    }))
  }
  onReadySubmit = item => {
    this.setState(state => ({
      selectCurrentList: state.selectCurrentList.filter(listItem => listItem !== item),
      backLogCurrentList: state.backLogCurrentList.filter(listItem => listItem !== item),
      readyCurrentList: state.readyCurrentList.concat(item)
    }))
  }
  
  render () {
    const { backLogCurrentList, selectCurrentList, readyCurrentList } = this.state
    return(
    <>
      <Header />
      <main className='main'>
        <BackLog
          onBackLogSubmit={this.onBackLogSubmit}
          backLogList={backLogCurrentList}
        />
        <Ready
          onReadySubmit={this.onReadySubmit}
          readyList={readyCurrentList}
          selectList={selectCurrentList}
        />
        {/* <InProgress></InProgress>
        <Finished></Finished> */}
      </main>
    </>
    )
  }
}

export default App;
