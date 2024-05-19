# User Stories and Component hierachy

## Component hierachy diagram (provisional until miro board is complete Screenshot of completed diagram to be inserted in final commits.)

---

# State management plan (provisional)

| Component           | What State exists                                           | State approach                                                                                                                   |
| ------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| searchBox           | - search query                                              | local state with useState for handling input                                                                                     |
| WeatherForecast     | - weather data for selected location                        | useEffect for API calls                                                                                                          |
| Favourites          | - list of favourite locations                               | Local state manage with useState, useEffect for re-rendering after new locations added and localStorage for session persistence. |
| LocationData        | - details about selected location (for map and hotel info)  | Derived state from weather forecast                                                                                              |
| HotelsCarousel      | -list of hotels in the location - Current index in carousel | useEffect for hotel data fetching; Local state for carousel index.                                                               |
| HotelImageSlideShow | - current index in the image slideshow                      | local state with useState                                                                                                        |
| Map                 | - map view based on selected location                       | useEffect to re-render based on selected location                                                                                |

---

# User stories

---

# 1.

---

## Title: Location Search

## Priority: High

## End User: People who want to quickly see what the weather will look like before going out so they can dress appropriately for the right conditions.

---

## User Story:

As a user, I want to see a location search box on the applications main page, so that I can search for any town or city by name.

---

## Tasks:

- Implement a search box component on the home page.
- Integrate an autocomplete feature for city and town names.
- Connect the search box to a geographic API to validate and autocomplete location names.

---

## Acceptance criteria:

- The search box is visible on the applications home page but not in the navigation bar until after a user switches to a new page.
- Autocomplete suggestions appear as the user types, showing relevant locations.
- The application can handle invalid inputs and prompt the user to try again.

---

# 2.

---

## Title: Weather forecast retrieval

## Priority: High

## End User: A person who walks to work who wants to see what weather to expect

---

## User Story:

As a user, after searching for a location, I want the app to query a weather API and retrieve a 5-day forecast if the location exists, so that I can plan my activities around the weather.

---

## Tasks:

- Implement an API service to query a weather forecast API.
- Extract a 5-day forecast from the weather API response.
- Design a data model to store weather forecast data.

---

## Acceptance criteria:

- A successful query to the weather API is made when a valid location is searched.
- The application displays a 5-day weather forecast that matches the data returned from the API.
- Forecast data includes temperature, weather conditions, and icons.

---

# 3.

---

## Title: Displaying forecast data

## Priority: High

## End User: A parent who doesn't have a lot of time, who wants to view the weather in an easy to understand format, so they can prepare their childrens clothes for the day.

---

## User Story:

As a user, I want to view the forecast data in a new layout that matches the supplied wireframe, so that I can easily understand the weather conditions for the next five days.

---

## Tasks:

- Design and implement a new view layout as per the wireframe specifications.
- Create components for displaying weather forecast information data such as temperature, or icons.
- Ensure dynamic data binding between the weather forecast API response and the view components.

---

## Acceptance criteria:

- The layout for displaying forecast data matches the wireframes.
- Each day of the 5-day forecast displays the correct data retrieved from the API.
- The user can navigate to and from the forecast without any issues.

---

# 4.

---

## Title: Save favourite locations

## Priority: High

## End User: People who commute to work in another city who would like to have fast access to see what the weather is like before going to work.

---

## User Story:

As a user, I want to have the option to save a location as a favourite, so that I can quickly access the weather forecast for places that I care about without having to search again.

---

## Tasks:

- Implement a mechanism to save favourite locations locally on the users device.
- Design a UI component for marking and viewing favourite locations.
- Ensure the persistence of favourite locations across application sessions.

---

## Acceptance criteria:

- Users can mark a location as a favourite, and this preference is saved locally.
- Favourite locations are accessible even after restarting the application.
- There is a clear UI indicator for which locations are saved as favourites.

---

# 5.

---

## Title: Responsive layout and design

## Priority: High

## End User: People who use multiple different devices who want to enjoy the same experience on each device they own.

---

## User Story:

As a user, I want the application to be responsive across mobile, tablet, and desktop devices according to the wireframes, so that I can have a consistent experience on any device I use.

---

## Tasks:

- Implement a responsive design using the Bootstrap framework.
- Test the application across various devices (mobile, tablet, desktop) to ensure layout integrity.
- Adjust the components and views to match the wireframe layouts for each breakpoint.

---

## Acceptance criteria:

- The application layout adjusts appropriately for mobile, tablet, and desktop breakpoints.
- Functionalities are fully accessible and usable across different devices.
- The design matches the wireframes at each breakpoint.

---

# 6.

---

## Title: Display a map of area alongside weather information.

## Priority: Medium (optional)

## End User: People who are planning a trip who are unfamiliar with the layout of the location they are visiting.

---

## User Story:

As a user, when viewing the weather forecast for a selected location, I also want to see a map of the area, so that I can get a geographical context of the location I am searching for.

---

## Tasks:

- Integrate an API service to retrieve a map of the selected location.
- Design and implement a map view that activates upon location selection.
- Ensure the map centers on the searched location.

---

## Acceptance criteria:

- A map of the selected location is displayed alongside the weather forecast.
- The map accurately represents the searched location.
- Users can interact with the map without affecting the loading or displaying of weather data.

---

# 7.

---

## Title: Show hotels available in displayed area

## Priority: Medium (optional)

## End User: Professionals who need to quickly plan trips away to attend business meetings.

---

## User Story:

As a user, I want to see a list of hotels in the selected location displayed on a carousel, with images in a slideshow for each hotel, so that I can explore accommodation options directly from the weather view page.

---

## Tasks:

- Integrate an API service for retrieving hotel information in the selected location.
- Design a carousel component for displaying hotels, including an image slideshow for each hotel.
- Implement the functionality to navigate through the hotel carousel and view images.

---

## Acceptance criteria:

- A carousel of hotels in the selected location is displayed, with each hotel featuring a slideshow of images.
- The carousel and slideshow components are intuitive to use and easy to navigate.
- Hotel information is accurate and updates according to the selected location.

---

# Definition of done:

- The code is well documented and meets DF coding standards.
- All unit and integration tests pass.
- UI implementation matches the provided wireframes.
- All features meet their associated acceptance criteria.
- The application performs as expected.
- All necessary documentation has been created or updated, including user stories, component hierachy charts and suggestions of improvement to the software for the client. Furthermore, AI use should be documented in a seperate folder using screenshots.
- Code review with peer groups.
- Ed gives his final approval.
- A retrospective meeting is held to discuss what went well, what didn't, and what can be improved next time.

---
