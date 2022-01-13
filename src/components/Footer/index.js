import React from "react";
import './index.css'

function Footer (props) {
    return (
        <footer className="footer">
            <div className="l-side">
                <div className="active">
                    <p>
                        Active tasks: {props.activeTasks}
                    </p>
                </div>
                <div className="finished">
                    <p>
                        Finished tasks: {props.finishedTasks}
                    </p>
                </div>
            </div>
            <div className="r-side">
                <p>
                    Kanban board by {props.name}, {props.year}
                </p>
            </div>
        </footer>
    )
}

export default Footer