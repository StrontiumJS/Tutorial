# Example 1 - Hello World

This example shows a very simple API which contains a single endpoint.

## Walkthrough

### 1. package.json

The first thing to create in any NodeJS project is the package.json file. This file lists basic information about your project such as it's name and version as well as all the dependencies required for it to run.

NPM provides the `npm init` command to walk you through building a package.json file for your project. Alternatively more experienced users can handwrite the file with the necessary fields. 

In this example we provide a package.json with the minimum requirements to get the application to function. Later examples include more advanced package.json files with additional functionality.

Before moving on it's a good idea to run `npm install` so that all of the dependencies are installed. This will also enable TypeScript intelligence in IDEs that support it making the code much easier to interact with.

### 2. tsconfig.json

The tsconfig file tells TypeScript about the environment which it is compiling for as well as providing basic information about which files require compilation.

Typescript will use this file to compile our application when it is time to run it.

### 3. src/GreetingController.ts

The GreetingController is responsible for implementing the simple logic of our endpoint.

The endpoint is designed to accept a single optional query parameter: 'name'. Depending on the value of name it will respond with a simple message welcoming the user to Strontium.

The first thing to notice is that GreetingController extends the EndpointController class provided by Strontium. This class handles the underlying interaction with the web server and provides a easy structure to work in for your controllers. We'll talk more about the EndpointController class in a future tutorial.

As you can see controllers have three key properties: An input validator, an output validator and a handle function. Strontium will run the input to an EndpointController through it's input validator before calling handle. The return value of the handle function will then be passed through the output validator before being returned to the client.

In this example we use Strontium Validators to define the 'name' query parameter as either a string or undefined (i.e optional). For those following along in a TypeScript enabled editor such as Visual Studio Code or WebStorm you may notice that the input object provided to the handle function is in fact typed based on the validators set in the input validator. This is one of the ways Strontium helps to provide strong type guarentees without explicit types and can be leveraged in the future to make code easier to reason about.

Finally we implement our greeter in the handle function using a simple template string. If the query parameter is not provided, or is empty, then we will default to 'there' so that our shy users can still feel welcome!

### 4. src/index.ts

The index file defines a very simple Runtime for the application. We'll talk about the 'Runtime' class again in a later tutorial but for now it can simply be seen as a container for your application server.

We define two components for our simple application server, a ConsoleLogger and a FastifyServer. 

The ConsoleLogger provides a simple output to the terminal where we run our application. In later tutorials we will look at how more complex applications can use Loggers to send logs to remote services, log aggregators or error tracking software.

The FastifyServer provides a HTTP server based on the blazing fast Fastify web server. We pass in a RouteMap, which in this case has a single route. We define the route for our endpoint as a GET request to '/greet' and connect this to our GreetingController.

### 5. Testing the Application

You can start the application by running `npx ts-node src/index.ts`.

This will start the web server on port 8080. You can now reach the endpoint in your browser at http://localhost:8080/greet

To test if our controller is working we can also add a query parameter and see the name in our message change accordingly. For example http://localhost:8080/greet?name=Alex.

## Next Steps

This tutorial covered the most basic building blocks of a Strontium application and provided a quick glimpse of Endpoints and Validators. 

In the next tutorial we will look at how we can add a database to our application to store the names of people using our greeter service.