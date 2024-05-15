# Retro Media React Demo Code - Assignment Overview


# Retro Media React Assignment - Part 1

#### Assignment Type: In class and homework for 4/23 if not finished

## Note: You will need to create your own React 

## Objective:
Develop a React application that simulates a simple media store featuring “retro media items” such as VHS tapes, DVDs, and CDs. This project aims to deepen your understanding of React's core features including hooks, state management, events, props, JSX, and component-based architecture.


### Application Features
1. ***Browse Media Products:***
Users can view a list of retro media products available for sale, including VHS tapes, DVDs, and CDs.
Each product displays its type (e.g., VHS, DVD, CD) and title.

2. ***Add Products to Cart:***
Users have the option to add media items to their shopping cart by clicking an "Add to Cart" button associated with each item.
This action simulates adding items to a cart, which could later be expanded to actual cart functionality in a full-scale application.

3. ***Responsive Interface:***
The application responds immediately to user inputs, such as clicking on the "Add to Cart" button, enhancing the interactivity of the user experience.

4. ***Visual Feedback:***
Provides visual feedback when actions are taken, such as updating the state when a product is added to the cart, although in this basic version, feedback is limited to console messages.

## Requirements:
1. **Hooks**: Utilize the `useState` hook to manage the application's state. This will allow you to hold data about the media items and any user interactions.
2. **State Management**: Maintain a list of media items within the application's state. This list will be dynamic, allowing for future additions like adding items to a user's cart or updating quantities.
3. **Events**: Implement event handling to manage users adding media items to a cart
4. **Props**: Use props to pass media item details data and like the add-to-cart function event handlers from parent components to child components
5. **JSX**: Use JSX to structure your component templates. This will be critical in rendering your application's UI and displaying dynamic data based on the state.

## Assignment Details:
Create the following components with specified functionalities:

1. **App Component**:
   - This main component holds the state for media items and cart operations.
   - Render the `MediaList` component, passing down media items from the state and a function to handle adding items to the cart.

2. **MediaItem Component**:
   - Receive a media item object and an add-to-cart function as props.
   - Display the media item’s title, type, and include a button to add the item to the cart, demonstrating event handling.

3. **MediaList Component**:
   - Receive a list of media items and a cart addition function as props: render a list of `MediaItem` components, each receiving its own item details and the shared cart function, illustrating props usage for component communication.

## Project Setup:
- Initialize the project using Create React App.
- Install any necessary dependencies.
- Maintain a well-organized project directory.

## Provided Media Items:
You must use the following media items in your project, which represent different types of retro media available for purchase:

```json
[
  { "id": 1, "type": "VHS", "title": "Back to the Future" },
  { "id": 2, "type": "DVD", "title": "The Matrix" },
  { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
]
```

# Retro Media React Assignment - Part 2

#### Assignment Type: In class and homework for 4/26 if not finished

### Note: This assignment requires an existing Retro React project setup. Please ensure you have a local development environment ready for your project.

## Objective
Enhance your Retro React Media assignment by introducing advanced features such as routing, detailed component views, and dynamic user interaction. This project aims to deepen your understanding of React's capabilities including routing, state management complexities, advanced event handling, and component communication.

## Application Features

### Routing and Detail Pages
- **Navigation Management**: Utilize React Router to manage navigation between different parts of the application.
- **Dynamic Routing**: Set up a route for each type of media (VHS, DVD, CD) and a home route. Each section for each media type should have more information for users to view

### Event Handling Enhancements
- **Interactive Cart Management**: Add a "Remove from Cart" button with an event handler in the MediaItem component to manage user interactions dynamically.

### Prop Drilling and Component Communication
- **Deeper Interaction**: Pass a "toggle favorite" function down multiple levels to allow marking items as favorite, demonstrating deeper component interaction and the use of props for component communication.

### Additional Components
- **Message Component**: Implement a feedback mechanism that alerts users when they add or remove items from their cart.

## Requirements

### Hooks
- **useState and useReducer**: Use state management hooks to manage complex states like the media items list and user interactions within the cart.

### State Management
- **Advanced State Handling**: Utilize advanced techniques in state management to handle states like the user's cart and favorite items.

### Events
- **Complex Event Handling**: Implement comprehensive event handling to manage interactions such as adding to cart, removing from cart, and toggling favorite status.

### Props
- **Prop Handling**: Use props to facilitate data and function passing between nested components, ensuring robust component communication.

### JSX
- **Dynamic Rendering**: Use JSX effectively to render UI components based on state and props, showcasing dynamic data handling.

### CSS Styling
- **Basic Styling**: Add basic CSS styling to your project to enhance the retro feel of your UI.
