import React, { Component } from React;

class Note extends Component {
    render() {
        return (
            <div>
                <p>{this.props.note.text}</p>
            </div>
        )
    }
}

export default Note;