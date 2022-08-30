import React from "react";
import { SearchBar } from "../cmps/searchBar";
import { TasksList } from "../cmps/TasksList";
import { BtnGroup } from "../cmps/BtnGroup";
import { AddTask } from "../cmps/AddTask"

import data from "../data/tasksData.js";

const FilterOptions = {
    all: 'all',
    completed: 'completed',
    left: 'left',
}

class Home extends React.Component {

    state = {
        isAddMode: false,
        alltasks: data,
        filterBy: FilterOptions.all
    }



    getTasksForDisplay = (filterBy) => {
        if (filterBy === 'completed') {
            return this.state.alltasks.filter((task) => task.isTaskCompleted)
        } else if (filterBy === 'left') {
            return this.state.alltasks.filter((task) => !task.isTaskCompleted)
        } else {
            return this.state.alltasks;
        }

    }

    onComplition = (id) => {
        this.setState((state) => {
            return {
                alltasks: state.alltasks.map((task) => {
                    if (task.id === id) {
                        task.isTaskCompleted = true
                    }
                })
            }
        })
    }

    onSearch = (event) => {
        const result = event.target.value
        this.setState((state) => {
            if (result === '') {
                return { alltasks: data };
            } else {
                return { alltasks: state.alltasks.filter((task) => task.name.toLowerCase().includes(result.toLowerCase())) };
            }
        })

    }

    onRemoveTask = (id) => {
        this.setState((state) => {
            const data = state.alltasks.filter((task) => task.id !== id)
            return { tasks: data, alltasks: state.alltasks.filter((task) => task.id !== id) };
        });
    }


    onReturn = () => {
        this.setState({ isAddMode: false });
    }

    onAddTask = () => {
        this.setState({
            isAddMode: true
        });
    }

    returnToList = () => {
        this.setState({
            isAddMode: false
        });
    }

    addTask = (task) => {
        const taskToAdd = {
            id: "id" + Math.random().toString(16).slice(2),
            name: task.name,
            isTaskCompleted: false
        }

        this.setState((state) => {
            return {
                alltasks: [...state.alltasks, taskToAdd],
                isAddMode: false
            }
        })
    }

    render() {
        const { alltasks, isAddMode } = this.state
        return (
            <div>
                {!isAddMode ? (
                    <div>
                        <div className="menu">
                            <SearchBar alltasks={alltasks} onSearch={this.onSearch} />
                            <button onClick={this.onAddTask} className="btn btn-primary">add</button>
                        </div>
                        <TasksList
                            onComplition={this.onComplition}
                            onEditTask={this.onEditTask}
                            tasks={this.getTasksForDisplay(FilterOptions.all)}
                            onRemoveTask={this.onRemoveTask} />
                        <BtnGroup
                            displayCompleted={this.getTasksForDisplay(FilterOptions.completed)}
                            displayNotCompleted={this.getTasksForDisplay(FilterOptions.left)}
                            displayAll={this.getTasksForDisplay(FilterOptions.all)}
                        />
                    </div>
                ) : (
                    < AddTask
                        addTask={this.addTask}
                        returnToList={this.returnToList}
                    />
                )}
            </div>
        )
    }
}
export default Home 