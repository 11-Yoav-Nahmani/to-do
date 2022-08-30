import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }

    }

    handleChange = (e) => {
        this.setState((state) => {
            state[e.target.name] = e.target.value;
            return state;
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { addTask } = this.props

        addTask(this.state);
    };


    render() {
        const { returnToList } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        task name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={this.state["name"]}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                    <button onClick={returnToList}>return to list</button>
                </form>
            </div>
        );
    }
}


export { AddTask }