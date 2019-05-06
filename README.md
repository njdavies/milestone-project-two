# Interactive Frontend Development

I was given the following brief to create a single page application that relies heavily on one or more APIs:

> Create a site that calls on the Google Maps API and/or the Google Places API (or similar) to allow users to search for their next 
holiday destination. 
>
> You'll want to help your users:
> * Select a destination city
> * Find accommodation
> * Find tourist attractions 
> * Find bars and restaurants	
> 
> Provide search results in a manner that is visually appealing for your user (by drawing on the skills you have learned in User-Centric Frontend 
Development)
> 

As the site deals with picking holiday destinations and a happy/enjoyable experience I went with a bright background colour and overall aesthetic to make it as visually pleasing to look at as possible. I also kept the interface simplistic as I wanted the site to be easy to navigate through and the features self-intuitive.

---

## UX

### User Stories

Using the brief given to me, I created [User Stories](https://pinup.com/HyR8n42V4 "User Stories") in a tool called Pinup. This allowed
me to break down each feature required within the website.

### Mock Ups

I then used a tool called Pencil to create [wireframes](https://github.com/njdavies/milestone-project-two/tree/master/wireframes) for the site. This allowed me to plan out the content
functionality on each page, taking into account the user stories I had put together. 

---

## Features

### Existing Features

* 'Where to?' dropdown box - Allows users to select a destination city for their next holiday. Upon making a selection the Google Map will re-initialise and centre over the chosen city.

* Select attraction radio buttons - Allows users to search for nearby accommodation in their chosen city, along with other tourist attractions and choices for eating and/or drinking. 

* Map markers - When the user searches for an attraction, markers are dropped onto the map showing their location. The markers use custom icons, providing a visual representation of 
the chosen attraction. 

* Map infowindows - When clicking on a map marker the name of the attraction is brought up, along with an address and a user rating, allowing the user to make an informed decision
regarding whether they would like to go there.

### Features I would like to have implemented

I would like to have provided more information to the user when selecting a map marker. In it's current state the information the infowindows provide is somewhat basic in this regard. My original plan was to return additional information such as a telephone number and website URL. This information is obtainable via a Place ID using a Place Details request.

Early on I identified that there was a limit on queries per second (QPS) I was entitled to when using Place Details. This capped out at 10 and meant that the
nearby search using the Places API would never complete.  I spent a considerable amount of time researching how to get around this, trawling through the official documentation and also multiple pages on the StackOverflow website. 

Although there was information regarding throttling the number of QPS, or incorporating the use of databases in the site to store the Place IDs of every nearby search result, these options were well outside the scope of the project, and in the case of databases, beyond my own level of understanding.

In the end it became apparent that using Place Details to run multiple search requests in the way I wanted was not how the tool was intended to be used. Therefore, I decided to drop this piece of functionality from the site and proceed as is. However, I am satisfied that the site meets the requirements set out in the project remit.

---

## Technologies Used

In designing and creating this website I have utilised the following tools, languages and frameworks:

* [Pinup](https://pinup.com/HyR8n42V4) - As user stories are usually written on sticky notes I decided to use this tool to replicate the same process digitally.
* [Pencil](https://pencil.evolus.vn/) - I wanted to put together mock-ups of the website before I started to code anything. This simple but effective tool let me create wireframes very quickly, and aided in visualising how the website would look from the beginning of development.
* [HTML5](https://en.wikipedia.org/wiki/HTML5) - I used this language to build the basic structure and elements of the website.
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - This language was used to apply styling to the HTML structure, and described how the elements should be displayed.
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) - This language allowed me to make the site interactive by incorporating buttons and applying logic depending on user choices.
* [Bootstrap 4](https://getbootstrap.com/) - I utilised the Bootstrap framework which allowed me to quickly incorporate templates for dropdown menus and radio buttons. I also made extensive use of the framework's grid system, which allowed me to make the site fully responsive across different viewports
and web browsers.
* [Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed) - In order to achieve a professional looking feel to the text used in the site I utilised the Google Fonts library to include the Sans Semi Condensed font.
* [Google Maps/Places API](https://cloud.google.com/maps-platform/) - These APIs were used to create a map in my site and add the functionality to perform nearby searches.

---

## Testing

### Automated Testing

In order to rigorously test the functionality of the site I initially made use of the following automated tools:

[W3C Markup Validation Service](https://validator.w3.org/) - I used this tool to validate the HTML used within the website. To do this
I pasted the website URL (https://njdavies.github.io/milestone-project-two/) into the address field and hit Check. It will then advise you of any errors within your code and make suggestions regarding how to keep this as correct as possible against the W3C standards.

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - I used this tool to validate CSS used within the website. To do this I first selected the 'By direct input' tab and then pasted the entire CSS code from the [style.css](https://github.com/njdavies/milestone-project-two/blob/master/assets/css/style.css) file into the box provided. I then hit Check. As per the HTML checker above, if there are any errors in the code these will be highlighted.

[ESLint](https://eslint.org/) - A linter for Javascript that I used as an extension within the Visual Studio Code IDE. This analysed my code as I wrote it and highlighted any errors, allowing me to quickly identify any issues and keep my code as clean as possible before running it.


### Manual Testing

I tested the User Stories I had put together by conducting the following scenarios:

1. Upon the site loading, check that a zoomed out map of Earth is displayed.

2. Select each of the six attraction radio buttons and check that an alert message is displayed which asks the user to select a destination city.

3. Select the 'Where To' button and check that the dropdown list displays correctly.

4. Select each of the six cities in the dropdown list and check that the Google Map refreshes to centre over it.

5. Select the Hotel radio button, check that any existing markers are removed and check that markers are dropped onto the map in respect of nearby hotels.

6. Select each of the map markers provided on the map to confirm that the name, address and user rating of the attraction is provided in the correct format.

7. Select the Restaurant radio button, check that any existing markers are removed and then check that markers are dropped onto the map in respect of nearby restaurants.

8. Select each of the map markers provided on the map to confirm that the name, address and user rating of the attraction is provided in the correct format.

9. Select the Park radio button, check that any existing markers are removed and then and check that markers are dropped onto the map in respect of nearby parks.

10. Select each of the map markers provided on the map to confirm that the name, address and user rating of the attraction is provided in the correct format.

11. Select the Bar radio button, check that any existing markers are removed and then and check that markers are dropped onto the map in respect of nearby bars.

12. Select each of the map markers provided on the map to confirm that the name, address and user rating of the attraction is provided in the correct format.

13. Select the Museum radio button, check that any existing markers are removed and then and check that markers are dropped onto the map in respect of nearby museums.

14. Select each of the map markers provided on the map to confirm that the name, address and user rating of the attraction is provided in the correct format.

15. Select the Arts radio button, check that any existing markers are removed and then and check that markers are dropped onto the map in respect of nearby galleries or theatres.

16. Select each of the map markers provided on the map to confirm that the name, address and user rating of the attraction is provided in the correct format.

17. Check that the Google Map controls are only present on larger viewport sizes above 767px and disappear on smaller devices such as mobiles.

During the development of the site I made extensive use of Chrome Developer Tools to view the content in different viewports and assess how it was behaving. This then led to me using multiple media queries to make subtle changes to the code so that the content was always displayed correctly.

As I added additional functionality with Javascript to make the site interactive I also used Chrome Developer Tools to debug any issues in the code that arose. This was accomplished by setting breakpoints, monitoring the values of any variables and stepping through the code line by line to make sure it was behaving as it should.

In order to be completely satisfied that the site worked correctly across multiple browsers I completed the manual testing above after loading the site in Chrome, Internet Explorer, Edge and Firefox.

Although other tools such as Jasmine were also available to me to use, the nature of the Javascript used in the site dictated that this would not be required. The automated and manual testing completed above was sufficient to evidence that the site worked correctly.

---

## Deployment

In order to deploy the site, I first created a remote Git repository on GitHub. I then went into the settings option of this remote repository and changed the Source option under the GitHub Pages section to Master Branch. This then provided me with the following URL for the site - https://njdavies.github.io/milestone-project-two/

I then committed and pushed content from my local repository to the remote repository each time I added a new piece of functionality to the site. This allowed me to continually test the live version of the site in different browsers throughout development, to see how it was responding.

---

## Credits

### Content

1. In working with the Google Maps API I relied heavily on the official documentation found at the [following site](https://developers.google.com/maps/documentation/javascript/tutorial)

2. The code to clear all radio buttons each time a selected destination city was selected (lines 84-91 in maps.js file) was copied from the following [StackOverflow page](https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript)

3. The code to remove any existing markers on the map before dropping any new markers (lines 59-62 in maps.js file) was copied from the following [StackOverflow page](https://stackoverflow.com/questions/1544739/google-maps-api-v3-how-to-remove-all-markers)

### Media

1. The photo used in the site banner was obtained from the [following website](https://thegolfclub.info/related/small-airplanes-in-the-sky.html)

2. The custom map marker icons were obtained from the [following website](http://kml4earth.appspot.com/icons.html)

### Acknowledgements

I received inspiration in the design of this project from the following website:

1. [TripAdvisor Website](https://www.tripadvisor.co.uk/)
