import React from "react";


class TaskPreview extends React.Component {


    render() {
        const { task, onComplition, onRemoveTask } = this.props
        return (
            <div className="tab">
                <input type='checkbox' checked={task.isTaskCompleted} onChange={onComplition} />
                <div className="inline-block-display">
                    <label>{task.name}</label>
                </div>
                <div className="inline">
                    <button
                        onClick={onRemoveTask}
                        className="btn btn-primary remove-task inline-block-display">🗑</button></div>
            </div>
        )
    }
}

export { TaskPreview }