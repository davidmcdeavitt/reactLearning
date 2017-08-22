import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    submit() {
        const notes = this.state.notes;

        const newNote = { text: this.state.text };

        notes.push(newNote);

        this.setState({ notes: notes });

    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={event => this.setState({ text: event.target.value })} />
                        {' '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                      return(
                          <div key={index}>{note.text}</div>
                      )  
                    })
                }
            </div>
        )
    }
}

//need to import these from curly braces
// export const color = 'blue';
// export const number = 22;

//default export means that for importation we can import the app without curly braces
export default App;