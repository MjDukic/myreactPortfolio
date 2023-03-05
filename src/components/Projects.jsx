import React from 'react';


const Projects = () => {
  return (
    <section id="projects">
        <div class="flex justify-center">
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Movie Review Site
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Implemented server side APIs, HTML, CSS, client side storage,
                    and javascript to create a site where users can choose a movie that they 
                    have watched and leave their personal review
                </p>
            <div class="">
                <a href="https://github.com/MjDukic/MovieReviewSite">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REPO</span>
                </a>
            </div>
            </div>
        </div>
        <div class="flex justify-center p-3">
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    isGame:True
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Implemented Node and Express to create a RESTful API, 
                Handlebars as the template engine, MySQl and Sequelize ORM for the database, 
                created authentication with express-session and cookies, and used MVC paradigm.
                 Created game with help from Tiled and Phasier.io technologies, deployed on Heroku. 
                 The web game called “isGame: True” tests your reaction time and speed, the goal is to 
                 avoid all of the enemies and get as many stars as you can
                </p>
            <div class="">
                <a href="https://github.com/MjDukic/project2-isGame-true">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REPO</span>
                </a>
            </div>
            </div>
        </div>
    </section>
    );
};

export default Projects;