/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({imgSrc, title, tags, projectLink, classes}) => {
  return (
    <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors '+classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img className='img-cover' src={imgSrc} alt={title} loading='lazy'/>
        </figure>
        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className='title-1 mb-3'>
                    {title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                    {
                        tags.map((label, key) => (
                            <span className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg " key={key}>{label}</span>
                        ))
                    }
                </div>
            </div>
            <div className="bg-sky-400 text-zinc-950 w-11 h-11 rounded-lg grid place-items-center shrink-0">
                <span className="material-symbols-rounded" aria-hidden="true">
                    arrow_outward
                </span>
            </div>
        </div>

        <a href={projectLink} className='absolute inset-0' target='_blank'></a>

    </div>
  )
}

ProjectCard.prototype = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard