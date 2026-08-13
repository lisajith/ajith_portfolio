/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ 
  imgSrc, 
  title, 
  description, 
  tags, 
  projectLink, 
  roleBadge, 
  classes = '' 
}) => {
  return (
    <div 
      className={`relative p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800/80 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 group flex flex-col justify-between ${classes}`}
    >
      <div>
        {/* Image Container with Zoom Effect & Role Badge */}
        <figure className="relative img-box overflow-hidden rounded-2xl mb-5 border border-zinc-800/80">
          <img 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
            src={imgSrc} 
            alt={`${title} - Ajith Malle Project`} 
            loading="lazy"
          />
          
          {/* Custom Role Badge for SyVA / Key Projects */}
          {roleBadge && (
            <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md border border-sky-500/40 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 shadow-lg">
              {roleBadge}
            </div>
          )}
        </figure>
        
        {/* Content */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          
          {description && (
            <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Footer: Tags & Arrow Icon */}
      <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 relative z-20">
          {tags.map((label, key) => (
            <span 
              className="text-[11px] font-mono text-zinc-300 bg-zinc-800/80 border border-zinc-700/60 px-2.5 py-1 rounded-md" 
              key={key}
            >
              #{label}
            </span>
          ))}
        </div>

        {/* Floating Arrow CTA */}
        <div className="bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-zinc-950 w-9 h-9 rounded-xl grid place-items-center transition-all duration-300 shrink-0 border border-sky-500/20">
          <span className="material-symbols-rounded text-lg" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      {/* Anchor Link for SEO Crawlers */}
      <a 
        href={projectLink} 
        className="absolute inset-0 z-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`Open ${title} developed by Ajith Malle`}
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  roleBadge: PropTypes.string,
  classes: PropTypes.string
};

export default ProjectCard;
