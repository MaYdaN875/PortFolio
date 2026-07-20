import React, { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import SectionContainer from './components/layout/SectionContainer'
import Footer from './components/layout/Footer'
import { ThemeProvider } from './context/ThemeContext'

function MainContent() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll Spy: Determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = (e, targetId) => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="font-sans antialiased overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      {/* Header Layout */}
      <Header
        activeSection={activeSection}
        onMenuOpen={() => setIsMobileMenuOpen(true)}
        onLinkClick={handleLinkClick}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />

      {/* BEGIN: Hero Section */}
      <SectionContainer
        id="home"
        className="hero-section flex flex-col justify-center items-center pt-24 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899] animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 opacity-80">
          <i className="fa-solid fa-planet-ringed text-[var(--color-primary-soft)] text-8xl transform rotate-12"></i>
        </div>
        <div className="absolute top-1/2 left-20 w-8 h-8 opacity-60">
          <i className="fa-solid fa-meteor text-[var(--color-sky)] text-3xl transform -rotate-45"></i>
        </div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-[var(--heading-color)]">
              Hi, I'm Angel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-soft)] to-[var(--color-sky)]">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium">
              The greatest programs starts with a small line code
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors text-3xl" href="#" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a className="text-[var(--color-text)] hover:text-[var(--color-sky)] transition-colors text-3xl" href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="button-primary px-6 py-2 rounded-full font-semibold shadow-lg" href="#">
                CV - Spanish
              </a>
              <a className="button-secondary px-6 py-2 rounded-full font-semibold shadow-lg" href="#">
                CV - English
              </a>
            </div>
          </div>
          <div className="relative flex justify-center mt-10 md:mt-0">
            {/* Astronaut Illustration */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-3xl"></div>
              <img
                alt="3D cute cartoon astronaut sitting on a purple planet"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl drop-shadow-[0_0_30px_rgba(124,58,237,0.3)] animate-[bounce_4s_ease-in-out_infinite]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0RxO08LAhYi02lwg2RSJKKkEuauP1-XBS_bQgYnvywVphxPlCFjqrnzajJosfF4yZKrfkaPK6SmWb1yuiNEceb6c8wAJwFEDTOZBvy27jldoO6ZHCAATa4latpf07tMj0Z9QRvzs1Tsib4qleQmorEbK_DTUabBnua7AEK4ehVE0VeCurYQ1Rv7XjaOvCQPbDwX54uLCWydsK_5uKvNd_87t74i6QBC_Dr634zKVGAmTMLqqeEklz"
              />
            </div>
          </div>
        </div>
        {/* Clouds Transition */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-auto text-[var(--color-border)] opacity-30 fill-current" viewBox="0 0 1440 320">
            <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="w-full h-auto text-[var(--color-border)] opacity-50 fill-current absolute bottom-0 transform translate-y-4" viewBox="0 0 1440 320">
            <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </SectionContainer>
      {/* END: Hero Section */}

      {/* BEGIN: About Section */}
      <SectionContainer
        id="about"
        className="about-section py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 relative inline-block mx-auto flex justify-center">
            <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] relative z-10">About</h2>
            <div className="absolute -bottom-2 w-full h-3 bg-[var(--color-star)]/30 rounded-full transform -rotate-2"></div>
            <i className="fa-solid fa-star text-[var(--color-star)] absolute -top-4 -left-6 text-xl"></i>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-[var(--color-text-secondary)] text-lg font-medium leading-relaxed">
              <p>
                I'm a passionate Full-Stack Developer who enjoys building modern, user-friendly web
                applications. I love turning ideas into real products and constantly learning new technologies
                to create better experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring space (virtually), listening to music, or
                sketching ideas for my next project.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[var(--color-border)]">
              <div className="absolute top-3 right-4 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Workspace Illustration */}
              <img
                alt="Developer Workspace"
                className="w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_dbrvhOmes5-5KJa8O81IcWFBOQlDJcgRhcou0YvUBuqo5iDi72N7G6epLhD6W4bPjCcABiKR-pTx9ZM89rVvo66FJVxfMPCTdC0jpEmLWuGcfAqhe3ImmwiBs8SI2LOqwqntgEaOwwPbhigHUQe6I5YDdTySfdsei7Kn2LCQhKaTCMUEU1jQeCnHA1vZ_udhTCgqTbc_T3h-UDJRojDrB9in5bZfyS5cqvTNWS0YNwKqdNPjcDtO"
              />
            </div>
          </div>
          {/* Stats/Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="stat-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:shadow-xl transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-md">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div>
                <h4 className="font-bold text-[var(--heading-color)]">Experience</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">3+ Years</p>
              </div>
            </div>
            <div className="stat-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:shadow-xl transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary-soft)] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-md">
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <h4 className="font-bold text-[var(--heading-color)]">Projects</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">20+ Completed</p>
              </div>
            </div>
            <div className="stat-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:shadow-xl transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-md">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div>
                <h4 className="font-bold text-[var(--heading-color)]">Focus</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Clean Code & Great UX</p>
              </div>
            </div>
          </div>
        </div>
        {/* Clouds Transition to Work */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="w-full h-16 md:h-24 text-[var(--color-sky)] opacity-40 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              className="shape-fill"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div>
      </SectionContainer>
      {/* END: About Section */}

      {/* BEGIN: Work Section */}
      <SectionContainer
        id="work"
        className="work-section py-24 overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-4xl opacity-80 animate-bounce" style={{ animationDuration: '4s' }}>
          <i className="fa-solid fa-hot-air-balloon text-[var(--color-cloud)]"></i>
        </div>
        <div className="absolute top-40 right-10 text-5xl opacity-80 animate-bounce" style={{ animationDuration: '5s' }}>
          <i className="fa-solid fa-blimp text-[var(--color-primary-soft)]"></i>
        </div>
        <div className="absolute bottom-40 right-1/4 text-2xl text-[var(--color-sky)] opacity-60">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="absolute top-60 left-1/4 text-3xl text-[var(--color-sky)] opacity-60">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex justify-center">
            <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] relative inline-block">
              Work
              <div className="absolute -bottom-1 w-full h-2 bg-[var(--color-sky)]/40 rounded-full"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="project-card rounded-3xl overflow-hidden group">
              <div className="p-4 bg-black/10 border-b border-[var(--card-border-color)] flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <img
                alt="TaskFlow"
                className="w-full h-48 object-cover border-b border-[var(--card-border-color)] opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhJgrQ8svUx2XorVld6Q1uTx5e1yNBS0MU4eEFk_S2DnQv7EE1GxX7HGbCl6xKFsQYzU89zBMseZ88fy44C_t4p960ddoXnsx7mKic-tJf5SiVSsO1aeyZhmW95aZYyc_s2ygiEprPBbCbJIiPFrWvJ2HIsPJomWgo8lwhDIkm-e86iu6Ssp_oMuMjP-OA743S9ECxOXqcPmT416Go91wO8mY1wwgp1m3v5qnWEabzgY-mY0ShYb9"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--heading-color)] mb-2">TaskFlow</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                  A productivity app to manage tasks, projects, and teams efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">React</span>
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">Node.js</span>
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">MongoDB</span>
                </div>
                <a className="text-[var(--color-primary-soft)] hover:text-[var(--color-primary-hover)] font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card rounded-3xl overflow-hidden group">
              <div className="p-4 bg-black/10 border-b border-[var(--card-border-color)] flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <img
                alt="Space Explorer"
                className="w-full h-48 object-cover border-b border-[var(--card-border-color)] opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTZrfA_FVPFkxZB7T6FNfOfP6-15J-qmUCscPO5ob7UtHTdJMPTyhCh_nEL9h2i-nUEWqh1wkEGeROPHYKL-YbtspGbAv3xV0jPMwpZOBpTnPec_x316YR7eKHIe924qlCMfuyJ3LwlN3Sl7QKQJtXjiONmW_bh7_dSGW63-QmwxuFpjQVqaKilJMkhimCX4eqdiuPFn_rd0GuglUo3MCxZgiaggUPSyNyLWV4xJ063dcYjHxpbFa7"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--heading-color)] mb-2">Space Explorer</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                  Interactive space information hub with beautiful animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">Next.js</span>
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">TypeScript</span>
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">Tailwind</span>
                </div>
                <a className="text-[var(--color-primary-soft)] hover:text-[var(--color-primary-hover)] font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card rounded-3xl overflow-hidden group">
              <div className="p-4 bg-black/10 border-b border-[var(--card-border-color)] flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <img
                alt="ShopSphere"
                className="w-full h-48 object-cover border-b border-[var(--card-border-color)] opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gWiWYKUdd2HrnbN3N_rGCmR7GMRTAmWsA2aB0xBKQZ7-MRtrd3gfapmNoioDJB0eFu8R5MhNlIpxQPGYqeYYD8bYSSDxn_NVhTIoDEU5I0ObYEUeVXPfwPoh0yMfkNEw7LqNUniTMs8TxJxr6XUbNV5tEvtnsAMEKYICorzr7OEa-im1evbR9v8PoVk0LBcK25GVktQQAPPwxjo5hmguY7LRWTEib2DY-vP9Rff5SyO9WjYGxj8o"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--heading-color)] mb-2">ShopSphere</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                  E-commerce platform with cart, payments, and order tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">React</span>
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">Express</span>
                  <span className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]">PostgreSQL</span>
                </div>
                <a className="text-[var(--color-primary-soft)] hover:text-[var(--color-primary-hover)] font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* END: Work Section */}

      {/* BEGIN: Skills Section */}
      <section className="skills-section relative py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-heading text-[var(--heading-color)] inline-block relative">
              Skills & Technologies
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-primary-soft)]/40 rounded-full"></div>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {/* Tech Icons */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-orange-500 border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-html5"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">HTML5</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-blue-500 border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">CSS3</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-yellow-400 border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-js"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-2xl group-hover:-translate-y-2 transition-transform text-blue-600 border border-[var(--icon-box-border)] font-bold font-mono">
                TS
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-cyan-400 border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-react"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-[var(--color-text)] border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-neos"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-green-500 border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-node-js"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-green-600 border border-[var(--icon-box-border)]">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-cyan-500 border border-[var(--icon-box-border)]">
                <i className="fa-solid fa-wind"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-orange-600 border border-[var(--icon-box-border)]">
                <i className="fa-brands fa-git-alt"></i>
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Git</span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Skills Section */}

      {/* BEGIN: Contact Section */}
      <SectionContainer
        id="contact"
        className="contact-section py-32 overflow-hidden"
      >
        {/* Landscape Background Illustration */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Sunset Landscape"
            className="w-full h-full object-cover object-bottom opacity-70 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJynEpQOrggzJMw8qnTS_JxLyTb7suPPQWqqy5EXoGGrNM68fuSRnBxNFVhKLHHguusF5PVtf84MkfR4rUWJZfgdlrjWuny2da5LhWmtaX809T-jKskCLRWzSsH3vLPRz9A8RX3OfKR6WbFhuAv3i3afglSoMvTz3fxAsxzPlvU3Af30DWASwsWaU6RfkMrZfJ10PPjRKbVnzWP4fQ5WsiND1AqVX2Z8IkVri0fm6qAmJPtXX1natN"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] mb-6">Let's Connect!</h2>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-10 font-medium text-lg">
            I'm always open to new opportunities, interesting projects, or just a friendly hello. Feel free to reach
            out!
          </p>
          <div className="flex flex-col items-center gap-4 mb-10">
            <a className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-primary-soft)] transition-colors bg-[var(--icon-box-bg)] px-6 py-2 rounded-full backdrop-blur-md border border-[var(--icon-box-border)]" href="mailto:hello@maydan.dev">
              <i className="fa-solid fa-envelope text-xl text-[var(--color-primary)]"></i>
              <span className="font-semibold">hello@maydan.dev</span>
            </a>
            <div className="flex items-center gap-3 text-[var(--color-text)] bg-[var(--icon-box-bg)] px-6 py-2 rounded-full backdrop-blur-md border border-[var(--icon-box-border)] cursor-default">
              <i className="fa-solid fa-location-dot text-xl text-red-400"></i>
              <span className="font-semibold">Somewhere on Earth 🌍</span>
            </div>
          </div>
          <button className="button-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto shadow-2xl hover:scale-105 transform">
            <i className="fa-solid fa-paper-plane"></i>
            Send Me a Message
          </button>
        </div>
        {/* Gradient Overlay at bottom for footer transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--footer-bg)] to-transparent z-10"></div>
      </SectionContainer>
      {/* END: Contact Section */}

      {/* Footer Layout */}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}

export default App
