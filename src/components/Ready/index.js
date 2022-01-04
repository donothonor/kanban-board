import React from "react";
import './index.css'

class Ready extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            taskToRemove: '',
            readyList: [],
            list: []
        }
        this.select = React.createRef()
        this.button = React.createRef()
        this.selectItem = React.createRef()
    }

    changeDisplay = () => {
        this.button.current.classList.toggle('display__none')
        this.select.current.classList.toggle('display__none')
    }
    componentDidMount () {
        this.setState ({
            list: this.props.selectList
        })
    }
    selectHandleClick = (e) => {
        const newItem = e.target.value
        this.setState(state => ({
            readyList: state.readyList.concat(newItem),
            taskToRemove: newItem
            
        }))
        this.props.getTaskToRemove(this.state.taskToRemove)
        this.changeDisplay()
    }

    buttonHandleClick = () => {
        if (this.state.list.length) {
            this.changeDisplay()
        } else {
            return
        }
        this.setState({
            list: this.props.selectList
        })
    }
    render () {
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <h2>Ready</h2>
                    <ul className="card-content-list">
                        {this.state.readyList.map((item) => {
                         return   <li>
                                    {item}
                                  </li>
                        })}
                    </ul>
                    <div className="card-button"
                        ref={this.button}
                        >
                        <button
                            onClick={this.buttonHandleClick}     
                        >
                            + Add card
                        </button>
                    </div>
                    <div className="select-list display__none" ref={this.select}>
                        <select className="select"  onChange={this.selectHandleClick}>
                            {this.state.list.map(item => {
                            return <option 
                                ref={this.selectItem}
                            >
                                        {item}
                                   </option>
                            })}
                        </select>
                    </div>
            </div>
        </div>    
        )
    }
}

export default Ready