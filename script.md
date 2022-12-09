
# Your demo should be around 5 minutes long. For your demo, you should include details on the

!! RUN DB:RESET


###

# (Guest)
- For the demo we've added a button to switch roles quickly so we don't need to deal with the Login/Register. 

# (Make/Cancel a reservation)
- Now let's go ahead and sign in as Aldwin. So as a user you can check your reservations. Aldwin currently has no reservations but i know he's hungry cause he's a big boy. I also know that he likes ramens. Get a text from twilio any second. Sweet.. and if there's a change of plan he can just simply cancel it.

# (List table, Edit -> )
- Next I'm going to sign in as a restaurant owner, and I can manage my restaurant. i can list tables EDIT(click img) restaurant ..(change picture)
- That's all the core features for our app. Now I'll pass back to Aldwin who's going to talk about some of challenges we encountered during the project.

###

- Hi Everyone I'm Ray and i'm a fullstack developer. Before lighthouse labs I used to be a sushi chef.






















( "ALDWIN" ) ~ 40 secs ~
### Inspiration for the project (the User Story or Pitch)
                    <<30-45 seconds>>"
TableBae is an app that helps restaurant owners fill their seats in a quick and efficient way. This also gives foodies a tool to help find new spots to eat or view and reserve tables at their go-to restaurants without having to wait in person. As a restaurant owner, they'll be able to list their restaurant, and post the number of tables that they have open. And as a foodie (like my wife), they'll be able to view restaurants that have open tables posted and reserve it for their dining pleasure.

Now I'll be passing you off to Ray here who will be walking you through the app and also talk about the tech stacks that we used.
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
Our biggest challenge was implementing the reservation booking feature. We had issues using a get request immediately after a api post request. This led to some hours of googling and pair programming before we could resolve the issue.

A challenge that we all enjoyed taking on was integrating different node packages like react slick. We were all convinced even before the project started that we were going to use a carousel to show all the restaurants.

The challenges we faced were frustrating, but the sense of accomplishment we felt after fixing a bug or implementing a new feature in our app were well worth it.


Now I'll pass you over to Matt who will talk about how our team worked together.
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