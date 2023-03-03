import React from "react";

//maybe add handwave after h1

function About() {
    return (
        <section id="about">
            <div className="pt-20 pb-60 content-center">
                  <h1 className="text-center text-4xl font-bold text-stone-800 tracking-wide">
                      Hello, my name is Mirjana Dukic.
                  </h1>
                  <p className="pt-6 text-center text-2xl font-bold text-neutral-700 tracking-wide break-all"> 
                        I am an aspiring full-stack developer, driven to learn and grow
                  </p>
            </div>
        </section>
    );
};

export default About;
