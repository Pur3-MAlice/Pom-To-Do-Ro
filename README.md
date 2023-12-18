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
3. [Development](#development)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Connect Frontend to Backend](#connect-frontend-to-backend)
   - [State Management](#state-management)
4. [Testing](#testing)
   - [Manual Testing](#manual-testing)
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
| Prioritize and Categorize Tasks | 4           | 3                           |
| Task Notifications        | 3                | 4                           |
| Pomodoro Timer            | 4                | 4                           |
| Admin Features            | 4                | 3                           |
| Backend Integration (API) | 4                | 3                           |
| Error Handling and Validation | 3            | 4                           |
| Testing and Deployment    | 4                | 4                           |

### M/S/C Must (High Priority):

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


AOAOOFEHSFEEEOWJIWEJIOFWOJIEFJIOWEFIJOFWEIOJEWFOJIFWEOJIFWEOJIEFWOJIFEWIJOFWEJIOFWEJIOWEFOJIEFWOIJEFWJOJIOWEFOJIFWEOJIFWOIJEWFIJOEFWOJIFEWOJIDSKSDFFDMKFDSMKKFSDMMKLDFSMKLDSFMKFDSLMKFDSLMKDFSMKLFDSMKLFDS

### Wireframes

Here are the wireframes for this project. 

![Desktop Wireframe](/documentation/setup/desktop%20wireframe.png)

![Tablet Wireframe](/documentation/setup/tablet%20wireframe.png)

![Mobile Wireframe](/documentation/setup/mobile%20wireframe.png)


### Database Schema

Define the data structure for storing user preferences and task data.

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

#### 7. Connect to Backend

Integrated the frontend with the DRF backend. Using API calls (Axios) to interact with my backend's endpoints for tasks, habits, categories, and user/profile.

#### 8. Styling and Responsiveness

Applied styles to components using CSS and React Bootstrap. Ensured that my app was responsive and provides a consistent user experience across different devices.

#### 9. Testing

Then after all the above I wrote manual tests for components and features. I then asked my Computer Scientist Friends to perform the thorough testing to catch bugs, which I would go on to fix. To be honest I did small testing throughout the development process, to ensure the app was being built correctly. Go to [Testing](#testing) for more details.


#### 10. Reused components 

In my app there are three main components that are being re-used in a significant way. Task, Habit, and fetchCategories. The Task component is being used by the TaskList component, and being mapped over making sure each task that is owned by the user is being sent to the TastList to be shown on the frontend. The Habit component is also used in a simialar way. The other significant reused component is the fetchCategories component, which is used by the CreateTask and EditTask alike. Due to the fact that both of these forms are reliant on the category dropdown menu. The category dropdown menu needs to pull and then map over all categories, find the title and the id, pass the title of the category to the frontend and once chosen pass the id to the backend.

#### 11. Features

Habits
![Habit Tracker](/documentation/images/habit_tracker_table.png)

![Add_Habit](/documentation/images/add_habit_modal.png)

Timer
![Timer](/documentation/images/pomodoro_timer.png)

![Timer Inputs](/documentation/images/timer_inputs.png)

![Timer Countdown](/documentation/images/timer_visual_countdown.png)

NavBar

Tasks

### Backend

Build the Django Rest Framework (DRF) backend to handle user authentication and data storage.

### Connect Frontend to Backend

Establish communication between the frontend and backend, enabling data retrieval and updates.

## Testing

### Manual Testing Frontend

Thoroughly test each feature, including the Pomodoro timer, to-do list CRUD operations, and user authentication.

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

### Bug: [Brief Bug Description]

- **Description:** [Provide a brief description of the bug.]

- **Expected Result:** [Describe what you expected to happen.]

- **Actual Result:** [Describe what actually happened.]

- **Status:** [Open/Closed/Fixed]

- **Fix:**
  - [Brief description of the fix implemented.]

---

### Bug: Error 400 on Task creation

- **Description:** Getting an Error 400 when trying to create a task. If you checked and then unchecked a task then it would go through but not until both checkbxes had been interacted with.

- **Expected Result:** You could pass through a Task without it being urgent or important.

- **Actual Result:** Error 400 on trying to create task. 

- **Status:** Fixed

- **Fix:**
  - On the Form initalisation, have important and urgent marked as false. I previously had them as "", treating them like a textbox or an integer, rather than a boolean value. I also tried null, before realising that this wouldn't work for a boolean value.

## Deployment

### Final Deployment

Deploy the Pom-to-do-ro app to a hosting platform, providing instructions for setting up and running the application.

## Credits

- General references:
  - Stack Overflow
  - Code Institute Learning Platform
  - Django Documentation
  - React Documentation
  - Youtube
- Inspirations from existing Pomodoro and to-do list apps.