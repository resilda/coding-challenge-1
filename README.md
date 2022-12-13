This small projects implements a simple image gallery using libraries such as: react (template: Typescript) and redux toolkit while it is integrated with Imgur API.

The main page, displays a simple album gallery where the data are fetched from `https://api.imgur.com/3/gallery/{section}/{sort}/{window}/?showViral=boolean`.

There are new data loaded for each selected `section`, `sort`, `window` and when `showViral` is set to true.

- Sections: are displayed as tags with options: Top, Hot, User. Defaults to "Hot". 
- Sorting Labels: are displayed as a list of elements with options:  Top, Viral, Time, Rising. Defaults to "Viral". These options are loaded only when selected section is "User".
- Window Filters: are also displayed as list of elements with options: Day, Week, Month, Year, All. Defaults to "Day". These options are loaded only when selected section is "Top".
- Show Viral: is displayed as a button that can only be enabled when section is "User". For any other section this button is disabled. 

In the main page there is also a navigation bar, appeared as page header. The user can navigate between About, Contacts and Settings page. These options where added in order to make the landing page as user friendly as possible. 

When clicking on a certain image in the gallery there is a details page opened that displayes: Image selected in a larger size than the one displaying in the gallery. Extra additional details such as: title, description, upVotes, downVotes and score. The user can navigate through different images in the gallery and everytime an image is clicked the data displayed in "Details" page is specifically connected to the image chosen.

Regarding the libraries used in the application, I have chosen a mix:
- react-router-dom: to navigate through different application pages.
- redux-toolkit: state management and API requests. 
- Tailwind: styling library to create and style the components, based on a simple design.
- classname library: used for styling components based on ceratin conditions through the code. 
- Additional react hooks used.

There is also a `prettier` file setup, in order to have the code evenly formatted throught the files.



