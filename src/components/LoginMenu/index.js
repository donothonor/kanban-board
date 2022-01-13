import React from 'react'
import './index.css'

function LoginMenu (props) {
    if (props.clicked) {
        return (
            <div className='login-menu'>
                <div className='login-menu-profile'>
                    <button>Profile</button>
                </div>
                <div className='login-menu-logout'>
                    <button>Log Out</button>
                </div>
            </div>
        )
    }
    return (
        <div className='login-menu display__none'>
            <div className='login-menu-profile'>
                <button>Profile</button>
            </div>
            <div className='login-menu-logout'>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default LoginMenu