iTalkSmart
=====================  
=====================   
“iTalkSmart” is a full-stack web application, which gives the user an opportunity to improve their public speaking skills and their ability to effectively answer interview questions. It is a game with two play modes, ‘interview questions’ or ‘speech topics’.  There is no registration needed to use this application. When the player initiates play a randomizer will grab a question from the database and display it. Upon which, a timer will countdown 15 seconds to allow the user time to contemplate their response. When this time expires a different timer will appear to time the response. This timer will change to green when it reaches 60 seconds, yellow when it reaches 90 seconds, and red when it reaches 120 seconds, as 1-2 minutes is the ideal response time.  
There is an administrative sign area that when authenticated opens input fields, which the owner of the application can add appropriate questions to the database.


v.2.0: will incorporate the users camera on their computer to video record the response for review.   
________________________________  
Technologies used:
* MEAN stack (MongoDB, Express.js, AngularJS, Node.js)
* Passport
* Bootstrap
* CSS3
* Heroku   
_____________________________________________  

  
Dependencies: (npm install the following)  
* angular
* angular-countdown
* angular-route
* bcrypt
* body-parser
* bootstrap
* express
* express-session
* mongoose
* passport
* passport-local
* sweetalert
