import React from "react";



export default function AddCardBtn (props) {
    const { buttonHandleClick, isEnabled, name } = props
    const btnEnabled = <button onClick={buttonHandleClick}>
                            + Add card
                        </button>
    const btnDisabled = <button onClick={buttonHandleClick} disabled>
                            + Add card
                        </button>

    
    if (name === 'Backlog') 
        return btnEnabled

    if (!isEnabled) {
        return btnDisabled
    }

    return btnEnabled

}