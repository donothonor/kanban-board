import React from "react";
import './index.css'

class BackLog extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
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
            this.setState({
                text:''
            })
            this.props.onBackLogSubmit(this.state.text)
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
        const { backLogList } = this.props
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <h2>Backlog</h2>
                    <ul className="card-content-list">
                    {backLogList.map((item, index) => {
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