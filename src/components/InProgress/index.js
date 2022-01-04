import React from "react";
import './index.css'

class InProgress extends React.Component {
    constructor(props) {
        super(props)
        this.select = React.createRef()
        this.button = React.createRef()
    }
    selectHandleClick = (e) => {
        const newItem = e.target.value
        this.props.onInProgressSubmit(newItem)
        this.changeDisplay()
    }
    changeDisplay = () => {
        this.button.current.classList.toggle('display__none')
        this.select.current.classList.toggle('display__none')
    }
    buttonHandleClick = () => {
        if (this.props.selectList.length) {
            this.changeDisplay()
        } else {
            return
        }
    }
    render () {
        const { selectList, inProgressList } = this.props
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <h2>In progress</h2>
                    <ul className="card-content-list">
                        {inProgressList.map(item => {
                          return (
                            <li>
                                {item}
                            </li>
                          )  
                        })}
                    </ul>
                    <div className="card-button" ref={this.button}>
                        <button onClick={this.buttonHandleClick}>
                            + Add card
                        </button>
                    </div>
                    <div className="select-list display__none" ref={this.select}>
                        <select className="select"  onChange={this.selectHandleClick}>
                            {selectList.map(item => {
                            return <option>
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

export default InProgress