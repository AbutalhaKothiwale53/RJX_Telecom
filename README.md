# RJX_Telecom
A Telecom website where you can get data packs information for your internet

the server file in named as db.json and to run it use below command
npx json-server --watch db.json --port 1200

AddPlan.js
* On successful submission, the success message should be displayed as shown below (below Add Plan button)
Plan Created successfully with id 1001
* In case of any error in submission, error message should be as shown below
Something went wrong


ViewPlan.js
* On click of 'Delete' button from the above view, the corresponding plan details should be from the database.
* After the successful deletion, "success mesage" should be displayed along with the available plan cards.
* if there is any error in deleting the plan cards, then error message should be displayed.

Bugs
1. Same error message is displaying all over the fields
2. Yes / No radio button is sending wrong data, condition needs to be added
3. Form validation needs to be done.



run this command to host DB [ npx json-server --watch db.json --port 1200 ]
