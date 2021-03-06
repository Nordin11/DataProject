# Final Report

## The product
This product serves as a tool for understanding the financial system at a basic level via three visualizations to trigger users to get interested in the financial system and getting the users to do further research on the findings that the product presents.

## Technical design
### General 
For achieving this product there are certain tools used. The D3 visualization tool is the most common tool that is used. This is used for the visualizations of the data. This tool is a Javascript library, therefore Javascript is used for the execution of the library. For the gathering and scraping of the data the tool Pandas is used. Via Pandas the data is scraped through the Yahoo Finance API. The data is manipulated via another tool called NumPy. These tools that are used for the data gathering are all executed with Python and Python is executed via Jupyter Notebook. For the interactions between the containers I used the jQuery library. And last but not least for the visualizations to actually run, a webserver is used. For this HTML5, CSS and Bootstrap is used. <br />
![](doc/productoverview.png)  
### Infrastructure
#### Data Gathering
As I stated, there are certain tools used for the gathering and manipulating of the data. Everything that has to do with the data gathering and manipulating can be found in the python map. This map is a children of the map named code. The price-data can be found in the data map, also a children of the map named code. For executing the python file, one has to run it through Jupyter Notebook. I also put a Jupyter Notebook file in the python map. 
#### Data Visualization 
For the visualization I used JavaScript, and in javascript I wrote functions that are part of the D3 library. The javascript files can be found in the map "js", that is a children of the map "code". My product contains three visualizations. For every visualization I have a separate JS file with all the code that affiliates with that certain visualization. I also have a separate JS file where all the functions affiliating with the interactions can be found. The D3 library can be found in the D3 map as a children of the map "code"
#### Web 
To get the visualizations running on the web I used HTML. The file where html is written is the index.html file and this can be found in de code map. For the lay-out off the site I used CSS and Bootstrap. The CSS file can be found at the "css" map, that is a children of the "code" map.
### How does everything relate?
#### Web execution
To get everything executed together in one page HTML is used. In the HTML file every Javascript file is linked at the bottom of the body. The CSS files for the layout is linked in the header. I also gave every visualization a section with containers. This containers are being called by Javascript, later more about this. 
#### Implementing the data
For getting the network and line graph data in to Javascript I used the d3 functions d3.csv or d3.json. With this function I linked to the data file and via this function the data is gathered from the file. For the correlation matrix I copied the output from the python functions as variables in the matrix javascript file. 
Furthermore, I gave every container a seperate ID, by doing this the functions for the interactions and visualizations could be executed in to that space. Later more about this. 
#### The visualizations
##### The network module
The code for the network is written in the network.js file and has two parts. The slider and the network itself. At first the file contains the function that generates the slider. Second the code for the network can be found. For the canvas and visualization to appear on the web I called the network container from the html file. So this file has a relation to the html file.
##### The correlation matrix module
The correlation matrix code is written in the matrix.js file. This is written in a function called Matrix(). At the top of the file I call the data that is copied from the output of the python code. I also called the names of the stocks, this is needed for the interaction. In the matrix function everything is written in such a way so that the matrix function can be called with different datasets and in to different containers. Therefore I call every industry matrix in a different container with their own data above the Matrix() function. It relates to the html file because the containers where this matrix needs to be is being called. <br />
Also there is a relation with the line graph. In the line graph I gave every line a separate ID. When clicking on a cell, the name of the stock, which stated earlier, is being called and translated to the ID of the line. By doing this, I had the chance to give these lines another color, so that they pop out. This relation is stated in a function that is executed when clicking on a cell. 
#### The line graph module
The line graph code is written in the line.js file. This is written in the function load, that that is being called when te html is fully loaded. So this has a direct relation to the html. This furthermore has a relation to the correlation matrix as I earlier stated. 
#### The interaction module
All the code that has to do with the interactions is written in the interactions.js file. This file relates to the html, matrix and line file. As I earlier stated I gave every container a separate id. I did this so that the interactions could be done. I have some containers hidden in the first place. Thats why the code starts with hide() functions on all the containers that has to be hidden first. <br />
##### Dropdown
Every dropdown option in the menu has a href that executes a function in the interaction.js file when clicked on. This function relates to the correlation matrix div's. When clicking on the dropdown option the container id of the correlation matrix is being called and shown. 
##### The about button
The about is hidden first and when clicking on the about a function is being executed that shows the about div. 
##### Close buttons
Furthermore the correlation matrix, line graph and about div have close buttons. By clicking on a close button a function is being executed in the interactions file that closes the div and shows a placeholder. 

