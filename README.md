# Pom-to-do-ro
Pom-to-do-ro is a productivity application designed to help users manage their habits, tasks, and work sessions using the Pomodoro technique. The application provides a platform for users to register, log in, create and track habits, manage tasks, and utilize a Pomodoro timer for focused work sessions.

### Who is Pom-to-do-ro For?

Pom-to-do-ro is designed with a compassionate understanding of the diverse needs of users, especially those grappling with ADHD, executive dysfunction, or the overwhelming whirlwind of modern life - like myself. If you've ever felt the frustration of juggling multiple productivity apps, each catering to a specific need, Pom-to-do-ro is your all-in-one haven as it offers a holistic solution that understands the intricate interplay between habits, tasks, and time management, whilst also being an intuative design in a calming colour scheme.

### Why this app, why now?

In a market saturated with standalone productivity apps, so Pom-to-do-ro emerges as a breath of fresh air. It caters to the specific needs of individuals who yearn for a unified, intuitive, and aesthetically pleasing platform. Pom-to-do-ro recognizes the challenges faced by those with ADHD, executive dysfunction, or simply anyone seeking a streamlined approach to productivity. Pom-to-do-ro is not just closing a gap; it's re-thinking the purpose of productivity tools, placing the user's experience and well-being at its core.

![Pom-to-do-ro Logo](/documentation/images/favicon_png_image.png)

## Table Of Contents

