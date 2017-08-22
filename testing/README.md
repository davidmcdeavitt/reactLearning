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

Step 3: Testing to see if our title actually hits the DOM and is being rendered. Inside the App.test.js place the following:
```
import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App />);

    it('renders the App title', () => {
        expect(app.find('h2').text()).toEqual('Note to Self');
    });
});
```
From the explaination above, this has basically the same syntax except we are testing for exactly what we put ingto the original header. All test should be passing. If not check all files and details as you may have made a typo.

Step 4: We need to develop an entire suite of tests for every rendering of the DOM. 
Lets start with the clear button:
```
it('renders the clear button', () => {
   expect(app.find('.btn').at(1).text()).toEqual('Clear notes'); 
});
```
as you can see it is the same principle but we have to specifically identify the location of the button specifically

Step 5: Next we can move onto a new testing suite:
```
describe('when rendering the form', () => {
        it('creates a Form component', () => {
        expect(app.find('Form').exists()).toBe(true);
        });
```
As you can see the manner in which we are testing is discussing the actual form rendering the correct child components. 
First we test to make sure the form component actually exists, by finding the form, and since it rturns a boolean we have to set passing equal to true. Now can can do the same syntax for the FormControl component and submit button:
```
it('renders a FormControl component', () => {
    expect(app.find('FormControl').exists()).toBe(true);
});
it('renders a submit button', () => {
    expect(app.find('.btn').at(0).text()).toEqual('Submit');
});
