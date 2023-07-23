# Feature that has to be worked upon
User Ratings and Comments: This feature is currently not added. One simple way to complete this is to make a data structure for every movie , that data structure will hold movie details, user upvotes and comments by users. The default value of the object will be given if movie wasn't searched/ is not already present in the database. For larger set of data(Scaling) we can use relational databases to opmise loading time. 
# Features added in movie-search
1. Account Setup
2. API Understanding
3. HTML Page Creation : An HTML page is created.
4. Pagination: By default OMDB doesn't send more than 10 movies data. For representation purposes, I have sliced the data into 3-3 movies per page. Currently the next button feature isn't functional.
5. Search Functionality: Search is enabled which sends user requests to the OMDB server via the api to get the list of response.
6. Movie Details Section: Details of the movie(Poster, Title, Year) are visible.
