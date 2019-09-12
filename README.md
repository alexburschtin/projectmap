nyc_restaurants


Mina Bansal, Alex Burschtin, Mayobanex Martinez, Denise Person 

Proposal: A dynamic dashboard of NYC for people to find great bars and restaurants

Data: Yelp API for restaurant information

The Yelp API will be used for data gathering. After gathering over 100 restaurants/bars/breweries we will create a MongoDB database that will store several data points per restaurant:

“name”
“address1"
“latitude”
“longitude”
“rating”
“review_count”
“price”
“phone”
We will most likely focus on lower manhattan and brooklyn to narrrow the scope of the dashboard/map. This will enable us to gain deeper insight into those corresponding neighborhoods vs less research if we had a larger scope. We will include a Python Flask–powered RESTful API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).

We will probably have 2 sets of drop downs to help the user narrow their search on our application (WIP):

1st (Location type): Restaurant, Bar, Brewery/Craft Beer Store
2nd (Yelp $): $, $$, $$$, $$$$
Visualization plan - stretch goal is something similar to the infatuation map website where you can filter for the above parameters/drop down to find a restaurant/bar.

Map Limits - 23rd St down in Manhattan.

Your visualization must include a Python Flask–powered RESTful API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).

Your project should fall into one of the below four tracks: ○ A custom “creative” D3.js project (i.e., a nonstandard graph or chart) ○ A combination of web scraping and Leaflet or Plotly ○ A dashboard page with multiple charts that update from the same data ○ A “thick” server that performs multiple manipulations on data in a database prior to visualization (must be approved)

Your project should include at least one JS library that we did not cover.

Your project must be powered by a data set with at least 100 records.

Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).

Your final visualization should ideally include at least three views.

