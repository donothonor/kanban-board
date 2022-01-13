import React from "react";
import LoginMenu from "../LoginMenu";
import './index.css'

class Header extends React.Component {
    constructor (props) {
      super(props)
      
      this.state = {
        menuClicked: false
      }
      
      this.arrow = React.createRef()
    }

    onAvatarClick = () => {
      this.setState(state => ({
        menuClicked: !state.menuClicked
      }))
      this.arrow.current.classList.toggle('rotate')
    }    
    render() {
      return (
        <header className='header'>
          <div className='header-title'>
            <h1>
              Awesome Kanban Board
            </h1>
          </div>
          <div 
            className='header-avatar'
            onClick={this.onAvatarClick}
          >
            <div 
              className="header-arrow"
              ref={this.arrow}  
            >
            </div>
          </div>
          <LoginMenu 
            clicked={this.state.menuClicked}
          />
        </header>
      )
    }
}

export default Header