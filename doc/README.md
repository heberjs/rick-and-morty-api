# Rick&Morty App

## Intro

"Rick&Morty App is a responsive web application that allows users to explore the characters, episodes, and locations of the Rick & Morty universe interactively. With an independent and scalable logic, the app simplifies the search and filtering of characters through a modular and reusable design."

![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTlwZ3M4OXU0NWdhZHp2YWV4OGN2am5qazFobWF5aGowd2FsOGFvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i2dE5VvBNxBw4/giphy.gif)

## Functional Description

### Use Cases

- Search for characters with live filtering
- View character details
- Navigate through episodes and view characters by episode
- Navigate through locations and view characters by location
- Filter characters by specific attributes (species, status, gender)
- Paginate through lists of characters, episodes, and locations

v.0.1

- Utilize custom hooks to separate React from the business logic
- Apply debounce utility for efficient API calls during search
- Test backend logic with Jest
- Create reusable components to improve scalability across the app
- Handle custom errors in API communication

### User Stories

As a user:

- I can search for characters by name using the search bar.
- I can filter characters by attributes like species, status, and gender.
- I can navigate through episodes and see characters from specific episodes.
- I can navigate through locations and view characters present at each location.
- I can click on a character to see detailed information about them.
- I can navigate between pages using a custom pagination bar.

## Technical Description

### Modules

- **service**: Contains all business logic independent of React, designed with hexagonal architecture principles for scalability.
- **components**: All UI components including reusable and synthesized sub-components.
- **pages**: Main pages of the app with routing managed via React Router.
- **hooks**: Custom hooks for managing API calls and integrating service logic with React components.

### Technologies

- Vite
- React
- JavaScript
- Tailwind CSS
- Jest (for backend testing)
- React Router DOM

### Data Flow

- **Rick & Morty API**: External API source for data on characters, episodes, and locations.
- **Custom Hooks**: Hooks like `useCharacterSearch` and `useEpisodeFilter` handle data fetching and state management.
- **Debounce Function**: Optimizes API requests during user input for a smooth search experience.

### Key Components

- **Header**: Main navigation bar present across all pages.
- **NameSearchBar**: Search input with debounce to optimize API requests.
- **FilterBar**: A bar with filter options to filter characters by attributes.
- **FilterSection**: Reusable component within `FilterBar` to handle different filter types.
- **FilterButton**: Reusable button within filters, designed for scalability.
- **CharacterList**: Displays a list of characters; clicking a character navigates to the details page.
- **NavPages**: Custom pagination bar for navigating through paginated content.
- **DropdownSelect**: Reusable dropdown used in both episodes and locations pages for filtering.

### Pages

1. **Home**: Displays a search bar for characters and navigational links to other pages.
2. **EpisodeList**: Shows characters by episodes with a dropdown to select specific episodes.
3. **LocationList**: Similar to `EpisodeList`, but displays characters based on locations.
4. **CharacterDetails**: Shows detailed information about the selected character.

## Data Model

- **Character**:
  - `id` (required)
  - `name` (string, required)
  - `status` (string, required, enum: Alive | Dead | Unknown)
  - `species` (string, required)
  - `gender` (string, required, enum: Male | Female | Genderless | Unknown)
  - `origin` (string, optional)
  - `location` (string, optional)
  - `image` (URL, required)

- **Episode**:
  - `id` (required)
  - `name` (string, required)
  - `air_date` (string, required)
  - `episode` (string, required)

- **Location**:
  - `id` (required)
  - `name` (string, required)
  - `type` (string, optional)
  - `dimension` (string, optional)

## Testing

- Backend testing is done using Jest to validate logic and ensure that the business rules adhere to expected outcomes.

## Future Enhancements

- Add user authentication for a personalized experience.
- Allow users to save favorite characters or episodes.
- Enhance filtering options for more complex searches.
