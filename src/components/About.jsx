import React from "react";

//maybe add a picture of me
//github and linkedin avatars werent working, figure it out


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
                <div className="pt-7 text-center content-center gap-x-6 lg:justify-start">
                    <a href="https://www.linkedin.com/in/mirjanadukic/" className="text-md font-semibold leading-6 text-white p-3">
                        LINKEDIN <span aria-hidden="true">→</span>
                    </a>

                    <a href="https://github.com/MjDukic" className="text-md font-semibold leading-6 text-white p-3">
                        GITHUB <span aria-hidden="true">→</span>
                    </a>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQg8hUpIwPNdn9eoRU6oSiSc8DrIwYAlWMFo0ehwRzWmVQrj7STy4qjAVBolLAhYCMbtz-CcocX0hyY/pub" className="text-md font-semibold leading-6 text-white p-3">
                        RESUME <span aria-hidden="true">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default About;
