import React from "react";
import './index.css'

function Header () {
    return (
      <header className='header'>
        <div className='header-title'>
          <h1>
            Awesome Kanban Board
          </h1>
        </div>
        <div className='header-avatar'>
          <img src='' alt='user_avatar' />
        </div>
      </header>
    )
}

export default Header