## Prerequisites
You must first see the NoteTaker app and either clone it or copy the files before you adventure into this area

## Installation

run npm install enzyme react-test-renderer --save-dev in your terminal
Jest library is in your React package by default

## Step By Step Instructions
Step 1: We need to create a file Note.test.js in the components folder then run npm test in the terminal. It should connect to the file and show failed test. Then in the Note.test.js file input the following and I will explain:
```
import React from 'react';
import {mount} from 'enzyme';
import Note from './Note';

describe('Note', () => {
    let note = mount(<Note note={{ test: 'test note' }} />);

    it('renders the note text', () => {
        console.log(note.debug());
    });
});
```
This imports mount from enzyme that allows you to immitate the mount behavior of the component. Then we need access to the component, which we import form the Note component. We wrap the component with the describe function. It takes two parameters, the first describing the component, the second is the function that runs the test. In order to test we need to mount it, which we will assign to the result of the Note component. Do not exit out of the testing phase as it is constantly reloading in the terminal. We now need to give this component a note attribute. So we provide the attribute another object with some tee text that gives it output of a string. 
It() is another function that we need to use in order to permorm other tests and is similar to describes but tests exactly what our object of the test is. We have to give it two parameters as well, the first being some text we want to give it and the second a function to actually get the test we want. 
Jest gives us the build in debug function that gives us the current state of the variable.

Step 2: Next update the Note-test.js as follows:
```
const props = { note: { text: 'test note' } }

describe('Note', () => {
    let note = mount(<Note {...props} />);

    it('renders the note text', () => {
        expect(note.find('p').text()).toEqual(props.note.text);
    });
});
```
Now we will change the it() function so that is uses the build in expect() function to describe a specific area of the code we want to test. In this case it is the <p> within the Note. We set the input of the p to then be the variable input of the <p> in text format. but at this point we still have an issue with how we can change our test to make it flexable. In order to do this we need to set it equal to a props variable. We then use the spread operator function to spread the variables of the props operator. You can see this in practice as ...props which is an exact copy of the props component. Now we need to write a test for the App.js.

Step 3: Testing to see if our title actually hits the DOM and is being rendered.
