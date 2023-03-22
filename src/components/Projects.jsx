import React from 'react';

//https://tailwind-elements.com/docs/standard/components/cards/
//https://tailwindcss.com/docs/margin

//add images, figure that out


const Projects = () => {
  return (
    <section id="projects">

        <div class="flex justify-center ">
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6 ">
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
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6">
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
        <div class="flex justify-center mt-6 px-6">
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    React Portfolio
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Used React and tailwind to create a portfolio site that displays my past projects and assignments that were 
                completed throughout the six month UCI full stack coding bootcamp. It is as well an opportunity to showcase my front-end skills.
                </p>
            <div class="">
                <a href="https://github.com/MjDukic/myreactPortfolio">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REPO</span>
                </a>
            </div>
            </div>
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    NoSQL: Social Network API
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This was an assignment given to us to create a NoSQL database using Express.js for routing, a MongoDB database, 
                and the Mongoose ODM. The goal was to be able to build and structure the API, because the foundation of applications are data.
                </p>
            <div class="">
                <a href="https://github.com/MjDukic/wk18-NoSQL-SocialNetworkAPI">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REPO</span>
                </a>
            </div>
            </div>
        </div>
        <div class="flex justify-center mt-6 px-6">
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Anaxi Mapper
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Users can navigate to addresses or cities and create search parameters to 
                locate places of interest nearby, which will generate an overlay of 3d models 
                and markers for ease of viewing. Used MERN and rest API, tailwind, Jotai, 
                Google Maps API, typerscript, etc. 

                </p>
            <div class="">
                <a href="https://www.anaxi.app">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REPO</span>
                </a>
            </div>
            </div>
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mx-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    ORM: ECommerce - Back End
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This was an assignment given to us to build the back end of an e-commerce site by modifying starter code, and
                configure a working Express.js API to use Sequelize to interact with a MySQL database. The goal was to become more 
                familiar with back end development, and to be able to work with and test different databases overall.
                </p>
            <div class="">
                <a href="https://github.com/MjDukic/ORM-ECommerce-BackEnd">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REPO</span>
                </a>
            </div>
            </div>
        </div>
        
    </section>
    );
};

export default Projects;