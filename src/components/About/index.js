import coverImage from "../../assets/cover/cover-image.jpg";
import React from 'react';

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">Who Am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                    lorem ipsum
                </p>
            </div>
        </section>
    )
};

export default About;