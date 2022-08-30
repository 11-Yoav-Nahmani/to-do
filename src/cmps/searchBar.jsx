import React from "react";

class SearchBar extends React.Component {
    render() {
        return (<input type='text' className="form-control" onChange={this.props.onSearch} />)
    }
}

export { SearchBar }

