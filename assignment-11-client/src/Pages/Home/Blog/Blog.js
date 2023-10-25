import React from "react";

const Blog = () => {
  return (
    <div className="w-4/6 mx-auto">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Difference between javascript and nodejs:
        </div>
        <div class="collapse-content">
          <p className="mb-3">
            JavaScript is a simple programming language that runs in any browser
            JavaScript Engine. Whereas Node JS is an interpreter or running
            environment for a JavaScript programming language that holds many
            excesses, it requires libraries that can easily be accessed from
            JavaScript programming for better use.
          </p>
          <p>
            JavaScript is normally used for any client-side activity for one web
            application. An activity can be addressing business validation or
            dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system.
          </p>
          <p>
            For accessing any operating system, specific non-blocking task
            JavaScript has some specific object, but all of them are operating
            system specific. An example is ActiveX Control which is only running
            in Windows. But Node JS is given utility to run some operating
            system specific non-blocking tasks from any JavaScript programming.
            It doesn’t have any operating system specific constant. Node JS is
            very much familiar to create a specific binding with the file system
            and allows the developer to read or sometimes write on disk.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Differences between sql and nosql databases:
        </div>
        <div class="collapse-content">
          <p> The five critical differences between SQL vs NoSQL are:</p>
          <p>
            SQL databases are relational, NoSQL databases are non-relational.
          </p>
          <p>
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
          </p>
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </p>
          <p>
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </p>
          <p>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What is the purpose of jwt and how does it work?
        </div>
        <div class="collapse-content">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p className="my-3">
            In the case of authentication, a non-JWT based token is a string of
            characters that allow the receiver to validate the sender’s
            identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
