# Title: Express Handlebars Eat-Da-Burger App

### Description

   This application follows an MVC design pattern. See directory structure below. 
   
   "Eat-Da-Burger" is a restaurant application that has a default list of burger options to choose from. The user is allowed to submit a different burger name which will then append to the burger options list. If the user chooses to eat this burger then user can select the burger to be added to the devour list. If at any point the user changes their mind, they can remove the burger from the devour list, it will then be appended back to the options list. 

### Table of Contents 

  * [Installation](#installation)
 
  * [Usage](#usage)

  * [Directory](#directory structure)
  
  * [License](#license)

  * [Badge](#badge)
  
  * [Contributors](#contributors)

### Installation:
        
   MySQL               | Open-source relational database management system 
   Node.js             | Cross-platform JavaScript runtime environment used for backend developing
   Node Dependencies   | express, express-handlebars, mysql, method-override, path 
   Heroku              | Cloud platform that enables developers to build, run and operate applications

### Usage:
        
   This application will allow users to choose burgers from a default options list. User can also add a burger of choice to the options or devour list

#### Directory structure folliwng the MVC pattern
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

### License:
   ![MIT License] {https://img.shields.io/badge/license-MIT-blue.svg}
  
#### Badge: 
   ![MIT LIcense](https://img.shields.io/badge/License%20-MIT-red)
  
#### Contributors:
   Christal Vigil Full Stack 
   DU Bootcamp (helper functions only)
