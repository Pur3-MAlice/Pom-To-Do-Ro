Sprint 1 

- Agile perspective but with some waterfall techiniques. I wanted to ensure that the back end was functioning and able to perform the basics of what the app needed before moving on to the fron end react counterpart. Hence why some of the tasks, and sprints fall across many epics and stories. To fullfill one of these stories would need both the front and back end to be functioning together and correctly, but I couldn't build a house without first laying the foundations. So to combat any frustations, or premptives features and to stick to the MVP. Sprints were desgined first of all around the backend functionality, and then in the sense of completing user strorie and epics. In this sprint, one User story was completed "User Story 11 Implement user logout functionality -- As a user, I want to be able to log out of my account for security and privacy." Although the front end has not been built, logged in profiles now do have the FUNCTION to log out, even if there technically ins't an app to log out of yet.

YOU CAN FIND MY STORIES, EPICS AND TASKS HERE. PLEASE NOTE THEIR INTERCONNECTIVITY.


Sprint 2 

- Whilst sprint 1 was focused on the user function and creating the ability to log in, log out and some authentication based on editsing there, (all backend fucntions, none front end). Spritn two was mainly compromised as the 'TASK SPRINT'. In this spirnt the function was to create the task app, build out the model and serialiser and made teh backend dajngo rest task views and creations. All of which happned, I also implemented the important/urgent booleans, as well as the user date time picker for the due_date. This sprint built the foundation of the User's ability to add tasks.


Sprint 3

- Re-factored the profile and the tasks views for simplicity, created the catogoreis app and attached the FK to the task. Built tests for tasks app and placed in validation based on these. User validation handling to come with REACT frontend. Whilst the agile method of working in sprint on collective tasks that build to a User story is a great place to start, it becomes difficult when having to build a whole backend before starting. As I know i need to build the logic and functionaility to alot of these user stories and epics before I can start finishing them off fully. I'm finding that alot of tasks can be done, but sprints aren't focusing on stories, but at this point it is backend vs frontend. But this is my prefernce of work, I would rather get the logic down first, then build the frontend and from that point attempt tweaks.

Sprint 4

- In spritn four, I foucused primiarly on getting the habit app up and running. Showing to the server and making sure that the information being captured and pulled through was relevant to the app. For this sprint, i also needed to include the logic not only for the habit tracking as a whole, but for the chain_count. The habit being marked as completed = True, needed to reset at mignight, but the chain_count needed to count +1 for each habit completed in a row. So if you miss one day of checking off the habit, then the count resets to 0. I think for this the logic is basically done, but I can't test this out until tomorrow, when i can add in more completions for one of the habits. By this point the majority of the backend has been made, now i need to sure up validation and errors, testing and making comments in the code and getting things to PEP8 standards. 

Sprint 5 
- This sprint was focused on ensuring that the backend API created all the information i needed for the app, as well as worked well undertesting. So this sprint, did not nesicarily move the dail forward in terms of EPICs or user stories, but did ensure that moving forward the backend API will be sound, searchable and holds the information relavant to the overall app. this includes creating tests for nearly all the apps (task, habit, category), adding in search and filters to the listviews and then editing the serializers to show the correct data. And then also slightly tweaking the serializers and views to present the data exactly how it is required. 