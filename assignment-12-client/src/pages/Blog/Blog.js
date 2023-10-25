import React from "react";

const Blog = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mt-12 mx-auto min-h-screen">
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div className="collapse-content">
          <p>
            optimize the performance of a React application, including
            pre-optimization techniques. These include:
          </p>
          <ul className="list-disc px-4">
            <li>Keeping component state local where necessary</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Windowing or list virtualization in React</li>
            <li>Lazy loading images in React</li>
          </ul>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <ul className="list-disc px-4">
            <li>
              <strong>Local (UI) state</strong> – Local state is data we manage
              in one or another component. Local state is most often managed in
              React using the useState hook.
            </li>
            <li>
              <strong>Global (UI) state</strong> – Global state is data we
              manage across multiple components. Global state is necessary when
              we want to get and update data anywhere in our app, or in multiple
              components at least.
            </li>
            <li>
              <strong>Server state</strong> – Data that comes from an external
              server that must be integrated with our UI state. Server state is
              a simple concept, but can be hard to manage alongside all of our
              local and global UI state.
            </li>
            <li>
              <strong>URL state</strong> – Data that exists on our URLs,
              including the pathname and query parameters. URL state is often
              missing as a category of state, but it is an important one.
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </div>
        <div className="collapse-content">
          <p>
            setState() enqueues changes to the component state and tells React
            that this component and its children need to be re-rendered with the
            updated state. This is the primary method you use to update the user
            interface in response to event handlers and server responses.
          </p>
          <p>
            Another important reason is using setState returns a new state and
            does not mutate the original state, which can be passed to a pure
            component. Since pure component only does shallow rendering of
            objects if the new state is not returned the component will not re
            render.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </div>
        <div className="collapse-content">
          <p>
            If we want, we can implement all filtering and search functions
            using loops as well. First, loop in this array. than use filter()
            function to find the products include text in the search input. we
            can use toUpperCase function to ignore case sensetive.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            UNIT TESTING is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
