My Awesome Project

This application lets you create your own personal grocery inventory management system where you can create your own categories and the list of items associated with each categories. you can also delete and add categories and items.

Link to project: http://recruiters-love-seeing-live-demos.com/

alt tag

How It's Made:

Tech used: HTML, CSS, JavaScript, Express, Node, EJS, MongoDB,

For this product, I used the basic principle of Model View Architecture to create a simple application. I created a server using express which upon receiving a request from the client sends it to the controller(homeController) through route(MainRoutes) which then takes the help of model(Item/Category) to extract data from the database(MongoDB) and sends the data to the view(index.ejs/item.ejs) to create a unique display for each client.

Optimizations

(optional)

To make the application more secure, it would be a great idea to create a login system where each user can create their own list and not interfere with others. it would also be a great idea to add a single view page for each item that describes each item in detail.

Lessons Learned:

I learned to be more patient while approaching a problem and look for a solution from a different perspective. for instance, when I was having problem with connecting public css folder to apply designs to the views folder, I took a step back and found out I needed to provide the proper route to the css folder in ejs file under views folder. It was definitely, an aha moment where a simple issue led to all sorts of problems.

Examples:

Take a look at these couple examples that I have in my own portfolio:

Palettable: https://github.com/alecortega/palettable

Twitter Battle: https://github.com/alecortega/twitter-battle

Patch Panel: https://github.com/alecortega/patch-panel
