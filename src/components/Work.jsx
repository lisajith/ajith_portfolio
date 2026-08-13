/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

const works = [
  {
    imgSrc: '/images/syva.png',
    title: 'SyVA — Synergy Virtual Academy',
    category: 'Full Stack',
    roleBadge: 'Co-Founder & Architect',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Vercel'],
    description: 'Co-founded and engineered SyVA, a modern digital learning ecosystem integrating interactive courses, live exams, attendance tracking, and digital certificates.',
    projectLink: 'https://syvalearn.vercel.app',
    featured: true
  },
  {
    imgSrc: '/images/project1.png',
    title: 'Ajith Malle Personal Portfolio',
    category: 'Frontend',
    roleBadge: 'Owner & Developer',
    tags: ['React', 'Tailwind CSS', 'SEO', 'UI/UX'],
    description: 'Personal developer portfolio created by Ajith Malle to showcase full-stack projects, design systems, and technical architecture.',
    projectLink: 'https://ajithmalleportfolio.vercel.app',
    featured: false
  },
  {
    imgSrc: '/images/project2.png',
    title: 'Disney+ 2.0 Web App',
    category: 'Web App',
    roleBadge: 'Creator',
    tags: ['React', 'TMDB API', 'Tailwind CSS'],
    description: 'High-performance media discovery app featuring movie streaming previews, responsive UI design, and real-time API integrations.',
    projectLink: 'https://disney2-0.vercel.app',
    featured: false
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Web App'];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  const flagship = works.find(work => work.featured);

  // Advanced Google JSON-LD Schema explicitly linking Ajith Malle -> SyVA
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ajith Malle",
      "jobTitle": "Full Stack Developer & Co-Founder",
      "url": "https://ajithmalleportfolio.vercel.app",
      "sameAs": [
        "https://syvalearn.vercel.app",
        "https://ajithmalleportfolio.vercel.app"
      ],
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "Synergy Virtual Academy (SyVA)",
        "url": "https://syvalearn.vercel.app"
      },
      "creator": works.map(work => ({
        "@type": "SoftwareApplication",
        "name": work.title,
        "url": work.projectLink,
        "author": {
          "@type": "Person",
          "name": "Ajith Malle"
        }
      }))
    }
  };

  return (
    <section className="section py-20" id="work">
      {/* Injecting Structured Data for Google Search Engine Crawlers */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-400 mb-4">
            <Sparkles size={14} />
            Ajith Malle Portfolio
          </div>
          
          <h2 className="headline-2 text-3xl md:text-5xl font-bold text-zinc-100 reveal-up">
            Ajith Malle — Co-Founder & Featured Projects
          </h2>
          
          <p className="mt-4 text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed reveal-up">
            Explore web development projects built by <strong className="text-zinc-200">Ajith Malle</strong>, co-founder of <strong className="text-sky-400">SyVA (Synergy Virtual Academy)</strong>.
          </p>
        </div>

        {/* Flagship Spotlight: SyVA Virtual Academy */}
        {flagship && (
          <div className="mb-14 reveal-up">
            <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-sky-950/30 p-6 md:p-10 shadow-2xl hover:border-sky-500/60 transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Image Preview */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-zinc-800 group relative">
                  <img 
                    src={flagship.imgSrc} 
                    alt="SyVA Virtual Academy - Co-Founded by Ajith Malle" 
                    className="w-full h-auto max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-sky-500 text-zinc-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <ShieldCheck size={14} /> Flagship Platform
                  </div>
                </div>

                {/* Information */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 rounded-full mb-3 border border-sky-500/20">
                      {flagship.roleBadge}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-extrabold text-zinc-100 mb-4">
                      {flagship.title}
                    </h3>

                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                      {flagship.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {flagship.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-mono border border-zinc-700/50">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={flagship.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:bg-sky-400 active:scale-95 w-full md:w-fit shadow-lg shadow-sky-500/20"
                  >
                    Visit SyVA Platform
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 reveal-up">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20 font-bold'
                  : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-700/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredWorks.map(({ imgSrc, title, tags, projectLink, description, roleBadge }, key) => (
            <ProjectCard 
              key={key} 
              imgSrc={imgSrc} 
              title={title} 
              roleBadge={roleBadge}
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
