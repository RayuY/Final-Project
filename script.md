
# Your demo should be around 5 minutes long. For your demo, you should include details on the
tech stack, as well as more technical obstacles and learning curves.

!! RUN DB:RESET

- start at "ABOUT PAGE" .. intros
- show "HOMEPAGE" as "Guest" .. takes a quick tour over the site.
- selected restaurant displays info of current avaiable tables. 
- login as "user1 (MATT)" .. starts showing features that a user can do.
- show "YOUR RESERVATIONS" .. user can check current reservations. + twilio
- cancel reservation .. 

- login as "User2(Aldwin)"
- show "YOUR RESERVATIONS" (it's always aldwin)
- go back to "HOMEPAGE"
- browse "HOMEPAGE"
- click on new restaurant created by "owner2"
- reserve new restaurant
- show/mention text from "twilio" regarding confirming of reservation
- end

- login as "Owner1"
- show "Manage restaurants"
- edit restaurant info
- edit seats available info

- login as "Owner2"
- show "Manage restaurants"
- create a new restaurant
- edit seats avaiable info


### Introductions - tell them your name and your background!
                    <<45-60 seconds total, so 15-20 seconds a person>>"

-Hi Everyone I'm Ray and Lighthouse forces me to say that i'm a fullstack developer and I used to be a sushi chef.

Hi Everyone I'm Matt and I've retired from my days of raiding and pillaging to become a full baked potato


 Hello everyone!! My name is dskfjalsjfalsflskh, but you can call me Aldwin. I'm a front-end and back-end developer which takes more time to say than fullstack developer.

and we present to you TableBae.
"

( "ALDWIN" ) ~ 40 secs ~
### Inspiration for the project (the User Story or Pitch)
                    <<30-45 seconds>>"
Table Bae is an app that helps restaurant owners fill their seats in a quick and efficient way. This also gives foodies a tool to help find new spots to eat or view and reserve tables at their go-to restaurants without having to wait in person. As a restaurant owner, they'll be able to list their restaurant, and post the number of tables that they have open. And as a foodie (like my wife), they'll be able to view restaurants that have open tables posted and reserve it for their dining pleasure.

Now I'll be passing you off to Ray here who will be walking you through the app and also the tech stacks that we used.
"

( "RAY" )
### Walk-through of the main features, including tech stack and challenges
                    <<120-150 seconds>>"
- React front-end
  - using state
  - learning/using useContext
- Express back-end
  - 
- Postgres database
- Packages
  - React Dom
  - React Slick / Carousel
    - to display all the restaurants
  - Axios
    - to call and post to back-end
  - Twilio 
    - to send an sms text confirmation when making a reservation

"


( "ALDWIN" ) ~ 1 min ~
### Challenges
"
Our biggest challenge was when a user books a reservation. The user is supposed to be brought into the confirmation screen. The error occurs because we're doing both an api get request right after doing a post request. We were aware of why it's happening and how to fix it but we just couldn't write the code to implement the fix. This led to a few hours of googling and pair programming before the issue was resolved.

A challenge that we all enjoyed taking on was integrating different node packages like react slick. We were all convinced even before the project started that we were going to use a carousel to show all the restaurants. Just an FYI... it was done by day 3.

Overall, the challenges were frustrating but the sense of relief after fixing a bug or implementing a new package into our app was worthwhile.

Now I'll pass you over to Matt here who will talk about how we worked as a team.
"


( "MATT" )
### How you worked as a team
                    <<22 seconds>>"
Our team first came together during midterms and We've been collaborating ever since. We built great communication and teamwork skills over the second half of bootcamp and we became aware of each others strengths and how to best leverage them. This final project was a worthy challenge for all of us, but we were able to continue to utilize our great communication and teamwork to overcome each new obstacle.
"


( "MATT" )
### Further Developments - in the future, we would like to...
                    <<20 seconds>>"


In the future some additional functionalities we would like to add would be... 

-A RESTAURANT RANDOMIZER... for the more adventerous types

-LINKS TO EACH RESTAURANTS MENU AND SOCIAL MEDIA


we plan to add...

-A UNIQUE FILTERING FUNCTIONALITY to each of the carousels on our home page

-FAVORITES FEATURE ... for users to add their favorite restaurants.