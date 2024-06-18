# On this file I will write what I have learnt, how to do things and all the process.

# Url for the site

- https://youtube-cloned-and-copied.netlify.app/

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
     Read Here (https://react.dev/learn/manipulating-the-dom-with-refs)

# Let's talk about react-router-dom now.

    - npm i react-router-dom (to install react router dom)
    - you need to create broserrouter at first where you can define all the routes.
    - you can use that as an outlet on your applayout so that the outlet can render the element as you change the router link (Utilize Outlet for Dynamic Rendering:)
    - Wrap your main application component with RouterProvider, providing it with your app's router configuration.

# Why am I using DOM purifier?

    - So, when I was going through the videoPlayer, I got the response iframe as a string on object. At first I tried to embed it directly but it was not working and found that there is a method called dangerouslySetInnerHTML but it can lead to XSS attack.

# What is Cross Site Scripting (XSS)?

    - Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.

# How does using dangeorouslySetInnerHTML can create XSS ?

    - One of the most common types of XSS attacks is a DOM-based XSS attack. When you mutate DOM directly, it becomes easy for an attacker to inject it with data containing malicious JavaScript.
    (https://www.stackhawk.com/blog/react-xss-guide-examples-and-prevention/)

    - To prevent this, you need to purify your DOM, so I am using dompurify package.

    - DOMPurify sanitizes HTML and prevents XSS attacks. You can feed DOMPurify with string full of dirty HTML and it will return a string (unless configured otherwise) with clean HTML. DOMPurify will strip out everything that contains dangerous HTML and thereby prevent XSS attacks and other nastiness. It's also damn bloody fast. We use the technologies the browser provides and turn them into an XSS filter. The faster your browser, the faster DOMPurify will be.

    - I didnot used dompurify but the above content can be used for knowledge purpose.

# Encoding a url

     - In javascript, you can encode the url using the encodeURIComponent(URL). It's is necessary to encode the url ensure that special characters are correctly interpreted and to maintain the reliability, security, and compatibility of the URL.
