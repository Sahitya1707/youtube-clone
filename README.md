# On this file I will write what I have learnt, how to do things and all the process.

# Url for the site

- Will add it after the completion of project

# What is Redux?

    - Redux is a pattern for managing or updating your  application state using events called actions.
     (When and when not to use redux - https://changelog.com/posts/when-and-when-not-to-reach-for-redux  (good article))

    - Redux allows us to write "mutating" logic in reducers but doesn't actually as it uses immer library.
        - Immer library helps us with a immutable state management. Immer allows us to write the code that appears to mutate the state but actually creates a new immutable stores in the behind the scenes.

    - How to create a redux store?
        - Create store by importing configureStore on your application.
        - Now you have create a new slice (importing createSlice) on the new file importing create slice and give it it's new initialValue
        - You can update the value of your state that you have created on your slice through reducers.
        - On you slice the default export is reducers, named export can be actions and slice.
        - Now you have to subscribe to that slices.reduces through reducer in store.
        - Now you have to import provider (App.js for this application) from redux and then wrap your all code to the provider and give it the store value
        - Then import useDispatch to your application. It allows functional components to dispatch actions to redux store. There is also the useSelector hook given by redux which can be used to extract and access data from redux store.

    - What is action.payload and When Should It Be Used?
        - Purpose: action.payload is a property of Redux action objects that carries data necessary to update the state within reducers. It serves as the "payload" of information delivered to the reducer for processing.

        - Usage: It should be used when an action needs to carry data with it to inform reducers about specific changes to the state. For example, when updating a piece of state with a new value, the new value would be passed as the payload of the action.

# Want to Read About ScrollBar postion?

    -  https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively

# DOM manipulation

    - To manipulate the DOM, we can use useRef in React
