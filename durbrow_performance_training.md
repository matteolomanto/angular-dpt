# Durbrow Performance Training



## Overview

This document will describe the technologies, architecture and approach involved in building the DPT web application.




## Architecture

We've migrated over from the former architecture to the current for several reasons:

- Sails.js, while very promising, is still a bit immature in it's development stages. Documentation is not quite good enough for production projects. AngularJS on the other hand, is a well known, well documented framework created by Google with tons of resources available online.
- Sails.js is a traditional client-server framework, meaning any updates made by the user are sent to the server, and the server will then render a new page and send it back to the client. While there are workarounds, the out-of-the-box experience is a bit dated and would not be as responsive as using a SPA (Single Page Application) framework like Angular.JS.
- We needed to assemble several discrete, separate components and get them to 'play nice' with each other.  With a comprehensive client-side framework like AngularJS, almost everything we need to create this application is available out of the box.
- Instead of worrying about creating own backend and the authentication/security concerns that come with it, we're leveraging a well-received, well-supported BaaS (backend-as-a-service) called FireBase.  This will allow us to spend more time on the business logic instead of ancillary technical implementation issues.  We're currently using the free plan, but if for some reason we want to go with our own backend down the line, we can do that once we've got a proven client-side application working.

## Client-Management Solution

MindBody is out due to confusing backend for trainers, inability to have separate billing service, and outdated API.

Other solutions available:

[Front Desk](https://www.frontdeskhq.com/) - read-only API available.

[TeamUp](https://goteamup.com/en-us/) - API available on case-by-case basis.

	Hi Dan,
 
	From the description you've given it seems like we could be a good fit. The new version of the teamup api has just been released, and it can handle most data functionality (certainly as you have described).

	Are you planning to use any other systems or is everything custom for the client?

	A call would be great - or we can set something up with one of our development team next week if that is convenient. I can help directly with anything product related.

	Have a good weekend.

	Tim
	
	Hi Tim,

 	I'd be happy to setup a time to discuss. Ultimately, we're looking for a service that handles the usual "backend stuff", primarily client management (scheduling/attendance, basic demographic info, reporting) to work off of. We want to leverage your service to pull in existing client/trainer data and augment it on our end with the gym's program specifics (accountability/follow-up, nutrition info, biometric tracking, etc).

	Let me know if you'd like to discuss via phone call, or you can just respond to this email.

	Thanks so much,

	Dan



### Former

Architecture         | Technology    
-------------------  | ------------- 
MVC                  | SailsJS
Templates            | Embedded JavaScript (ejs)
Module Communication | socket.io
DB/ORM               | mongoDB/Waterline (provided by SailsJS)
Data Abstraction     | ---
App Structure        | SailsJS 
Dependency Management| RequireJS
Widgets/Components   | ThemeForest responsive admin
CSS UI Frameworks    | Bootstrap (consider material design for Angular?)

### Current 

Architecture         | Technology    
-------------------  | ------------- 
MV*                  | AngularJS 
Templates            | MVVM from AngularJS
Module Communication | AngularJS - $rootScope.$broadcast
DB/ORM               | Firebase
Data Abstraction     | 
App Structure        | [ngSeed](https://github.com/angular/angular-seed) 
Dependency Management| AngularJS Dependency Injection
Widgets/Components   | [Square Dashboard](http://iarouse.com/dist-square/v1.3/index.html#/dashboard)
CSS UI Frameworks    | Bootstrap (consider material design for Angular?)


## Approach

1. API-first development
2. Agile software development practices (loosely)


## Software Management Tools

- Version Control/Ticketing: GitHub
- Task Manager: Trello
- Code Quality/Complexity: Plato


## Foundational Specifications

Foundational Spec | Technology
----------------- | ----------
Devices			  | Desktop (phase 1), Mobile (phase 2)
OS/Browsers       | Evergreen browsers (Chrome, Safari, Firefox), IE10+
[Offline First](https://developer.chrome.com/apps/offline_apps)     | No

## Testing Methodologies

TBD

- Karma
- Protractor


## Miscellaneous
http://developer.telerik.com/featured/planning-front-end-javascript-application/?utm_source=javascriptweekly&utm_medium=email

