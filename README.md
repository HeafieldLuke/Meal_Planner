# Meal_Planner

## Motivation

As a college student, planning weekly meals can be a challenge on top of
all of the schoolwork and extra-curriculars. Compiling a shopping list
can be even more time-consuming. This project aims to build a website for
people to share recipes, and allow users to generate a meal plan and shopping list with these recipes.

## Getting Started Instructions

### Software

Make sure you have node.js installed on your computer.

You can check this by running the command node -v

The link can be found [here](https://nodejs.org/en/download/)

### Environment Variables

Before you can begin running the project, you must create a .env file in the root directory of the project. Inside the .env file paste the following:

```
PORT=8080
```

You also need to get database access. Since I am making this public I will not be including this line.

### Running the project

To start the server, you need to install the npm dependencies using the following command: 

```
cd ~/Meal_Planner_COMP4560 && npm install
```
You can then run the following command to start the server.

```
npm start
```

You should get the following line running in your console:

```
Server running at http://127.0.0.1:8080/

###### MONGO DB Connected ######
```

Once the server is running, you can view the website by opening up a browser and typing in the following url:

```
http://localhost:3000/
```

## Contributing to the project

### Tracking Progress

To keep track of progress, create an issue on the github issues section.
When you are finished with the task, link the pull request you created to that issue. If relevant, add some tests to the project so we can ensure functionality. You can add these test in the ```__tests__``` folder in the root directory

### Documentation

* Design Pattern we are using: [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Express.js Documentation](https://expressjs.com/en/guide/routing.html)
* HTML Templating Language: [EJS](https://ejs.co/)


