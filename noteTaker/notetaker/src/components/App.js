import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form>
                    <FormControl />
                    <Button>Submit</Button>
                </Form>
                    
            </div>
        )
    }
}

//need to import these from curly braces
// export const color = 'blue';
// export const number = 22;

//default export means that for importation we can import the app without curly braces
export default App;