## Challenges and decisions 
On the road to the endproduct I had to make a lot of decisions and faced a lot of challenges. I made up a plan at first and then tried to stick to the plan. But sometimes you can come to the conclusion that the initial plan hadn't the best solution, so you had to move on to another way of achieving the end goal.
### The network
For the network there wasn't a good example on the internet to achieve my initial idea of the network. There was a example of a force-directed graph. This graph used data in a format that that wasn't like my data format. I only had a correlation matrix of the whole industry, that was all I had. This was a major challenge for me. I had to transform the data in to the format of the example. I decided to face the challenge and wrote an algorithm in python that goes through the matrix and gave the JSon format as output. I took this decision because I thought there wouldn't be a way to create a network of just a matrix. I always had to manipulate the data in to a proper format either way, I just didn't thought about this forehand. <br />
After I manipulated the data I still had to create the network via D3. I came to the conclusion that the example that I had was written in version 4 of d3. I already wrote the line graph code and correlation code in version 3. I decided to change the call function of version 4 to d3v4.function(). I decided this because I couldn't find the functions in d3 version 3 that were the same as the functions stated in the example. Maybe if I searched more it would've been found. So this was a time saving decision. The tradeoff here is that it is not ideal to use two versions of a library in one product, it can be a bit confusing. <br />
Now I was ready to create the network. But here came the other challenge. The example didn't work as wel on my data as it worked on the data of the example. My data contained a lot more links and the data was in another scale than the example data. After a day of debugging and trying to get my nodes properly aligned as the example, I decided to hard code the positions of the links and nodes and just draw it on the canvas. This was another timesaving decision. Also after all the decision worked out as a good decision, because after visualizing the network I saw that the links where just too much. It was a bit unclear. So now I could hardcode the nodes to make the network a bit wider so the unclarity was decreased. <br />
This still didn't do the job. I decided to make a slider that was linked to the correlation boundary. By this I wanted to give the user the chance to give himself more clarity. By sliding the slider the links that has a correlation under de slider value disappear. This decision was the best I could think of to give more clarity in the network considering time I had left. <br />
If I had more time I would switch up the network graph. After all the expectation I had of the network graph wasn't the same as the endproduct. I thought the network would be very clear in seeing every correlation between the nodes, but because of the amount of links it had the clarity was a problem. I would definitely wrote a better network considering the amount of links. What also could finish the network is when clicking on a company node all the correlations affiliated with that chosen company appeared. This would give more meaning to the network and fill in the gap that it has now. <br />
### The correlation matrix
For the correlation matrix the example I found fitted well in to my end goal. Therefore this wasn't much of a problem. The only challenge I had was the color mapping. I couldn't find a way to link two colormaps to one variable. I decided to make a colormap going from red(-1) to green(1). Although there isn't a good palette going from red to green it gave enough clarity. So it had the same effect as my initial idea. The tradeoff is here that the initial idea of color mapping in a shade of red when negative and shade of green when positive would give a bit more power to the visualization. Given more time I would've fixed this problem. <br />
The interaction with the dropdown menu was not a major challenge. I already had an idea in  how to do this as I stated in my initial design file. With some debugging I managed to finish this challenge. <br />
The interaction of the cell through the line graph was a challenge. I had to find a way to link the cells to the ID's I gave to the lines. After a day of thinking a bout this and trying things I managed to write a function doing this. I think thinking about this problem and solving it was the task I enjoyed the most. <br />
### The line graph
The line graph was the easiest visualization. I already made a line graph earlier in the minor so I could take that as an example. Also the data gathering for this visualization was the easiest. Only one thing was at that time a challenge. I had to write a function that took the date and rewrote it in to a proper format. This wasn't much of a problem. <br /> 
I did drove away from the initial idea. I wanted a separate line graph for each stock. After 2 days in te project I came to the conclusion that this was a stupid idea. By doing this I had to make 25 different function calls for each stock and 25 different div's that had to hide and show by clicking on a cell. I decided to put every line in one graph and show the lines with opacity and color when clicking on a cell. This was a decision based on the opinion that all those div's and function calls would make the side slower. The tradeoff here is that the y axis doesn't adjust to the max value of the clicked stock. But I figured that the tradeoff related to the initial idea would be much bigger. <br /> 

### Real time data
For finishing this product as a whole I want to link the data to realtime data. Then this product would be really usable by users. I didn't do this for the end product of this project because there isn't enough time for this left. The visualizations itself took all the time that was free for this product. I still want to add this to my product after this project. 

## What I learned 
I learned a lot about javascript and d3 in this month. At the earlier stage of the minor I also learned much, but applying this knowledge in to a project gave a much more detailed view on how these two things work and relate to each other. I really think that I already could manage front-end developing when I learn CSS a bit more. This project also contributed to my drive to learn way more about web programming. 



   


