/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ imgSrc, title, description, tags, projectLink, classes = '' }) => {
  return (
    <div 
      className={`relative p-5 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-sky-500/40 hover:bg-zinc-800/80 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-sky-500/10 group ${classes}`}
    >
      {/* Image Container with Zoom Effect */}
      <figure className="img-box overflow-hidden rounded-xl mb-5 border border-zinc-800">
        <img 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
          src={imgSrc} 
          alt={title} 
          loading="lazy"
        />
      </figure>
      
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          
          {/* New Description Rendering */}
          {description && (
            <p className="text-sm text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="flex flex-wrap items-center gap-2 relative z-20">
            {tags.map((label, key) => (
              <span 
                className="h-7 text-xs font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 grid items-center px-3 rounded-lg" 
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        
        {/* Floating Animated Icon */}
        <div className="absolute top-5 right-5 bg-sky-500/10 text-sky-400 w-10 h-10 rounded-lg grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-sky-500/20">
          <span className="material-symbols-rounded text-xl" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      {/* SEO & Security optimized external link */}
      <a 
        href={projectLink} 
        className="absolute inset-0 z-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`View the ${title} project live`}
      ></a>
    </div>
  );
}

// Fixed 'prototype' to 'propTypes' and updated 'tags' to array
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array.isRequired, 
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard;
