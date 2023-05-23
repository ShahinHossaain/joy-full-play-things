import { useRef } from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const ref = useRef();
  return (
    <div className="mt-10">
      <Helmet>
        <title>Joy Full Play Things | Blog</title>
      </Helmet>
      <div ref={ref}>
        <p className="text-center text-3xl md:text-5xl font-sans font-bold">
          <span className="text-secondary">F</span>AQ
        </p>
        <div className="card shadow-lg p-4 md:p-10 m-4 md:m-10 bg-gray-700 hover:bg-gray-600 ">
          <p className="text-secondary text-lg md:text-xl font-mono font-medium mb-4">
            1)) What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p>
            An access token and a refresh token are commonly used in
            authentication and authorization systems. Here is an overview of
            what they are, how they work, and where they should be stored on the
            client-side: <br />
            <strong>Access Token:</strong> An access token is a credential that
            represents the authorization to access certain resources on behalf
            of a user or an application. It is usually issued by an
            authentication server (such as an OAuth provider) after a user
            successfully logs in or grants permission to an application. The
            access token is typically a string of characters that contains
            information about the user or application and permissions granted.
            It has a limited lifespan (expiration time) and is used to
            authenticate subsequent API requests. <br />
            <strong>Refresh Token:</strong>A refresh token is a long-lived
            credential used to obtain a new access token when the original one
            expires. It is also issued by the authentication server along with
            the access token. The refresh token is typically securely stored by
            the client-side application and sent to the server when needed. It
            is used to request a new access token without requiring the user to
            re-authenticate. Refresh tokens have a longer lifespan than access
            tokens and can be revoked by the authentication server if necessary.
            <br />
            <strong>Storage on the Client-side:</strong>Access tokens should be
            stored securely on the client-side to prevent unauthorized access.
            They should not be stored in browser cookies or local storage, as
            they are vulnerable to cross-site scripting (XSS) attacks. The
            recommended approach is to store the access token in an HTTP-only
            cookie, which provides additional security by preventing client-side
            JavaScript access. Alternatively, you can use browser technologies
            like the Web Storage API with sessionStorage, which stores data only
            for the duration of the browser session. Refresh tokens should be
            stored in a secure manner, such as an HTTP-only cookie or a secure
            server-side session storage. Storing refresh tokens in local storage
            or other client-side storage mechanisms increases the risk of them
            being exposed to malicious actors.
          </p>
        </div>
        <div className="card shadow-lg p-4 md:p-10 m-4 md:m-10 bg-gray-700 hover:bg-gray-600">
          <p className="text-secondary text-lg md:text-xl font-mono font-medium mb-4">
            2)) Compare SQL and NoSQL databases?
          </p>
          <p>
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
            different types of database management systems with distinct
            characteristics. Here are some points of comparison between SQL and
            NoSQL databases:
            <strong>Data Model:</strong>SQL databases are based on the
            relational data model, where data is organized into tables with
            predefined schemas, and relationships between tables are established
            using keys. NoSQL databases employ various data models such as
            key-value pairs, document-oriented, columnar, or graph-based. They
            offer more flexibility in handling unstructured or semi-structured
            data.
            <strong>Scalability:</strong>SQL databases typically scale
            vertically, meaning they require more powerful hardware to handle
            increasing data loads. They are well-suited for applications with
            structured data and fixed schemas. NoSQL databases are designed to
            scale horizontally, allowing for distributed storage across multiple
            nodes. They can handle large amounts of data and high-traffic
            applications more effectively.
            <strong>Schema:</strong>SQL databases enforce a predefined schema,
            requiring a well-defined structure for the data before it can be
            inserted. Altering the schema can be complex and may require
            downtime. NoSQL databases are schema-less, allowing for flexible and
            dynamic data structures. Changes in the data schema can be made
            on-the-fly without downtime.
          </p>
        </div>
        <div className="card shadow-lg p-4 md:p-10 m-4 md:m-10 bg-gray-700 hover:bg-gray-600">
          <p className="text-secondary text-lg md:text-xl font-mono font-medium mb-4">
            3))What is express js? What is Nest JS (google it)?
          </p>
          <p>
            Express.js is a popular web application framework for Node.js. It
            provides a minimalistic and flexible set of features to build web
            applications and APIs. Express.js is known for its simplicity,
            unopinionated design, and ease of use. It allows developers to
            define routes, handle HTTP requests and responses, and implement
            middleware for various functionalities such as authentication, error
            handling, and request processing. Express.js has a large ecosystem
            of middleware and plugins, making it highly extensible and adaptable
            to different use cases. Nest.js is a progressive TypeScript-based
            web application framework for building scalable and maintainable
            server-side applications. It is built on top of Express.js and
            heavily inspired by Angular, borrowing concepts such as modules,
            controllers, services, and decorators. Nest.js provides a structured
            and modular architecture that promotes code reusability and
            maintainability. It leverages decorators and TypeScript decorators
            to define routes, handle HTTP requests, and inject dependencies.
            Nest.js also supports features like data validation, dependency
            injection, WebSocket handling, and more. It aims to provide a solid
            foundation for enterprise-grade applications and promotes the use of
            modern JavaScript and TypeScript best practices.
          </p>
        </div>
        <div className="card shadow-lg p-4 md:p-10 m-4 md:m-10 bg-gray-700 hover:bg-gray-600">
          <p className="text-secondary text-lg md:text-xl font-mono font-medium mb-4">
            4)) What is MongoDB aggregate and how does it work (google it)?
          </p>
          <p>
            MongoDB is Aggregation Framework is a powerful feature that allows
            you to perform advanced data processing and analysis operations on
            MongoDB collections. It provides a flexible and efficient way to
            aggregate, transform, and analyze data within the database. The
            Aggregation Framework works by processing data through a pipeline of
            stages, where each stage performs a specific operation on the data.
            The stages are applied sequentially, with the output of one stage
            serving as the input for the next stage. The result of the
            aggregation is returned as a cursor or an array of documents. Here
            is a brief overview of how the Aggregation Framework works: Matching
            Stage: The first stage in the pipeline is usually the $match stage,
            where you can filter the documents based on specific criteria,
            similar to the find operation. Projection Stage: The $project stage
            allows you to reshape the documents and include only the fields you
            need. You can rename fields, create calculated fields, or exclude
            fields from the output. Grouping Stage: The $group stage enables you
            to group documents together based on a specific key or keys and
            perform aggregate calculations on grouped data. You can use various
            aggregation operators like $sum, $avg, $min, $max, etc. to calculate
            aggregate values. Filtering Stage: The $match stage can be used
            again after the grouping stage to further filter the grouped data
            based on additional criteria. Sorting Stage: The $sort stage allows
            you to sort the documents based on one or more fields, either in
            ascending or descending order. Limiting Stage: The $limit stage can
            be used to limit the number of documents returned by the aggregation
            pipeline. Skip Stage: The $skip stage allows you to skip a specified
            number of documents in the pipeline. Joining Stage: The $lookup
            stage enables you to perform a left outer join between two
            collections and retrieve related data from the joined collection.
            Unwinding Stage: The $unwind stage is used to deconstruct an array
            field from the input documents, creating a new document for each
            element of the array. These are just some of the commonly used
            stages in the Aggregation Framework. MongoDB provides a wide range
            of stages and aggregation operators to handle various data
            manipulation and analysis scenarios. By combining multiple stages in
            the pipeline, you can perform complex data transformations, perform
            calculations, generate reports, and gain insights from your MongoDB
            data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
