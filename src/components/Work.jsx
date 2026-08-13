/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles, ExternalLink } from 'lucide-react';

const works = [
  {
    imgSrc: '/images/syva.png',
    title: 'SyVA Virtual Academy',
    category: 'Full Stack',
    tags: ['Web-design', 'Development', 'Firebase'],
    description: 'A modern virtual academy platform unifying online learning, course management, attendance, and progress tracking.',
    projectLink: 'https://syvalearn.vercel.app',
    featured: true
  },
  {
    imgSrc: '/images/project1.png',
    title: 'Personal Portfolio',
    category: 'Frontend',
    tags: ['Web-design', 'Development', 'SEO'],
    description: 'Modern developer portfolio built to showcase personal projects, technical skills, and interactive UI design.',
    projectLink: 'https://ajithmalleportfolio.vercel.app',
    featured: false
  },
  {
    imgSrc: '/images/project2.png',
    title: 'Disney+ 2.0 Clone',
    category: 'Web App',
    tags: ['Web-design', 'Development', 'API'],
    description: 'Responsive media streaming platform clone featuring live movie discovery, categories, and trailer integration.',
    projectLink: 'https://disney2-0.vercel.app',
    featured: false
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Web App'];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects dynamically based on category tab
  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  const featuredProject = works.find(work => work.featured);

  // JSON-LD Schema for Google Search indexing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ajith Malle Projects",
    "description": "A collection of web development projects and portfolio highlights by Ajith Malle.",
    "itemListElement": works.map((work, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": work.title,
      "url": work.projectLink,
      "author": {
        "@type": "Person",
        "name": "Ajith Malle"
      }
    }))
  };

  return (
    <section className="section py-20" id="work">
      {/* Injecting JSON-LD Schema for Search Engines */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-400 mb-4">
            <Sparkles size={14} />
            Portfolio Highlights
          </div>
          
          <h2 className="headline-2 text-3xl md:text-4xl font-bold text-zinc-100 reveal-up">
            Ajith Malle — Featured Projects
          </h2>
          
          <p className="mt-3 text-zinc-400 max-w-xl text-sm md:text-base reveal-up">
            Explore a curated collection of full-stack web applications, interactive platforms, and modern web development projects.
          </p>
        </div>

        {/* Hero Spotlight: Flagship Project */}
        {featuredProject && (
          <div className="mb-14 reveal-up">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 md:p-10 shadow-2xl transition-all duration-300 hover:border-sky-500/40">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Preview Image */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-zinc-800 group">
                  <img 
                    src={featuredProject.imgSrc} 
                    alt={featuredProject.title} 
                    className="w-full h-auto max-h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info & Call-To-Action */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-sky-400 bg-sky-500/10 rounded-full mb-3">
                      Flagship Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-3">
                      {featuredProject.title}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={featuredProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-sky-400 active:scale-95 w-fit"
                  >
                    View Live Application
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 reveal-up">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                  : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredWorks.map(({ imgSrc, title, tags, projectLink, description }, key) => (
            <ProjectCard 
              key={key} 
              imgSrc={imgSrc} 
              title={title} 
              tags={tags} 
              description={description}
              projectLink={projectLink} 
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
