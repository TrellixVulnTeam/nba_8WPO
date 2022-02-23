# Front-End Developer Challenge - NBA Directory

The NBA Directory is a simple web app built in Angular 13 that:

1. Lists All NBA Teams
1. Provides a detailed view of a team including Players

### Run the Angular App

In the root directory, run:

- `npm install`
- `npm start`

You can validate the app is up and running by navigating to ``http://localhost:4200``.

There are two RESTful mock endpoints available to you:
- `GET` : `http://localhost:8080/teams/` - Lists a high level view of all the teams.
- `GET` : `http://localhost:8080/players/` - Lists a high level view of all the players in the league.

These mocks are stored in the `app/mock` folder. For this exercise there will be no need to touch this folder.

## Challenges:

1. Improve the page to provide the city & division of the teams. 

- Set a union type on teams property in team-list to render loading message or not

- Use string interpolation to render corresponding city and division beside each team

1. When clicking a team, provide team details including logo and members (players) on the team.

- Use the route provider passed into the constructor of the team-details component to get the teamId off the url params that was passed to the url from the router when clicking the team link.

- Use the teamId to get the team details on load from ngOnInit() with the teamService.getTeamDetails() method

- Update this method in the team service to ensure the http get request is expecting a player array as a type which in turn the service method returns an observable and the team detail component will subscribe to that

- In the team details component subscribe with the typed response

- Change the classes to interfaces because the response is a regular object that cannot be converted into an instance of a class 

- Could also pipe here with map operator if we had to manipulate data

- Clone data in subscriber call back and store on component 

- Render card with team info using string interpolation

- Repeat previous steps for the players on that team, however we manually filter based on the corresponding team ID as the the mock server doesn't have that api endpoint

- (EXTRA) Set a current players and all time players array with a toggle button showing one or the other

- (EXTRA) Include sort capability here (See next challenge for sort explanation)

1. Provide a way to display all players and sort them by height or weight.

- Reuse the players service to get all players and render in  a table

- Use two way data binding with ngModel to render a disabled select option in a dropdown menu

- Use event binding to get the value and pass it to the players service (See players service for low level details) with which uses the JavaScript sort method based on the event target value.

(EXTRA) Because results array is so large added ability for user to choose how many results per page they would like to see & implemented pagination at the bottom based on the number of results they want to see per page that informs them of what page they are on as well as how many pages there are. The component renders the calculated page results defaulting at 10 per page

(ADDITIONAL)

- Provided styling using css custom properties so changing app wide styles becomes easier

- Checked site for keyboard and voice over accessibility

1. Can you think of ways to improve either the front-end or back-end of this application?

Front End:

- More things can be broken into components as the app grows. This would include the team card, maybe have a table component, pagination buttons etc. This would be determined on desired features and what direction the app was going.

- Implement navigation or at least a nicer one (I added a basic home icon as example to a the top bar and made it sticky to demonstrate a VERY BASIC idea of what it could be). Especially as the app get more pages and features with routing.

- Implement lazy loading or skeleton loading as the app gains more images

- Make fully responsive if needed

- Ensure everything is accessible as pp is built out

Back End: 

- Ability to get players on a team by teamId

- Maybe add API end points for pagination on back end instead of loading a giant array to to the front end to break up and display. Worth a discussion on performance if array is huge or ever grew in size

- More info in the api Ex.) Team website link, player photo, player stats etc.
