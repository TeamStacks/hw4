===============================================================================
                             CSE134B TEAM STACKS
                               COINFLIP - HW4
===============================================================================

Special thanks for Dream Team for making the mock-up on which we built on top of
and extended.


#   Application Use 

Navigation:
	Start with index.html as the login/signup page. All other pages are named
	as such:

	index.html - Login/signup page with demo
	wire2.html - Home page with Total Coin Value and graphs for all coins
	wire3.html - My Gold page with details on owned gold coins
	wire4.html - Gold Item page that looks at a specific gold coin
	wire5.html - New Item page that is the mock-up for adding a new coin

	Clicking on the AG (silver) or PT (platinum) boxes on the side nav will
	simply navigate you to your inventory pages, split into AU, AG, and PT

Responsive Design:
	THe high-fidelity mock switches to mobile view when the screen size 
	reaches a width of 1000px or below.


# # # # # # # # # # # # # # # 
#     Validation Issues     #
# # # # # # # # # # # # # # #	

HTML:
	All the HTML validation checked out so there was no problem there.


# # # # # # # # # # # # # # # 
#    Implementation Tech    #
# # # # # # # # # # # # # # #

HTML:
	(From Dream Team spec) We used HTML5 so this technology was pretty straightforward. Perhaps
	the one noteworthy thing is our use of SVG, particularly for icons
	from IcoMoon.io (source: https://icomoon.io/) to save us the time
	of actually designing our own icons

SASS/CSS:
	(From Dream Team spec) We wrote all of our CSS using SASS that compiled into CSS. We used 
	SASS in a way that the syntax was identical to that of simply using
	CSS. The only additions we utilized SASS for were as follows:

		1) SASS Variables - easier refactoring of color themes
		2) SASS Nesting   - easier for the developer to nest attributes, mainly
			                used as a security fall-back against conflicting 
			                styling as we were merging files and work
		3) SASS Mixins    - For any CSS attributes that needed all the extra
		                    prefix declarations for moz, webkit, etc., we used
		                    simple @include mixins from SASS to avoid having to
		                    type all the prefixes ourselves.

    Otherwise, all of our SASS was written exactly the same as CSS. We simply
    employed the SASS to save some time and organize common themes easier. 

    The SASS file is located in sass/style.scss.
    The CSS file is located in style/style.css.


Javascript:
	(From Dream Team spec) This was the JavaScript already included in the wireframe:

		1) Importing top navigation, side navigation, and footer on all pages.
		   This allowed us to be able to just change the common elements in one 
		   place and have it affect all 5 pages rather than have to go through 
		   every single page for changes. This was done through simple document
		   write statements (with extra input in to the function for the side
		   navigation, this let us easily specify which side navigation button
		   should be 'pressed'). These import functions are all in main.js and
		   are:
		   		- loadTopNav()
		   		- loadTopNavPersist()
		   		- loadSideNav(selected)
		   		- loadFooter()

		2) Creating the graphs. This was done using a library called Chart.js.
		   Source: http://www.chartjs.org/

		3) Handling navigation toggle buttons. This is when the application is 
		   shrunk down to mobile size where the toggle buttons of information
		   and chart appear. Instead of having those buttons navigate to
		   different pages, we thought it made more sense that they would 
		   toggle what information is already on the page. This was done with
		   jQuery on click events. 
		   Source: https://jquery.com/

	For the actual application functionality, we used libraries (please refer to 
	Libraries Used section in this README).


Parse:
	Our backend uses Parse, so if you would like to see a live demo of our app (working 
	with Facebook log in as well, please use http://teamstacks.parseapp.com).

		1) OAuth and Login. We used Parse as our account management system.

		2) Database. Parse also provided us a database, to which we stored all
		   data such as inventory and accounts and coin information.

		3) Storing Images. We also used Parse to store images that were uploaded of each
		   of the coins.


Facebook:
	We used Facebook as well to also provide users another way of logging into our application.

# # # # # # # # # # # # # # # 
#     Libraries Used        #
# # # # # # # # # # # # # # #	

Chart

# # # # # # # # # # # # # # # 
#        Thank you!         #
# # # # # # # # # # # # # # #

Best,
CSE134B Team Stacks

