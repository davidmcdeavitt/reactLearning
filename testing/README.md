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
```

Step 6: We now have to test for the user typing or clicking some buttons (ie behavioral testing). First we have to ask what are we doing in this app to be able to test it. We are of course making notes. So how do we go about testing those notes?  First lets write some code then exxplain what exactly is going on to set up the tests:
```
describe('when creating a note', () => {
        let testNote = 'test note';

        beforeEach(() => {
            app.find('FormControl').simulate('change', {
                target: { value: testNote }
            });
        });

        it('updates the test in state', () => {
            console.log(app.state());
        });
    });
```
First we need to create a new suite of tests with the describe funtion. We then define our testNote as a string so that it can be reused throughout our test and store that value in the variable. We now simulate the typing of information into the box.. We need to use the beforeEach() function that will run before each it block. We simulate the change with the .simulare() function that fires the start of the function by giving the target an object to test. We need to make sure first that our state changes with the update in value. we need t consolelog the possible change to make sure we are caturing some information. You should get something similar to this in the terminal { text: 'test note', notes: [] }. If not check all your code up to this point because we will get deeper into testing of state soon. 

Step 7: Now we need to add some code to describe this state change and confirm it is stored to do this we write some more cod:
```
    it('updates the test in state', () => {
    expect(app.state().text).toEqual(testNote);
    });
    describe('and submitting the new note', () => {
            beforeEach(() => {
             app.find('.btn').at(0).simulate('click');
             });
            it('adds the new note to state', () => {
            // console.log(app.state());
               expect(app.state().notes[0].text).toEqual(testNote);
            });
```
Similar to how we tested if the submit button is recieving a value, we now check to see if the state is being affected by this change in value. To do this we again run it against our master variable testNote. We then make sure after we simulate the clicking of the button with the predetermined variable that the new updated state does in fact match this. The test should pass and iff it doesn't make sure you are changing the coreect areas, respectively.

Step 8: We now need to record this same information for the button that is responsible for clearing the cookie and all the respective notes. To do that we continue with our existing code:
```
describe('and clicking the clear button', () => {
                beforeEach(() => {
                    app.find('.btn').at(1).simulate('click');
                });
                it('clears the note in state', () => {
                   // console.log(app.state());
                    expect(app.state().notes).toEqual([]);
                });
            });
        });
```
By now you can see all the patterns are very similar, especially to the create note test, except that this time we are testing to see if the notes array is empty. We are simulating this before every click. We now have the diffcult test that needs to test whether we are adding a new note to the state and if now we are mounting the component.

Step 9: We now have to remount the component to check the hook. It sounds crazy but write this and I will explain. Place right below our add new note to the state describe function:
```
describe('remounting the component', () => {
                let app2;

                beforeEach(() => {
                    app2 = mount(<App />);
                });
                it('reads cookies', () => {
                    console.log(app2.state());
                });
            });
```
So what we are first doing is creating a variable to live in this state and the best way to describe this is to think of it as a completely separate app from what we are curretly running. If you think about it this way we are in effect reloading everyhting a second time. This should be what you get from the console
```
{ text: '',
notes: [ { text: 'test note' }, { text: 'test note' } ] }.
```
Now we have to do some more changes in order to stop this doubling effect you see from the console. To do this we are going to have to introduce the... beforeEach() function. This will have the affect of performing a function before the beforeeachfuntion butafter the action. 

Step 10: We already know how to clear the log so now within the describe function that submits a new note we will add a function that theoretically clears the array again:
```
afterEach(() => {
app.find('.btn').at(1).simulate('click');
});
```
You should be getting this from the terminal now:
```
{ text: '', notes: [ { text: 'test note' } ] }
```
This means that we only have one test note and are not doubling up the test. There fore we can now finish our hook test.

Step 11: Now we fix up the end function and test for this text we just saw show up in the terminal:
```
it('reads cookies', () => {
expect(app2.state().notes).toEqual([{ text: testNote }]);
});
```
And there we go we should have 10 passing tests and with it an entire testing suite for our app.
