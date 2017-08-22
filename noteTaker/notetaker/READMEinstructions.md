## Prerequisites
start a new direct ory and enter into the directory (cd directory)
You must first run create-react-app <desiredName>
You need some code editor (Atom, Etc.)
You need node installed on your computer previously

## React

React is the default in a react project. 
reactDom is used to render the actual react code on the DOM
A component is something that needs to be imported from the library, but not the default. 
A component is a class which inherant and extend the component class from React.
State represents the local data from a component.
State updates throughout the life on an application
These changes happen from either by input from the user, time of day, or any other set parameters


## Step By Step Instructions
Step 1: Delete the SRC folder and its contents and create an empty SRC folder with index.js in its place.
this must be done so that we clear out any preexisting relationships that cna cause issues in the future

Step 2: Place the following code in the index.js file:
```
import React from 'react';
import ReactDOM from 'react-dom';
```
This is done in this manner because react is distinct and the library you need for React to write code
reactDom is used to render the actual react code on the DOM

Step 3: Place the following code in the index.js file below the previous entry:
```
ReactDOM.render(<div>App</div>, document.getElementById('root'));
```
Although this looks like HTML, it is in fact JSX and this is what is used in order to be able to render any output to the     DOM. we then need to tell the function render where it will be rendering. To do this we refer to the most top level           index.html file to see the 'root' div. This is where it has been predetermined that our code will reside.
Run this in the terminal and wait for "App" text to load into the DOM:
```
npm start
```

Step 4: We now need to think about components-pieces that will split up the DOM into usable pieces like a jigsaw puzzle
We need to first create a "components" folder in the SRC folder. Within that folder create an App.js file. Put the following text within the App.js file: 
```
import React, {Component} from 'react';
```

Step 5: React is the default in a react project. A component is something that needs to be imported from the library, but not the default. A component is a class which inherant and extend the component class from React. You now need to enter the following into the App.js file:
```
class App extends Component {
    render() {
        return (
            <div>
                <h2>Note Taker</h2>
            </div>
        )
    }
}
export default App;
```
Within the Component class we have access to the function render(). This function outlines the JSX that we want to return for this function. To pair imports we have to activate the export. We now want to export this component as the default App component. 

Step 6: In the index.js file within the SRC write the following to import the App component:
```
import App from './components/App';
```
The change the div container so App is used in the following way:
```
ReactDOM.render(<App />, document.getElementById('root'));
```
You should then see "My Personal Website" displayed on the DOM

Step 7: We now want to add the bootstrap module so that people can give us some input to save their email or any other informtion we want.

In the terminal input this:
```
npm install react-bootstrap --save
```
Then right above the <title>ReactApp<title> area  in the main index.html file input this link for bootstrap styling:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
**You might need to run npm install in the terminal thereafter

Step 8: We not need to add a button with submit (this part is optional depending on if you want someone to submit an email to you. 
We now need to update the App.js file as so:
```
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Note Taker</h2>
                <Form>
                    <FormControl />
                    <Button>Submit</Button>
                </Form>
                    
            </div>
        )
    }
}
```
This will import the Form, FormControl and Button from the react-bootstrap library. We will them inplement them into the DOM by using the bootstrap components. FormControl is just a React way of saying input.

Step 9: It is time to start to capture the information from the buttons in order to facilitate the usefulness of the appp. To do this we need to add "state" to our App component. To do this we need to walk through some steps in order to understand what is occuring. The first thing is to add a constructor() and super() in order to create a way to add this state.
Add this to App.js at the top:
```
class App extends Component {
    constructor() {
        super();

        this.state = {
            text: ''
        }
    }
```
This allows us to give a state which will capture text as a group of objects. In order to see how this is done we ned to make some changes to the FormControl method in the bottom of the app.js file. to do this we make this change to the file:
```
return (
            <div>
                <h2>Note Taker</h2>
                <Form>
                    <FormControl onChange={event => {console.log(event.target.value)}} />
                    <Button>Submit</Button>
                </Form>
                    
            </div>
        )
```
This allows us to console the changes and see how the state is changes by our entry into the file. the EVENT is what the onChange fires when we make changes to the DOM. The => then points to the body of the function which allows us to capture this within the state. The setState() function must now be inplementsed to catch this chnage within the component's state. 

Step 10: We now need to make further changes to the FormControl area:
```
return (
            <div>
                <h2>Note Taker</h2>
                <Form>
                    <FormControl onChange={event => this.setState({ text: event.target.value })} />
                    <Button>Submit</Button>
                </Form>
                    
            </div>
        )
 ```
 The setState() function recieves an object as its arguement with the key pertaining to what data we want to update. So now we are updating the text with this event's value (literally). But we are still not limiting how many objects are captured. In order to limit this contant change in what object we are capturing because React will constantly want to capture objects (as it nature intends). Add the content in the Button area of App.js in order to facilitate this change:
 ```
<Button onClick={() => console.log(this.state)}>Submit</Button>
```
open the DOM and what should be happening is that the console will display App.js:18 {text: "hey there "}
This lets you know that you are in fact chnaging the state of the Component in App.js
Right now, however the app looks a bit ugly and misconbobulated.  So we need to change that.

Step 11: To start to organize all our CSS we will be creating an index.css file within our SRC folder. We need to now think about how our page will be organized. For this moment we will just put the form in the middle of the page. To do this we need to add the following into the CSS file:
```
body {
    text-align: center;
    padding: 5%;
}
```
We then need to add the following to the top of the index.js file:
```
import './index.css';
```
This will automatically import the styling for us. 
We now need to make the following changes and additions to the App.js file:
```
<Form inline>
<FormControl onChange={event => this.setState({ text: event.target.value })} />
{' '}
<Button onClick={() => console.log(this.state)}>Submit</Button>
```
the inline addition to Form will allow the text box and button to be next to eachother (make sure that your out of the console log) and adding a space between the input and the button.
