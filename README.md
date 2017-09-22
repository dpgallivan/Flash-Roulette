# Flash-Roulette
A game of Flash Roulette. 

This application lets the user play a roulette simulation game in which the roulette game is accurately recreated using javascript.

Using MySQL, we can create users that can later be logged into. User names are unique so there can't be more than one user with the same name. Each user also has a unique id which is used to route to their page. In the future, we would like to add user authentification in which the page remembers which user and you can't go to other user's pages freely. We could even have it so the users can restyle their pages.

![Home](/public/images/Roulette-Home.PNG)


On the user page, a roulette board is displayed as well as user name, current bank, different valued chips and an input field to add more money. The chips are draggable and when placed on the board, it will be counted as a bet (Drag back to its original div to reset). Use the console log to accurately see what you are betting on. If a user tries to bet more than the money they have, it will not work. Later, we could add a div that list bets currently being made on the side. 

![Board](/public/images/Roulette-Board.PNG)
![UserPanel](/public/images/Roulette-User-Interface.PNG)


The current types of bets accepted: Straight Up, Split, Corner, Row(Column), Twelve, Half, Even/Odd, Red/Black
Payouts are assigned to each type of bet as well.

![Use](/public/images/Roulette-Board-Use.PNG)


When the user is ready, they will press spin for the server to take in their bets and run the roulette. The bets are stored in another table on the same database. Depending on the results, the user's money will update on the database and on the page. It will also prepend bet information under the user dashboard.

![Change](/public/images/Roulette-User-Change.PNG)
![History](/public/images/Roulette-History.PNG)


The show statistics button will route to a page that will show how often a number has been spun between all users. In the future, I would like to add different searches for data like how often a color has been spun, stats for just the user specifically, etc.

![Stats](/public/images/Roulette-Stats.PNG)


I also wanted to include a multiplayer aspect to the game. For example, there will be a roulette that spins a set increment of time and various users can bet on this one roulette. When the time has come, results will be calculated and the bets of all users will be displayed.
