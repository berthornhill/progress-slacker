# Progress Slacker

![demoGif](frontend/public/img/Progress_Slacker.gif)

# [Live Site](http://progress-slacker.herokuapp.com/#/)

## About

Whether its the grueling pace of the curriculum, the terrifying exams, fear of falling behind, the lack of sleep, or the culmination of all these elements and more, app Academy, as well as success therein, is a mountain for anyone to climb. Sucess requires an immense amount of hard work, self discipline, perseverance, collective support from the community at hand and, perhaps the most import component of all, humor.

Enter projectSlacker. The *unofficially-official*© meme-generator designed to compliment and enhance the core app/Academy suite of educational tools and resources.

progressSlacker is a space for all past, present, and future app/Academy cohorts to share in the 'lols' by providing users with an easy-to-use interface in which they can select image templates, or upload their own, and add text or captions.

## Overview:

We set out to build Project Slacker with the MERN Stack and we challenged ourselves to handle the image rendering without any external libraries or assisting software. With these goals in mind, we developed the application with Mongoose hosting the database. The backend utilizes

Our frontend utilizes React to fetch data from AWS, create content, and store it within MongoDB. To that end, our user interface will include features mentioned above, of meme creation and template creation. Upon login, users will have their dashboard rendered, which will include their feed, meme creation, and template creation.

## "Meme Generator" with following functionality:

1. Display all user created memes in the "Meme Feed"
   - Actively display previously created and newly created memes.
   - Sort by category.
2. User Authentication and protection where:
   - Users must create an account/sign-in to create templates and memes.
3. Meme Template CRUD Cycle
   - Accepts user uploaded images and stores them as templates for future "memeification".
4. Meme CRUD Cycle
   - Retrieves templates and allows user to select and edit a template by adding dynamically resizable text.
   - Saves created memes to the database for all visitors to view.
5. Like/Unlike CRUD Cycle
   - Signed in users can like and unlike memes.
   - Signed in users can see a page of all the memes they've liked.
6. Hosted on Heroku

## Tech Stack and Libraries

Project Slacker is built with the MERN Stack framework utizing `MongoDB`, `Express`, `React`, and `Node`. In addition to these we utilized the `HTML5 CanvasAPI` to handle the image processing and editing.

1. `MongoDB` - All data storage.
2. `Express` - Middleware and data pass between frontend and backend.
3. `React/Redux` - Front store, state, views and routing management.
4. `Node` - Serverside code.
5. `CanvasAPI` - Image processing, compression, and `DataURI` generation.
6. Other Libraries - `bcryptjs`, `body-parser`, `concurrently`, `dotenv`, `ejs`, `express`, `jsonwebtoken`, 'validator', 'multer', `passport`,`passport-jwt`
7. Heroku - for hosting.

## The Beard & Headset Guy Team is made up of (aka the developers) :

### Daniel Ahn: [GitHub](https://github.com/iamdanahn), [LinkedIn](https://www.linkedin.com/in/iamdanahn/), [AngelList](https://angel.co/u/daniel-ahn-1)

### Mike Criollo: [GitHub](https://github.com/mkcriollo), [LinkedIn](https://www.linkedin.com/in/mike-criollo-b38377206/), [AngelList]()

### Bert Hill: [GitHub](https://github.com/berthornhill), [LinkedIn](https://www.linkedin.com/in/bert-hill-0324b120/), [AngelList](https://angel.co/u/bert-hill-2)

### Paul Stonebreaker: [GitHub](https://github.com/wpstonebraker), [LinkedIn](https://www.linkedin.com/in/paul-stonebraker-a8b034207/), [AngelList](https://angel.co/u/paul-stonebraker)
