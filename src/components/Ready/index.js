import React from "react";
import './index.css'

class Ready extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
        this.select = React.createRef()
        this.button = React.createRef()
        this.selectItem = React.createRef()
    }

    changeDisplay = () => {
        this.button.current.classList.toggle('display__none')
        this.select.current.classList.toggle('display__none')
    }
    selectHandleClick = (e) => {
        const newItem = e.target.value
        this.props.onReadySubmit(newItem)
        this.changeDisplay()
    }

    buttonHandleClick = () => {
        if (this.props.selectList.length) {
            this.changeDisplay()
        } else {
            return
        }
    }
    render () {
        const { selectList, readyList } = this.props
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <h2>Ready</h2>
                    <ul className="card-content-list">
                        {readyList.map((item) => {
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
                            {selectList.map(item => {
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