1. [Pom-to-do-ro](#pom-to-do-ro)
2. [Planning Phase](#planning-phase)
   - [App Overview](#app-overview)
   - [Features](#features)
   - [User Stories](#user-stories)
   - [Kanban Agile](#kanban-agile)
   - [Research](#research)
   - [Wireframes](#wireframes)
   - [Database Schema](#database-schema)
   - [Design](#design)
3. [Development](#development)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Connect Frontend to Backend](#connect-frontend-to-backend)
   - [State Management](#state-management)
4. [Testing](#testing)
   - [Manual Testing](#manual-testing-frontend)
   - [Unit Testing](#unit-testing-backend)
   - [Bugs and Fixes](#bugs-and-fixes)
5. [Deployment](#deployment)
   - [Final Deployment](#final-deployment)
6. [Credits](#credits)

## Planning Phase

### App Overview

The app will include features such as:

- Pomodoro timer with customizable work and break durations.
- To-do list for managing tasks during work intervals.
- User authentication for personalized task tracking.
- Weekly habit tracker that resets on monday to track daily habits.

### Features

- Pomodoro timer with start, pause, and time input functionality.
- To-do list with add, edit, delete, and mark as complete features.
- User authentication for saving personal preferences and tasks.
- Habit Tracker, with daily check, add and delete funcionality.

### User Stories

1. As a new user, I want to be able to register for an account with my email and password so that I can access the app.
2. As a registered user, I want to be able to log in with my email and password to access my personalized dashboard.
3. As a user, I want to be able to create and manage my daily habits, including setting their names and descriptions.
4. As a user, I want to be able to mark off completed habits as they are completed.
5. As a user, I want to be able to create tasks, set their due dates, and mark them as complete when they are done.
6. As a user, I want to be able to prioritize and categorize tasks and view them in a to-do list.
7. As a user, I want to be able to start a Pomodoro timer for focused work sessions, with configurable work and break intervals.
8. As a user, I want to see a timer countdown during Pomodoro sessions.
9. As a user, I want to be able to log out of my account for security and privacy.

### Developer and Admin Stories

10. As an administrator, I want to be able to manage user accounts, including banning or deleting accounts when necessary.
11. As a developer, I want to ensure the application communicates with the Django REST Framework for data storage and retrieval.
12. As a developer, I want to utilize React.js and Bootstrap.js to create an intuitive and visually appealing user interface.
13. As a developer, I want to implement robust error handling and validation to ensure a smooth user experience.

### Epics and User Stories

#### Epic 1: User Management

**User Story 1:** As a new user, I want to be able to register for an account with my email and password so that I can access the app.

**User Story 2:** As a registered user, I want to be able to log in with my email and password to access my personalized dashboard.

**User Story 3:** As a user, I want to be able to log out of my account for security and privacy.

#### Epic 2: Habit Tracking

**User Story 4:** As a user, I want to be able to create and manage my daily habits, including setting their names and descriptions.

**User Story 5:** As a user, I want to be able to mark off completed habits as they are completed.

#### Epic 3: Task Management

**User Story 6:** As a user, I want to be able to create tasks, set their due dates, and mark them as complete when they are done.

**User Story 7:** As a user, I want to be able to prioritize and categorize tasks and view them in a to-do list.

**User Story 8:** As a user, I want to receive notifications for upcoming tasks.

#### Epic 4: Pomodoro Timer

**User Story 9:** As a user, I want to be able to start a Pomodoro timer for focused work sessions, with configurable work and break intervals.

**User Story 10:** As a user, I want to see a timer countdown during Pomodoro sessions.

#### Epic 5: Admin and Security

**User Story 11:** As an administrator, I want to be able to manage user accounts, including banning or deleting accounts when necessary.

#### Epic 6: Backend Integration and API

**User Story 12:** As a developer, I want to ensure the application communicates with the Django REST Framework for data storage and retrieval.

#### Epic 7: Testing and Deployment

**User Story 13:** As a developer, I want to regularly test and deploy the application to ensure it's stable and up-to-date.

### Tasks

#### Epic 1: User Management

**Task 1.1:** Create the user registration form.

**Task 1.2:** Implement the user registration logic.

**Task 1.3:** Create the user login form.

**Task 1.4:** Implement the user login logic.

**Task 1.5:** Implement the user logout functionality.

#### Epic 2: Habit Tracking

**Task 2.1:** Create a form for adding new habits.

**Task 2.2:** Implement habit creation and storage.

**Task 2.3:** Create a UI to display and manage habits.

**Task 2.4:** Implement marking off completed habits.

#### Epic 3: Task Management

**Task 3.1:** Design and create a form for adding new tasks.

**Task 3.2:** Implement task creation and storage.

**Task 3.3:** Create a UI for viewing and managing tasks.

**Task 3.4:** Implement task completion functionality.

**Task 3.5:** Develop task prioritization and categorization features.

**Task 3.6:** Implement notifications for upcoming tasks.

#### Epic 4: Pomodoro Timer

**Task 4.1:** Create a UI for starting and managing Pomodoro sessions.

**Task 4.2:** Implement the Pomodoro timer logic.

**Task 4.3:** Add a countdown time.

#### Epic 5: Admin and Security

**Task 5.1:** Develop admin features for user account management.

**Task 5.2:** Implement data security measures.

#### Epic 6: Backend Integration and API

**Task 6.1:** Set up communication with Django REST Framework for data storage and retrieval.

#### Epic 7: Testing and Deployment

**Task 7.1:** Perform updates and enhancements in React.js and Bootstrap.js.

**Task 7.2:** Implement error handling and validation improvements.

**Task 7.3:** Perform testing and prepare for application deployment.

### Opportunity Matrix

| Opportunity               | Importance (1-5) | Viability/Feasibility (1-5) |
| ------------------------- | ---------------- | --------------------------- |
| User Registration         | 5                | 4                           |
| User Login                | 5                | 5                           |
| User Logout               | 4                | 4                           |
| Create and Manage Habits  | 4                | 3                           |
| Mark Off Completed Habits | 3                | 3                           |
| Create and Manage Tasks   | 4                | 3                           |
| Prioritize and Categorize Tasks | 4           | 3                          |
| Pomodoro Timer            | 4                | 4                           |
| Admin Features            | 4                | 3                           |
| Backend Integration (API) | 4                | 3                           |
| Error Handling and Validation | 3            | 4                           |
| Testing and Deployment    | 4                | 4                           |

### M/S/C 

### Must (High Priority):

- As a new user, I want to be able to register for an account with my email and password so that I can access the app.
- As a registered user, I want to be able to log in with my email and password to access my personalized dashboard.
- As a user, I want to be able to create and manage my daily habits, including setting their names and descriptions.
- As a user, I want to be able to mark off completed habits as they are completed.
- As a user, I want to be able to create tasks, set their due dates, and mark them as complete when they are done.
- As a user, I want to be able to log out of my account for security and privacy.
- As a developer, I want to ensure the application communicates with the Django REST Framework for data storage and retrieval.
- As a developer, I want to implement robust error handling and validation to ensure a smooth user experience.
- As a developer, I want to regularly test and deploy the application to ensure it's stable and up-to-date.

### Should (Medium Priority):

- As a user, I want to be able to prioritize and categorize tasks and view them in a to-do list.
- As a user, I want to be able to start a Pomodoro timer for focused work sessions, with configurable work and break intervals.
- As a user, I want to see a timer countdown during Pomodoro sessions.
- As an administrator, I want to be able to manage user accounts, including banning or deleting accounts when necessary.

### Could (Low Priority):

- As a user, I want to be able to view my habit completion history over time in the form of cumulative streaks.
- As a developer, I want to utilize React.js and Bootstrap.js to create an intuitive and visually appealing user interface.

### Kanban Agile

Used GitHub Projects for Agile project management, organizing tasks into sprints and tracking progress. Here is a link to the kanban board used [Pom-to-do-ro Kanban](https://github.com/users/Pur3-MAlice/projects/8/views/1?sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Labels)

### Research

When researching pomodoro apps and task management apps. I realised that not alot of these webistes add in a combination of these features, or they tend to (in my opinion) over complicate things. I wanted to make sure i had the basic functionailty of both a task management app and a pomodoro timer without overstimulating the user, or over facing them with too many options. How to use the app should be intuitive and natural, there shouldn't be a need to a guide or a how to use. Some apps I took inspiration from are listed below:

[pomodorokitty](https://pomodorokitty.com/)

[studywithme](https://studywithme.io/aesthetic-pomodoro-timer/)

[tomatotimers](https://www.tomatotimers.com/)

[pomofocus](https://pomofocus.io/)

[todoist](https://todoist.com/)

[notion](https://www.notion.so/)


### Wireframes

Here are the wireframes for this project. 

![Desktop Wireframe](/documentation/setup/desktop%20wireframe.png)

![Tablet Wireframe](/documentation/setup/tablet%20wireframe.png)

![Mobile Wireframe](/documentation/setup/mobile%20wireframe.png)


### Database Schema

#### ERD 
![ERD](/documentation/setup/ERD.png)

#### User

This table stores user account information.

| Field        | Type     | Description                |
| ------------ | -------- | -------------------------- |
| id           | Integer  | Primary key                |
| username     | String   | User's username            |
| password     | String   | User's hashed password     |
| date_joined  | DateTime | Date and time of registration |

#### Habit

This table stores information about user-defined habits.

| Field   | Type      | Description       |
| ------- | --------- | ----------------- |
| id      | Integer   | Primary key        |
| user    | Foreign Key| User who created the habit |
| name    | String    | Name of the habit   |
| checked | Boolean   | Habit checked off status |

#### Task

This table stores user-defined tasks.

| Field     | Type      | Description         |
| --------- | --------- | ------------------- |
| id        | Integer   | Primary key          |
| user      | Foreign Key| User who created the task |
| name      | String    | Name of the task     |
| due_date  | Date      | Due date for the task |
| important | Boolean   | Task priority level  |
| urgent    | Boolean   | Task priority level  |
| category  | String    | Task category or type |

#### Category

This table stores task categories.

| Field     | Type      | Description           |
| --------- | --------- | --------------------- |
| id        | Integer   | Primary key            |
| user      | Foreign Key| User who created the task |
| name      | String    | Name of the task       |
| description | String  | Description of the task |

### Design

#### Font Choice

The choice of fonts for a web or mobile app is a crucial design decision that can significantly impact the overall user experience. The fonts I decided on needed to align with the app's visual modern identity, readability, and the overall design aesthetics.

Readability
- *Archivo:*
  - Has clarity and readability, featuring well-balanced proportions that contribute to good legibility.
  - Particularly beneficial for users needing to quickly read details on the page before engaging in other reading-intensive tasks.

- *Open Sans:*
  - Designed with legibility in mind, ensuring easy reading on screens.
  - A versatile and widely recognized font, suitable for various reading skills, especially those with dyslexia.

Modern Aesthetics
- *Archivo:*
  - Has a modern and clean design, conveying a sense of modernism and sophistication.
  - Stylish yet bold, making it suitable for contemporary app interfaces.

- *Open Sans:*
  - Features a neutral and friendly appearance, adapting well to modern design aesthetics.
  - Versatile in nature, allowing for seamless integration into various interfaces.

#### Colors
Background Colors
- *#152b37 (Gunmetal Blue):* Suitable for backgrounds or headers, providing a visually pleasing contrast with lighter content.

- *#06551a (Cal Poly Green):* Ideal for accents and buttons, conveying a sense of calmness and connection to nature.

- *#183593 (Egyptian Blue):* Use for headers, borders, or other design elements, associated with professionalism and trust.

- *#a577d2 (Lavender):* Great for highlighting important elements or interactive components, suggesting creativity and calmness.

- *#6d33a7 (Grape):* Complementary to other colors, conveying sophistication.

Text Colors
- *#8bb0e9 (Jordy Blue):* Offers a clean and modern look, enhancing readability on dark backgrounds, associated with tranquility.

- *#ffffff (White):* A classic choice providing high contrast on dark backgrounds, ensuring good readability and contributing to a clean design.

My Considerations
- Ensuring sufficient contrast between text and background colors for optimal readability. Using only AA or AAA contrasts
- Consider accessibility guidelines to make your design inclusive for users with different visual abilities. Using only AA or AAA contrasts

![Color Choice](/documentation/setup/colorscheme.png)

![Contrast Grid](/documentation/setup/accesibilitycolors.png)

#### 4x4 Grid
In designing the home page of my React app, I've opted for a layout that encapsulates the essential components in one place, following an asymmetry that remains visually pleasing, modern yet intuative. The choice to bring everything together in a cohesive manner serves multiple purposes, all geared towards enhancing user experience and streamlining the app's primary objective: making the user's life easier through effective task management.

The asymmetrical design not only adds an element of uniqueness but also helps break away from a monotonous, predictable layout Moreover, by using React Bootstrap's responsive grid system, I've ensured that the layout adapts seamlessly to various screen sizes.

*Ultimately, the goal was to create an environment where everything the user needs is in one place, making their experience seamless – simplifying and improving the user's life and to-do list.*

## Development

At this projects' initalisation, I built my frontend inside the directory of the back end so I could have both the front and backend initalised at the same time and contained within one reporsitory. Therefore the creation of the frontend, which came after the inital build of the backend to create a strong foundations, naturally involves the creation of the backend.

### Frontend

#### 1. Setting Up the Project

Initialized my frontend project using the Create React App for a quick and efficient setup. This provided a sensible project structure, build scripts, and development server out of the box.

```bash
npx create-react-app your-app-name
cd your-app-name 
```
I followed the Code Insitute Intructions on how to create a React and DRF app in one repo. Here: [Project unification documentation](https://code-institute-students.github.io/advfe-unified-workspace/creating-an-app-in-a-workspace/00-creating-an-app-in-a-workspace)

#### 2. Design the UI Components

I identified the main components needed for the app, such as the Pomodoro timer, to-do list, habit tracker and authentication components. Break down the UI into reusable and manageable components.

#### 3. Implement the Pomodoro Timer

Created a component for the Pomodoro timer. Used the React state to manage the timer's state, including the current time remaining, whether it's paused or active, the time inputs and work/break/longbreak functions.

#### 4. Develop the To-Do List

Built components for creating, viewing, editing, and deleting tasks in the to-do list. Implemented functionalities such as marking tasks as completed, categorising tasks, and organizing them by Important/Urgent.

#### 5. User Authentication

Integrated user authentication components to handle user registration, login and logout.

#### 6. Implement Routing

I set up routing using React Router to enable navigation between different sections of my app. And then defined routes for the Pomodoro timer, to-do list, and authentication pages.

#### 7. Styling and Responsiveness

Applied styles to components using CSS and React Bootstrap. Ensured that my app was responsive and provides a consistent user experience across different devices.

#### 8. Testing

Then after all the above I wrote manual tests for components and features. I then asked my Computer Scientist Friends to perform the thorough testing to catch bugs, which I would go on to fix. To be honest I did small testing throughout the development process, to ensure the app was being built correctly. Go to [Testing](#testing) for more details.

#### 9. Reused components 

In my app there are three main components that are being re-used in a significant way. Task, Habit, and fetchCategories. The Task component is being used by the TaskList component, and being mapped over making sure each task that is owned by the user is being sent to the TastList to be shown on the frontend. The Habit component is also used in a simialar way. The other significant reused component is the fetchCategories component, which is used by the CreateTask and EditTask alike. Due to the fact that both of these forms are reliant on the category dropdown menu. The category dropdown menu needs to pull and then map over all categories, find the title and the id, pass the title of the category to the frontend and once chosen pass the id to the backend.

#### 10. Features

BasePage 

![BasePage](/documentation/images/basepage.png)

NavBar

![NavBar](/documentation/images/nav_bar.png)

Habits

![Habit Tracker](/documentation/images/habit_tracker_table.png)

![Add_Habit](/documentation/images/add_habit_modal.png)

Timer

![Timer](/documentation/images/pomodoro_timer.png)

![Timer Inputs](/documentation/images/timer_inputs.png)

![Timer Countdown](/documentation/images/timer_visual_countdown.png)


Tasks

![Tasks](/documentation/images/tasks_withinternalscroll.png)

![Automatic Delete](/documentation/images/automatic_delete.png)

![Create Task](/documentation/images/createnewtask.png)

![Edit Task](/documentation/images/edittask_page.png)

![Date Picker](/documentation/images/date_picker.png)

![Errors Task](/documentation/images/usererrors_edittask.png)


Categories

![Category Dropdown](/documentation/images/category_dropdown.png)

![Category Modal](/documentation/images/category_modal.png)


Authentication

![Sign In Form](/documentation/images/signin_form.png)

![Sign In Form](/documentation/images/signup_form.png)

![Sign In Errors](/documentation/images/signin_errors.png)

![Sign In Errors](/documentation/images/signup_errors.png)

## Backend

The backend of Pom-to-do-ro is powered by Django Rest Framework (DRF), a robust toolkit for building Web APIs in Django applications. The backend handles user authentication, manages data storage, and serves data to the frontend.

### Technologies Used

- **Django:** A Python web framework that helps with quick development.

- **Django Rest Framework (DRF):** A powerful framework for building Web APIs based on Django.

### User Authentication

Pom-to-do-ro uses Django's built-in authentication system to handle user registration, login, and logout functionalities. Users can securely create accounts with their username and password, log in to access their personalized dashboard, and log out for security and privacy.

### Data Models

The backend defines several data models to represent the core entities of the application:

#### User Model

The `User` model stores information about registered users, including a unique username, a hashed password for security, and the date and time of registration.

| Field       | Type      | Description                     |
| ----------- | --------- | ------------------------------- |
| id          | Integer   | Primary key                     |
| username    | String    | User's username                 |
| password    | String    | User's hashed password          |
| date_joined | DateTime  | Date and time of registration   |

#### Habit Model

The `Habit` model represents the daily habits that users can create and track. It includes the habit's name, a reference to the user who created it, and a boolean field to track if the habit is checked off for the day.

| Field   | Type      | Description                  |
| ------- | --------- | ---------------------------- |
| id      | Integer   | Primary key                  |
| user    | Foreign Key| User who created the habit   |
| name    | String    | Name of the habit            |
| checked | Boolean   | Habit checked off status     |

#### Task Model

The `Task` model represents user-defined tasks, including details such as the task name, due date, importance, urgency, category, and completion status.

| Field     | Type      | Description                 |
| --------- | --------- | --------------------------- |
| id        | Integer   | Primary key                 |
| user      | Foreign Key| User who created the task    |
| name      | String    | Name of the task             |
| due_date  | Date      | Due date for the task        |
| important | Boolean   | Task priority level         |
| urgent    | Boolean   | Task priority level         |
| category  | String    | Task category or type        |

#### Category Model

The `Category` model is used to categorize tasks. It includes a name and description.

| Field       | Type      | Description               |
| ----------- | --------- | ------------------------- |
| id          | Integer   | Primary key               |
| user        | Foreign Key| User who created the task |
| name        | String    | Name of the category       |
| description | String    | Description of the category|

### API Endpoints

Pom-to-do-ro's backend exposes various API endpoints to interact with the data. The specific endpoints include:

- `/admin/`: Django admin panel for site administration.
- `/api-auth/`: Django Rest Framework's browsable API authentication.
- `/dj-rest-auth/`: Authentication and registration endpoints provided by `dj-rest-auth`.
- `/dj-rest-auth/registration/`: Endpoint for user registration.
- `/profiles/`: Endpoint for user profiles.
- `/profiles/<int:pk>/`: Endpoint for individual user profiles.
- `/tasks/`: Handles CRUD operations for tasks.
- `/tasks/<int:pk>/`: Endpoint for individual tasks.
- `/categories/`: Endpoint for task categories (list).
- `/categories/<int:pk>/`: Endpoint for individual task categories.
- `/habits/`: Handles CRUD operations for habits.
- `/habits/<int:pk>/`: Endpoint for individual habits.

### Backend Structure

The backend is organized following a Django app structure, with separate apps for managing authentication, tasks, habits, and categories. Key components include:

- **`models.py`:** Defines the models for habits, tasks, categories, and users.
- **`serializers.py`:** Converts data to aid the transfer of data between the frontend and backend.
- **`views.py`:** Contains the logic for handling HTTP requests.
- **`urls.py`:** Maps URL patterns to view the web app.
- **`tests.py`:** Defines the Unit test for each app.

### Development Process

The development of the backend involved creating the necessary data models, serializers, views, and URL patterns. The Django Rest Framework played a huge role in simplifying the creation of APIs.

### Connect Frontend to Backend

Integrated the frontend with the DRF backend. Using API calls (Axios) to interact with my backend's endpoints for tasks, habits, categories, and user/profile. I also followed the Code Insitute Intructions on how to create a React and DRF app in one repo. Here: [Project unification documentation](https://code-institute-students.github.io/advfe-unified-workspace/creating-an-app-in-a-workspace/00-creating-an-app-in-a-workspace)

## Testing

### Manual Testing Frontend

During and throughout the development I thoroughly tested each feature and got a volunteer to be my user to poitn out logical and user errors that might occur. Features tat were tested include the Pomodoro timer, to-do list CRUD operations, habit tracking, and user authentication. Here are images of the spread sheet used to track the manual testing.

![NavBar Tests](/documentation/testing/NavBar%20testing.png)

![Habit Tests](/documentation/testing/Habit%20testing.png)

![SignIn/Up Tests](/documentation/testing/signup%20testing.png)

![Task Tests](/documentation/testing/Task%20testing.png)

![Timer Tests](/documentation/testing/Timer%20testing.png)

### Unit Testing Backend

#### Definition: 
- Unit testing is a testing methodology where individual units or components of a software are tested independently to ensure that each unit works as designed. It helps verify that each part of the software performs as expected. Unit tests are typically small, focused, and isolated to test a specific piece of functionality. I've use unit testing for the DRF backend of this app to ensure that the testing on the frontend could be used to independently test the React components functionality and error handling.  

#### Habit Tests (`HabitListViewTests` and `HabitDetailViewTests`)

##### Habit List View Tests (`HabitListViewTests`):

1. **`test_logged_in_user_can_create_habit`**
   - Ensures that a logged-in user can successfully create a habit.
   - Verifies that the number of Habit objects increases by 1 and the response status is HTTP 201 (Created).

2. **`test_user_not_logged_in_cant_create_task`**
   - Verifies that a user who is not logged in cannot create a habit.
   - Checks that the response status is HTTP 403 (Forbidden).

##### Habit Detail View Tests (`HabitDetailViewTests`):

1. **`test_can_retrieve_habit_using_valid_id`**
   - Tests the ability to retrieve a habit using a valid ID.
   - Verifies that the retrieved habit's title matches the expected value and the response status is HTTP 200 (OK).

2. **`test_cant_retrieve_habit_using_invalid_id`**
   - Tests that attempting to retrieve a habit with an invalid ID results in HTTP 404 (Not Found).

3. **`test_user_can_update_own_habit`**
   - Validates that a logged-in user can update their own habit.
   - Checks that the habit's title is updated, and the response status is HTTP 200 (OK).

4. **`test_user_cant_update_another_users_habit`**
   - Ensures that a user cannot update another user's habit.
   - Verifies that the response status is HTTP 403 (Forbidden).

#### Task Tests (`TaskListViewTests` and `TaskDetailViewTests`)

##### Task List View Tests (`TaskListViewTests`):

1. **`test_can_list_tasks`**
   - Verifies the ability to list tasks for a logged-in user.
   - Checks that the response status is HTTP 200 (OK) and prints the data and length for manual inspection.

2. **`test_logged_in_user_can_create_task`**
   - Tests that a logged-in user can create a task successfully.
   - Verifies that the number of Task objects increases by 1, and the response status is HTTP 201 (Created).

3. **`test_user_not_logged_in_cant_create_task`**
   - Ensures that a user who is not logged in cannot create a task.
   - Checks that the response status is HTTP 403 (Forbidden).

##### Task Detail View Tests (`TaskDetailViewTests`):

1. **`test_can_retrieve_task_using_valid_id`**
   - Validates the ability to retrieve a task using a valid ID.
   - Verifies that the retrieved task's title matches the expected value, and the response status is HTTP 200 (OK).

2. **`test_cant_retrieve_task_using_invalid_id`**
   - Tests that attempting to retrieve a task with an invalid ID results in HTTP 404 (Not Found).

3. **`test_user_can_update_own_task`**
   - Ensures that a logged-in user can update their own task.
   - Checks that the task's title is updated, and the response status is HTTP 200 (OK).

4. **`test_user_cant_update_another_users_task`**
   - Verifies that a user cannot update another user's task.
   - Checks that the response status is HTTP 403 (Forbidden).

#### Category Tests (`CategoryListViewTests` and `CategoryDetailViewTests`)

##### Category List View Tests (`CategoryListViewTests`):

1. **`test_logged_in_user_can_create_category`**
   - Validates that a logged-in user can create a category.
   - Checks that the number of Category objects increases by 1, and the response status is HTTP 201 (Created).

2. **`test_user_not_logged_in_cant_create_task`**
   - Ensures that a user who is not logged in cannot create a category.
   - Checks that the response status is HTTP 403 (Forbidden).

##### Category Detail View Tests (`CategoryDetailViewTests`):

1. **`test_can_retrieve_category_using_valid_id`**
   - Tests the ability to retrieve a category using a valid ID.
   - Verifies that the retrieved category's title matches the expected value, and the response status is HTTP 200 (OK).

2. **`test_cant_retrieve_category_using_invalid_id`**
   - Validates that attempting to retrieve a category with an invalid ID results in HTTP 404 (Not Found).

3. **`test_user_can_update_own_category`**
   - Ensures that a logged-in user can update their own category.
   - Checks that the category's title is updated, and the response status is HTTP 200 (OK).

4. **`test_user_cant_update_another_users_category`**
   - Verifies that a user cannot update another user's category.
   - Checks that the response status is HTTP 403 (Forbidden).

### Bugs and Fixes

### Bug: Category not going through.

- **Description:** Whilst the category could be seen in the frontend, picked. And I could pull both the titles and the IDs for each category assigned to the user. They weren't passing through the form to the backend/server. I was getting a 400 error response when clicking create. So whilst we could see all the data, it wasn't being passed, therefore the task couldn't be created.

- **Expected Result:** the form to pass through correctly and a task to be created.

- **Actual Result:** error 400

- **Status:** Fixed

- **Fix:**
  - The serializer needed changing from category = CategorySerializer(required=False) to category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

### Bug: Error 400 on Task creation

- **Description:** Getting an Error 400 when trying to create a task. If you checked and then unchecked a task then it would go through but not until both checkbxes had been interacted with.

- **Expected Result:** You could pass through a Task without it being urgent or important.

- **Actual Result:** Error 400 on trying to create task. 

- **Status:** Fixed

- **Fix:**
  - On the Form initalisation, have important and urgent marked as false. I previously had them as "", treating them like a textbox or an integer, rather than a boolean value. I also tried null, before realising that this wouldn't work for a boolean value.

### Bug: Habit checks not changing the server or saving

- **Description:** The habit tracking part of my app and the checkbox for each day of the week. I had built the code to click and frontend update and the console logs all showed the right version of the T/F on the checkbox but the back end wasn't updating. The terminal was showing a PATCH 200, so it was going through fine but wasn't actaully updating the server. 

- **Expected Result:** [Describe what you expected to happen.]

- **Actual Result:** PATCH 200, says okay but server not chaning

- **Status:** Fixed

- **Fix:**
  - Read only was set in the backend for each of the checkboxes. So I needed to change the Read Only to false, this fixed the issue.

### Bug: Warning for Imp/Urg checkboxes

- **Description:** Getting a Warning when checking the Imp/Urg checkboxes and then clicking create to create a task. "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component"

- **Steps to Reproduce:**
  1. Click the add task button. '+' top right.
  2. Add all the details, including checking one or both of the Imp.Urg checkboxes. 
  3. Make sure all other details are correct and entered.
  4. Have the console open.
  5. Click create and view the warning.

- **Expected Result:** No error hopefully.

- **Actual Result:** The checkboxes and the whole functionality still work but the warning is still being thrown. It has no impact on the app other than this.

- **Status:** Open

- **Fix:**
  - N/A

## Deployment

### Final Deployment

For deployment I followed this Code Insitute guide. 

https://code-institute-students.github.io/advfe-unified-workspace/deployment/00-deployment

#### Step 1: Setting up WhiteNoise for static files
- install whitenoise==6.4.0
- freeze the requirements.txt
- create a static folder with `bash mkdir staticfiles`
- Add this code to settings Middleware `whitenoise.middleware.WhiteNoiseMiddleware`
- Add this code to settings Template `os.path.join(BASE_DIR, 'staticfiles', 'build')`
- In the static files section, add the STATIC_ROOT and WHITENOISE_ROOT variables and values to tell Django and WhiteNoise where to look for the admin static files and Reacts static files during deployment `STATIC_ROOT = BASE_DIR / 'staticfiles'`
`WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'`

#### Step 2: Adding the Route
- In the urls.py file of your Django Rest Framework application: 
  - Remove the root_route view from the .views imports
  - Import the TemplateView from the generic Django views, in the url_patterns list
  - Remove the root_route code and replace it with the TemplateView pointing to the index.html file
  - At the bottom of the file, add the 404 handler to allow React to handle 404 errors
  - Add api/ to the beginning of all the API URLs
  - excluding the path for the home page and admin panel

- In axiosDefault.js:
  - Now that we have changed the base path for the API route, we need to prepend all API requests in our react application with /api. 
  - Open the axiosDefaults.js file, comment back in the axios.defaults.baseURL and set it to "/api"

## Credits

- General references:
  - Stack Overflow
  - Code Institute Learning Platform
  - Django Documentation
  - React Documentation
  - Youtube
- Inspirations from existing Pomodoro and to-do list apps.