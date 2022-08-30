import React from "react";

class BtnGroup extends React.Component {
    render() {
        const { displayCompleted, displayNotCompleted, displayAll } = this.props
        return (
            <div>
                <button onClick={displayAll} className="btn btn-primary make-room">ALL</button>
                <button onClick={displayCompleted} className="btn btn-primary make-room">COMPLETED</button>
                <button onClick={displayNotCompleted} className="btn btn-primary make-room">LEFT</button>
            </div>
        )
    }
}


export { BtnGroup }

