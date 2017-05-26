# Technology

The following is a comprehensive implementation breakdown of UPshift's features. The app was created with React/Redux on the front-end, and Rails/ The app was developed using Rails/PostgreSQL on the backend and React/Redux on the front-end.

## Car Search

One of the primary features of UPshift is the search form, where users are given the ability to search and filter through all cars in the database to whittle down the results to only see cars that match their query.

On the front-end, the user submits their query with any number of parameters (only match cars that are below $50,000, only match cars that are convertibles, or both). Upon any alteration of the query, the request is sent to the backend, which initiates a SQL query and renders JSON to give back to the front-end to amend the index view's `CarIndexItem`s. Each `CarIndexItem` includes a link to the show page and the ability to favorite or unfavorite a car.

## Car Show

On the index page, the user can click on any `CarIndexItem` and be taken to that particular show page. A request is made to the database to retrieve the data of a car by matching the id, and the JSON returns to the front-end to help populate the `CarShow` component. Each `CarShow` component includes, beyond the JSON information, the ability to favorite the car and to schedule a test drive.

## Favoriting

Users have the ability to favorite or unfavorite a car, in the index view as well as on the show page. The button has an onClick event listener which fires a request to the backend to either create (in the `Favorites` join table) or remove the favorite, and returns JSON back to the front-end of the car.

In addition to adding/removing favorites, there is a `Favorite` component that the user can view, which shows all cars that have been favorited by that user. Unfavoriting a car in the `Favorite` component immediately triggers a re-render and modifies the view to show the remaining favorites.

## Test Drive Scheduling

In addition to favoriting cars, users also have the ability to schedule test drives. In the show page of a car, the user may use the integrated day picker to select a day to book. So long as the car is available on that day (the Teslas tend to go *very* quickly). Upon successful booking, the conditionally-rendered `TestDriveIndex` dropdown is now amended to show all scheduled drives. The `TestDriveIndex` shows information on each drive and the ability to cancel within the view, deleting the record from the database and removing it from the store.
