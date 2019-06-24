# Greenpeace - Save the Planet

Node.js web app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ heroku login
$ heroku git:clone -a gp-protecttheoceans
$ cd gp-protecttheoceans
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying changes 

Make some changes to the code you just cloned and deploy them to Heroku using Git.


```sh
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

Changes will be automatically pull from the prod server. It should be live on [gp-protecttheoceans.herokuapp.com](http://gp-protecttheoceans.herokuapp.com/). 
