# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Working
1. fetched the data using fetch api and stored it in a array , data was stored according to group
2. created various states like group (to fetch which group user wants to display i.e. status , priority , user ) , displayData(the actual data which we display on our app) 
3. sent setter for display data to navbar from main component and based on button click it will set the display data 
4. this display data is further sent to dashboard from main component which in return display the data on our app
5. icons and data are dynamically changed based on group and its tag
6. for ordering used sorting function to sort the display data and send it back to main component and main component sends it to dashboard to display the data
7. as asked the application should save the user's view state even after page reload, use local storage to store last display data

### screenshots
![img1](./assignment%20images/priority.png)
![img2](./assignment%20images/priorityPriority.png)
![img3](./assignment%20images/Screenshot%202023-11-27%20153936.png)
![img4](./assignment%20images/userTitle.png)

