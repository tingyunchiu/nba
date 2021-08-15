# to run this project on your local computer
$ git clone https://github.com/tingyunchiu/nba.git  
$ npm install  
$ npm start  

# the structure of this project
```
--App.js 
	--header
		--Header.js, Header.css: show logo and avatar icon
	--menu
		--Menubar.js, Menubar.css: show menu (players list)
	--main
		--search
			--Search.js, Search.css: 
				--dropdown menu to search team
				--input box to search player's name
			--findTeams.js: find all the teams for dropdown menu
		--showchart
			--ShowChart.js, ShowChart.css: 
				--button to open modal
				--modal for a popup image(ChartPlot.js)
					--ChartPlot.js
		--chart
			--ChartPlot.js, ChartPlot.css: show chart of team with less than 15 players
			--calTeamSize.js: caculate team size
		--table
			--Table.js, Table.css: display table for players according to search results
				--Last Column: click button to show player data(PlayerCard)
			--PlayerCard,js, PlayerCard.css: card to show player's record
```
# library used: 
1. material-ui, devexpress: for ui styling, data grid and chart 
2. react-router-dom for routing 