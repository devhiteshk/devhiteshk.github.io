import React from "react";
import assets from "./Links";
import Nav from "./Nav";

function Projects() {
    console.log(assets);
    return assets.map((e) => {
        return (
            <div key={e.h} className='project-card'>
                {e.nav ? <Nav /> : ""}
                <p className='project-description'>{e.h}</p>
                <div className='project-image'>
                    <img
                        src={e.src}
                        alt='Project description for my projects'
                    />
                </div>
                <p className='Tech'>{e.t}</p>
                <div className='project-links'>
                    {e.g ? (
                        <a href={e.g} target='_blank' rel='noreferrer'>
                            <i className='fa-brands fa-github fa-2x'></i>
                        </a>
                    ) : (
                        ""
                    )}
                    <a href={e.l} target='_blank' rel='noreferrer'>
                        <i className='fa fa-globe fa-2x'></i>
                    </a>
                </div>
            </div>
        );
    });
}

export default Projects;
