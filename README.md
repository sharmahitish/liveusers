# Liveusers Assignment-1
Build a presence Service, Similar to that of google docs which shows people that are currently being a particular docs


Publish Link :- 
https://x0rctjpf0mchkoywii14fq-on.drv.tw/www.liveuserassignment.com/LiveUserScripts.html

Run Code :- 
LiveUserScripts.html is the base file 

Software Description :-
Build a presence service,similar to that of google docs, which shows people
are currently viewing a particular doc.
● It is divided into three views :- SignIn, Register, Dashboard
SignIn :- Here the person will SignIn, if the user has an account.
Register :- Person who doesn’t have an account will have to first
go to the Register page where the user needs to make an account.
Dashboard :- Dashboard is the view where a user having an
account will reach to this successful screen. Moreover it also provides
details about active users and when users hover over the avatar can get
user email in alert.

Software Used :-
Visual Studio Code (Integrated Development Environment ) is used to write
the code

● Front - end : - Front- end use is HTML , CSS, JAVASCRIPT.
● Back - end :- Firebase (Real-Time Database) .
➔ Authentication :- Here the number of users who registered mails
their authentication mail is shown.
➔ Firebase Realtime Database :- Here the number of users who
registered, their username, mail ,password and active / inactive status is
stored and another time the same user tries to SignIn it will move the user
to the Dashboard page.
Validation Implemented :-

Sign :-
1. Empty Validation
2. Email Validation
3. Password at least 6 characters
4. Already Exist Account

Registration :-
1) Empty Validation
2) Email Validation
3) Password should be of at least 6 characters
4) Account does not exists
5) Empty fields

Detail Description How to Operate Live Users
Project
● Errors Check :- Error checks are made on basis
If person doesn't have an account :
➔ User will have to click on the SignUp button ,if the user tries to
SignIn it will pop-up an error message to SignUp first .
➔ It will do null check and email validation and password with
minimum length of 6.
If person does have an account :
➔ When a user fills details for SignIn, it is first checked whether it is
present in Firebase Authentication and then checks the email and null
check validation and if all creditails are present then the user is allowed to
enter the next screen.

Email’s tested for signIn :-
1. Email : hitish@gmail.com  password:  welcome
2. Email : hitish2@gmail.com  password:  welcome
3. Email : hitish4@gmail.com  password: welcome
4. Email : hitish6@gmail.com password: welcome

How i tested it!!!
Firstly i opened the url in four different tabs once is login successfully it shows me the total number of users, and when i hover at a particular user it gives me pop up with the user email address. There is a Present button when i click it ,then it gives me total number of active users present in my Firebase Database.

Software Used (All are Open source) :-
1) Firebase Database}
{Stored data 1 GiB Document reads 50,000 per day Document writes
20,000 per day Document deletes 20,000 per day Network egress 10
GiB per month}
2) Javascript
3) CSS
4) HTML
5) Google Fonts
6) Google drive hosting
7) Sweet Alert.










Name : Hitish Sharma

