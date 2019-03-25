# AppJot

********************************************************* APPJOT **********************************************************


APPJOT is a minimalistic web application developed with the sole aim to serve as a one stop solution 
for developers to jot down ideas for their future web applications/projects as soon as one clicks to their mind so that no
prospective interesting web project gets missed.

----------------------------------------------------------------------------------------------------------------------
TECHNOLOGIES USED :-
-----------------------------------------------------------------------------------------------------------------------

FRONTEND :- HTML, CSS, Javascript, Bootstrap
BACKEND  :- Node js, MongoDB, Npm etc.

---------------------------------------------------------------------------------------------------------------------
SOFTWARE/ TOOLS USED :-
----------------------------------------------------------------------------------------------------------------------

Text Editor - Visual Studio code
Browser - Google Chrome
Deployment - Heroku
Version Control - Github
Database-as-a-service for MongoDB :- MongoDB Atlas

-----------------------------------------------------------------------------------------------------------------------
WEBSITE WITHOUT ANY SETUP :-
-----------------------------------------------------------------------------------------------------------------------

To use the website online without having to setup anything visit site : http://appjot.herokuapp.com/

------------------------------------------------------------------------------------------------------------------------
LOCAL ENVIRONMENT SETUP :-
-------------------------------------------------------------------------------------------------------------------------

To run this application on your local environment follow the below steps :-

-------------------------------------------------------------------------------------------------------------------------
PREREQUISITES :-
--------------------------------------------------------------------------------------------------------------------------

Be sure you have the following installed on your development machine:

    Node >= 9.11.1
    MongoDB >= 3.6

---------------------------------------------------------------------------------------------------------------------------
CONFIGURING DATABASE :-
---------------------------------------------------------------------------------------------------------------------------

Since we have used MongoDB Atlas which is nothing but Database-as-a-service for MongoDB so we don't have to take the pain of establishing 
database locally rather all you need is an internet connection for using the database and just do the following :-

Make sure the database link is :- 'mongodb+srv://darkhorse:darkhorse@appjot-prod-p3tj9.mongodb.net/test?retryWrites=true'  as an argumnet to mongoose.connect
i.e finally it should look like :- mongoose.connect('mongodb+srv://darkhorse:darkhorse@appjot-prod-p3tj9.mongodb.net/test?retryWrites=true',{
    useNewUrlParser : true
})

---------------------------------------------------------------------------------------------------------------------------
QUICKSTART :-
----------------------------------------------------------------------------------------------------------------------------

1. Open the terminal/cmd and switch to the project directory.

2. Install the required node modules/dependencies by running the command "npm install".

3. Run the project by running the start script from terminal/cmd by using command "npm start".

4. Now, open in browser "localhost:<port no>" with port no as mentioned in your code or as indicated by the message received 
   stating at what port server is listening or is being started.

-----------------------------------------------------------------------------------------------------------------------------
URLs :-
------------------------------------------------------------------------------------------------------------------------------

1. Home page : /

2. Login page : /users/login

3. Signup page : /users/register

4. Ideas : /ideas

5. Add Idea : /ideas/add

6. Edit Idea : /ideas/edit/<idea id>

7. About : /about

8. Logout : /users/logout

--------------------------------------------------------------------------------------------------------------------------------
