import React from "react";
import './index.css'

class BackLog extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list : [],
            text: ''
        }
        this.backlogInputWrapper = React.createRef()
        this.backlogInput = React.createRef()
        this.backlogButton = React.createRef()
        this.backlogSubmit = React.createRef()

    }
    buttonHandleClick =  () => {
        this.backlogInputWrapper.current.classList.toggle('display__none')
        this.backlogButton.current.classList.toggle('display__none')
        this.backlogSubmit.current.classList.toggle('display__none')
    }
    submitHandleClick = () => {
        const newItem = this.state.text

        if (newItem) {
            this.setState(state => ({
                list: state.list.concat(newItem),
                text: ''
            }))
    
            this.buttonHandleClick()
        } else {
            return
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render () {
        const { list } = this.state

        let filtredList = list.filter(item => item !== this.props.taskToRemove)    
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <h2>Backlog</h2>
                    <ul className="card-content-list">
                    {filtredList.map((item, index) => {
                         return   <li key={index}>
                                    {item}
                                  </li>
                        })}                        
                    </ul>
                    <div className="card-button" ref={this.backlogButton}>
                        <button
                            onClick={this.buttonHandleClick}     
                        >
                            + Add card
                        </button>
                    </div>
                    <div className="card-input display__none" ref={this.backlogInputWrapper}>
                        <input 
                            type='text' 
                            ref={this.backlogInput}
                            value={this.state.text}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="card-submit display__none" ref={this.backlogSubmit}
                         onClick={this.submitHandleClick}   
                    >
                        <button
                            onClick={() => this.props.updateBackLogList(this.state.text)}   
                        >
                            Submit
                        </button>
                    </div>
            </div>
        </div>    
        )
    }
}

export default BackLog