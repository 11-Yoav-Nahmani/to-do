import React from "react";
import { TaskPreview } from "./TaskPreview";



class TasksList extends React.Component {
    render() {
        const { tasks, onComplition, onRemoveTask } = this.props
        return (<section>
            <ul>
                {tasks.map((task) => {
                    return <TaskPreview
                        key={task.id}
                        task={task}
                        onComplition={() => onComplition(task.id)}
                        onAddTask={this.onAddTask}
                        onRemoveTask={() => onRemoveTask(task.id)}
                    />
                })}
            </ul>
        </section>)
    }
}

export { TasksList }