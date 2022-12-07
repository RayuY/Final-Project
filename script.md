
# Your demo should be around 5 minutes long. For your demo, you should include details on the
tech stack, as well as more technical obstacles and learning curves.

!! RUN DB:RESET



###

# (Guest)
- TableBae is built using the PERN stack, for the demo we've added a button using useContext to manage roles quickly so we don't need to deal with the Login/Register. so as a user is browsing through the website, I click a restaurant to go to that specific restaurant's page with more details, to see more pictures. # (Transition user1)

# (Make/Cancel a reservation)
- Now let's take a look at what a user can do, and we are going to sign in as Aldwin. He currently has no reservations and let's just arbitrarily book one for him, and he should get a text from twilio any moment. Sweet.. and if anything happens he can just cancel it.

# (List table, Edit -> )
- Now let's see what a owner can do. Owner can list tables for his restaurant ..(list tables), EDIT(click img) restaurant ..(change picture)

# (Create Restaraunt -> homepage)
- We've limited the number of restaurants to one per owner to avoid monopoly, so let's switch to another owner ..(add a restaurant)

- That's all the core features for our app. Now i'll pass to Aldwin who's going to talk a bit about the challenges we had during the project.

###

-Hi Everyone I'm Ray and i'm a fullstack developer, before lighthouse labs I used to be a sushi chef.

### Introductions - tell them your name and your background!
                    <<45-60 seconds total, so 15-20 seconds a person>>"



Hi Everyone I'm Matt and I've retired from my days of raiding and pillaging to become a full baked potato

Hello everyone!! My name is dskfjalsjfalsflskh, but you can call me Aldwin. I'm a front-end and back-end developer which takes more time to say than fullstack developer.

and we present to you TableBae.
"

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