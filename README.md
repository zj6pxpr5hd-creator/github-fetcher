# GitHub Fetcher

This is a web application that uses the Github REST API to fetch data about the repositories of a user and displays it.

Building this project helped me learn how APIs work, how to make a GET request, how to show a loading state, how to handle errors and how to format the data to be shown to the user.

Disclaimer: the request is made without the use of a personal key (unauthenticated request) which means that is only possible to make 60 request/hour.
This was a conscious decision, since there was no good way to hide the key inside the code since the app is fully client-side.