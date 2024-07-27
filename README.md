# On this file I will write what I have learnt, how to do things and all the process.

# Url for the site

- https://youtube-clone-by-sahitya.vercel.app/

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

# Detecting click outside of the component in react

    - (you can also find the answer here - https://stackoverflow.com/questions/32553158/detect-click-outside-react-component)
    - To detect clicks outside a specific component in a React application, you can use the useRef and useEffect hooks. First, create a reference to the component using useRef, which allows you to keep track of the component's DOM node. Then, define a function that checks if a click event occurred outside this component by comparing the click target with the component reference. Use the useEffect hook to add an event listener for mousedown events when the component mounts, and ensure to remove this listener when the component unmounts to prevent memory leaks. This way, you can execute custom logic, like closing a dropdown menu or modal, whenever a click outside the component is detected.

# What is lazy loading in react?

    - Lazy loading is a technique in React that allows you to load components, modules, or assets asynchronously, improving the loading time of your applicaiton. Those data is only rendered when visited or scrolled, it can be images or scripts. This helps to load the web page quickly.
    - React provides built in React.lazy() method and suspense component to achieve lazy loading.
    - How we do that then?
        - You need to import (lazy, Suspense) from React;
            - import { lazy, Suspense } from 'react';
        - You can import the component and use it like this.
            - const About = lazy(() => import('./About'));
        - You can use you component inside the Suspense.
            - (  <Suspense fallback={<div>Loading...</div>}>
                <About />
                 </Suspense>    )
        - What is fallback inside the Suspense.
            - Provides a temporary UI element to display during the loading process.
            - Prevents blank screens or unexpected errors while waiting for components or data.

# What is react helmet?

    - React helmet lets us insert metadata into the <head> tag in much the same way we would using standard HTML syntax.
    - React helmet has been deprecated as that led to a few bugs that resulted in memory leaks and poor data integrity. So that has been changed to react helmet async.
    - installation process : npm i react-helmet-async
    -Then, we'll be importing from react-helmet-async are Helmet and HelmetProvider.
    - HelmetProvider wraps the root App component to create context and prevent memory leaks.
    - Helmet is used in page components to implement meta tags, acting like the <head> tag for the page.
    (Read more https://www.freecodecamp.org/news/react-helmet-examples/)

# What is promise.all method?

    - Promise.all is a method in JavaScript that allows you to run multiple promises in parallel and wait for all of them to either resolve or reject. It takes an iterable (such as an array) of promises as input and returns a single promise. This single promise resolves when all of the input promises have resolved, or it rejects when any one of the input promises rejects.
    - Eg: Promise.all(iterable);
    - First Rejection: If any promise in the iterable is rejected, the whole Promise.all() is rejected with the reason of the first rejected promise. Subsequent rejections are ignored.
