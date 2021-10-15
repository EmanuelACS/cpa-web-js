# cpa-web-js
Semester3 - Web Programming with Javascript

## Initialize package JSON
Prerequisite: Have node & npm installed.
```
$ npm init
...
...
...
package name: (current) // Enter new name (optional)
version: (current) // Enter new v (optional)
description: // Enter desc
entry point: (current) // Enter entry point i.e "server.js"
test command: 
git repository:
keywords: // Enter keywords (optional) i.e "node.js comp-206 lab1"
author: // Name 
license: (ISC) 
...
...
...
```

## Add Express to the app
```
// Needs to be ran for every project
$ npm install express
const express=require('express') // express config
const app=express()
```


## Run Server
Run normally:
> node path/server.js

Run server with nodemon (dynamic)
> nodemon path/server.js

Prerequisite: have nodemon installed
> npm install -g nodemon

Prerequisites for ejs: 
> npm install ejs
> const ejs=require('ejs') // ejs config
> app.set('view engine', 'ejs')

## Mongo Database
> npm install mongodb