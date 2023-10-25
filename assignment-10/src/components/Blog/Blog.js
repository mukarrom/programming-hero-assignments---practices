import React from "react";
import { Accordion } from "react-bootstrap";
import CheckOut from "../CheckOut/CheckOut";

const Blog = () => {
  return (
    <div className="w-75 mx-auto">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is Difference between authorization and authentication?
          </Accordion.Header>
          <Accordion.Body>
            authentication is the process of verifying who someone is, whereas
            authorization is the process of verifying what specific
            applications, files, and data a user has access to. The situation is
            like that of an airline that needs to determine which people can
            come on board.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Google is big secure company, it's services will be secure and
              powerful than other company. With Firebase, it's pretty simple to
              connect and use built-in third-party authentication providers,
              including Google, Facebook, Twitter, among others. And if we want
              to use a pre-built authentication UI, we have it at your disposal
              as well. All of these can save we a significant amount of
              development cost, as we don't need to pay as high as developing
              from scratch.
            </p>
            <p>Some Alternative of google firebase:</p>
            <ol>
              <li>
                <a href="https://parseplatform.org/">Parse</a>. it is a complete
                open-source application stack and backend framework.
              </li>
              <li>
                <a href="https://www.back4app.com">Back4App</a>. it is an open
                source, low code, backend alternative to Firebase.
              </li>
              <li>
                <a href="https://aws.amazon.com/amplify/?nc=sn&loc=0">
                  AWS Amplify
                </a>
                . it is a cloud platform by Amazon.
              </li>
              <li>
                <a href="https://kuzzle.io">Kuzzle</a>. it is another
                open source alternative to Firebase.
              </li>
              <li>
                <a href="https://kuzzle.io">Couchbase</a>. it is an open source, NoSQL document-oriented engagement database.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Firebase is a full package that can help in developing your mobile
              or web applications faster with fewer resources and more
              efficiency. Now, let’s look at some of the services and use of it.
            </p>
            <h6 className="fw-bold">
              There are many services which Firebase provides, Most useful of
              them are:
            </h6>
            <p>
              Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud
              Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
              Links, Remote Config etc.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> 
    </div>
  );
};

export default Blog;
