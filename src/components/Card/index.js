import React from 'react'
import './index.css'


class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            currentSelected: ''
        }
        this.handleChange = this.handleChange.bind(this)

        this.btn = React.createRef()
        this.select = React.createRef()
        this.submit = React.createRef()
        this.addButton = React.createRef()
        this.inputWrapper = React.createRef()
    }
    
  
    buttonHandleClick = () => {
            if (this.props.name === 'Backlog') {
                this.inputWrapper.current.classList.toggle('display__none')
                this.addButton.current.classList.toggle('display__none')
                this.submit.current.classList.toggle('display__none')
            } 

            if (this.props.selectList.length) {
                this.addButton.current.classList.toggle('display__none')
                this.submit.current.classList.toggle('display__none')
                this.select.current.classList.toggle('display__none')
            }
    }

    selectHandleClick = (e) => {
        this.setState({
            currentSelected: e.target.value
        })
    }    
    submitHandleClick = () => {
        const { submit } = this.props
        const { text, currentSelected } = this.state

        if (currentSelected) {
            submit(currentSelected)
            this.setState({
                currentSelected: ''
            })
            this.buttonHandleClick()
        }

        if (text) {
            this.setState({
                text:''
            })
            submit(text)
            this.buttonHandleClick()
        } else {
            return
        }   
        
    }
    handleChange (e) {
        this.setState({
            text: e.target.value
        })
    }

    render () {
        const {name, list, selectList} = this.props
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <h2>{name}</h2>
                    <ul className="card-content-list">
                    {list.map((item, index) => {
                         return   <li key={index}>
                                    {item}
                                  </li>
                        })}                        
                    </ul>
                    <div className="card-button" ref={this.addButton} >
                        <button onClick={this.buttonHandleClick} ref={this.btn}>
                            + Add card
                        </button>
                    </div>
                    <div className="card-input display__none" ref={this.inputWrapper}>
                        <input 
                            type='text' 
                            value={this.state.text}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <form className="select-list display__none" ref={this.select}>
                        <select className="select"  onChange={this.selectHandleClick}>
                            {selectList.map((item) => {
                                return  <option>
                                            {item}
                                        </option>
                            })}
                        </select>
                    </form>
                    <div className="card-submit display__none" ref={this.submit}
                         onClick={this.submitHandleClick}   
                    >
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
            </div>    
        )
    }
}

export default Card