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

Step 12: Next make the following changes to the App.js file and I will explain what exactly we are doing:
```
constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    submit() {
        const { notes, text } = this.state;

        notes.push({text});

        this.setState({ notes });

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
```
First we are creating an array for our notes to be captured in the main parent component section. We then use the submit() function to take the input we are giving them and push the into the notes aray. It also identifies in this function where we will get this information from, which takes the text state, maps it into the notes index, where it is then pushed into the array.

Step 13: It is not time to take this information we just captured in the note array and use it in a component. To do this we need to make a note component by creating Note.js file in the same folder as App.js and add some code as follows:
```
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
```
this creates the component but now we have to think about how it is actually captured. IF you look at the <p> tag above you will notice the .props. This is how the child can capture the information from the parent. Now we just need to make some minor changes to the App.js file in order to capture these changes:

```
this.state.notes.map((note, index) => {
return(
<Note key={index} note={note} />
)  
})
```

As you can see we have the notes prop (which is that same array) but now can be passed down to the child component Notes. 

Step 14: now we should add a bit of styling to our notes. Do do this we need to ass a tag to the div in Note.js
```
<div className='note'>
```
Then in the index.css file we will add some styling mechanisms:
```
.note {
    border: 1px solid lightgray;
    border-radius: 5px;
    font-style: italic;
    text-align: left;
    padding: 8px;
    margin: 30px;
}
```
Now we have some sweet cards here that we can use and possibly play with

Step 15: In order to save peoples changes however we need to start thinking about adding a cookie to capiture this information. in order to do this you need to run the following on the terminal:
```
npm install sfcookies --save
```

Step 16: Now in order to save these notes and store the information we need to bring in this new library sf cookies and set it qual to a variable. In order to do this we need to add this code to the very top of App.js:
```
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';

const cookie_key = 'NOTES';
```
These built in functions allow us to create a cookie, read them, then delete the cookie when it is no longer needed.
We needed a way to take all these function and wrap them around a commn element. To do this we created a cookiekey and set it equal to to a string. To create the cookie we can imput it when the information is submitted in the application. to do this we should ass the following into the submit function to capiture it the instance an object is created:
```
bake_cookie(cookie_key, this.state.notes);
```

The question now is how we can tell the component to fire this function when we create a new item. The answer to that is lifecycle hooks, and the most important one of them all, which is componentDidMount. This activates when our component finishes loading or updating to the DOM of the app. We now need to say to the notes that when we create them that this state or local information we have  needs to be returned to us. 
so now we will say the initial state of the cookie is what we have already created for this user:

```
componentDidMount() {
this.setState({ notes: read_cookie(cookie_key) });
}
```

Make sure you app is not broken and is still saving notes

Step 17: We now need to be able to delete cookies. First we need a new function that allows us to take advantage of the deete cookies method. Just below the submit function imput a new clear() function as follows:

```
clear() {
        delete_cookie(cookie_key);

        this.setState({ notes: [] });
    }
```
Next we need to make a function to clear the notes as they get completed. Enter this text in the return function area below the Notes section:
```
<hr/>
<Button onClick={() => this.clear()}>Clear notes</Button>
```

Now check this in the DOM. 

JUST LIKE THAT WE GOT A NOTE TAKER APP IN REACT!!!
