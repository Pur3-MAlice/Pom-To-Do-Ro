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

## Introduction

Pom-to-do-ro is a productivity application designed to help users manage their habits, tasks, and work sessions using the Pomodoro technique. The application provides a platform for users to register, log in, create and track habits, manage tasks, and utilize a Pomodoro timer for focused work sessions.

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

### Kanban Agile

Used GitHub Projects for Agile project management, organizing tasks into sprints and tracking progress. Here is a link to the kanban board used [Pom-to-do-ro Kanban](https://github.com/users/Pur3-MAlice/projects/8/views/1?sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Labels)

### Research

Explore existing Pomodoro and to-do list apps to gather insights into design and functionality.

### Wireframes

Create wireframes for the app's UI, including the Pomodoro timer, to-do list, and user authentication screens.

### Database Schema

Define the data structure for storing user preferences and task data.

## Development

### Frontend

Develop the React frontend, incorporating components for the Pomodoro timer, to-do list, and user authentication.

### Backend

Build the Django Rest Framework (DRF) backend to handle user authentication and data storage.

### Connect Frontend to Backend

Establish communication between the frontend and backend, enabling data retrieval and updates.

### State Management

Implement state management in React for handling the app's state, including timer progress and task data.

## Testing

### Manual Testing

Thoroughly test each feature, including the Pomodoro timer, to-do list CRUD operations, and user authentication.

### Bugs and Fixes

Document and address any bugs encountered during testing, ensuring a smooth user experience.

## Deployment

### Final Deployment

Deploy the Pom-to-do-ro app to a hosting platform, providing instructions for setting up and running the application.

## Credits

- General references:
  - Stack Overflow
  - Code Institute Learning Platform
  - Django Documentation
  - React Documentation
- Inspirations from existing Pomodoro and to-do list apps.
- Icons and graphics from [source].

## Additional Information

### Database

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