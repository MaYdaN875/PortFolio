import React from 'react'

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden bg-[#0f0c29]">
      {/* BEGIN: Header */}
      <header className="fixed top-0 w-full z-50 glass-panel py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary">
            <i className="fa-solid fa-user-astronaut text-2xl text-space-dark"></i>
          </div>
          <span className="font-heading text-2xl font-bold text-white tracking-wide">MaYdaN</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a className="text-white hover:text-secondary font-semibold transition-colors border-b-2 border-white" href="#home">Home</a>
          <a className="text-white/80 hover:text-white font-semibold transition-colors" href="#about">About</a>
          <a className="text-white/80 hover:text-white font-semibold transition-colors" href="#work">Work</a>
          <a className="text-white/80 hover:text-white font-semibold transition-colors" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer group">
            <span className="text-white font-semibold flex items-center gap-1">
              EN <i className="fa-solid fa-chevron-down text-xs"></i>
            </span>
          </div>
          <button className="text-white hover:text-secondary transition-colors">
            <i className="fa-solid fa-moon text-xl"></i>
          </button>
        </div>
      </header>
      {/* END: Header */}

      {/* BEGIN: Hero Section */}
      <section className="relative min-h-screen bg-hero-gradient flex flex-col justify-center items-center pt-24 overflow-hidden" id="home">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899] animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 opacity-80">
          <i className="fa-solid fa-planet-ringed text-purple-400 text-8xl transform rotate-12"></i>
        </div>
        <div className="absolute top-1/2 left-20 w-8 h-8 opacity-60">
          <i className="fa-solid fa-meteor text-blue-300 text-3xl transform -rotate-45"></i>
        </div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading">
              Hi, I'm Angel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium">
              The greatest programs starts with a small line code
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a className="text-white hover:text-primary transition-colors text-3xl" href="#">
                <i className="fa-brands fa-github"></i>
              </a>
              <a className="text-white hover:text-blue-400 transition-colors text-3xl" href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="bg-primary/80 hover:bg-primary text-white px-6 py-2 rounded-full font-semibold transition-colors backdrop-blur-sm border border-purple-400" href="#">
                CV - Spanish
              </a>
              <a className="bg-space-purple/80 hover:bg-space-purple text-white px-6 py-2 rounded-full font-semibold transition-colors backdrop-blur-sm border border-purple-500" href="#">
                CV - English
              </a>
            </div>
          </div>
          <div className="relative flex justify-center mt-10 md:mt-0">
            {/* Astronaut Illustration */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-purple-900/50 rounded-full blur-3xl"></div>
              <img
                alt="3D cute cartoon astronaut sitting on a purple planet"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl drop-shadow-[0_0_30px_rgba(167,139,250,0.4)] animate-[bounce_4s_ease-in-out_infinite]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0RxO08LAhYi02lwg2RSJKKkEuauP1-XBS_bQgYnvywVphxPlCFjqrnzajJosfF4yZKrfkaPK6SmWb1yuiNEceb6c8wAJwFEDTOZBvy27jldoO6ZHCAATa4latpf07tMj0Z9QRvzs1Tsib4qleQmorEbK_DTUabBnua7AEK4ehVE0VeCurYQ1Rv7XjaOvCQPbDwX54uLCWydsK_5uKvNd_87t74i6QBC_Dr634zKVGAmTMLqqeEklz"
              />
            </div>
          </div>
        </div>
        {/* Clouds Transition */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-auto text-purple-200 fill-current" viewBox="0 0 1440 320">
            <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="w-full h-auto text-pink-100 fill-current absolute bottom-0 transform translate-y-4" viewBox="0 0 1440 320">
            <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: About Section */}
      <section className="relative py-20 bg-pink-100/50 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-200" id="about">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 relative inline-block mx-auto flex justify-center">
            <h2 className="text-5xl font-bold font-heading text-space-purple relative z-10">About</h2>
            <div className="absolute -bottom-2 w-full h-3 bg-yellow-300/40 rounded-full transform -rotate-2"></div>
            <i className="fa-solid fa-star text-yellow-400 absolute -top-4 -left-6 text-xl"></i>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-space-purple text-lg font-medium leading-relaxed">
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
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/40">
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
            <div className="bg-purple-400/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-white/50 shadow-lg hover:shadow-xl transition-shadow cursor-default group">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div>
                <h4 class="font-bold text-space-purple">Experience</h4>
                <p className="text-sm text-space-purple/80">3+ Years</p>
              </div>
            </div>
            <div className="bg-purple-400/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-white/50 shadow-lg hover:shadow-xl transition-shadow cursor-default group">
              <div className="w-12 h-12 rounded-full bg-space-purple text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <h4 class="font-bold text-space-purple">Projects</h4>
                <p className="text-sm text-space-purple/80">20+ Completed</p>
              </div>
            </div>
            <div className="bg-purple-400/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-white/50 shadow-lg hover:shadow-xl transition-shadow cursor-default group">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div>
                <h4 class="font-bold text-space-purple">Focus</h4>
                <p className="text-sm text-space-purple/80">Clean Code & Great UX</p>
              </div>
            </div>
          </div>
        </div>
        {/* Clouds Transition to Work */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="w-full h-16 md:h-24 text-blue-400 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              className="shape-fill"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* END: About Section */}

      {/* BEGIN: Work Section */}
      <section className="py-24 bg-sky-gradient relative overflow-hidden" id="work">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-4xl opacity-80 animate-bounce" style={{ animationDuration: '4s' }}>
          <i className="fa-solid fa-hot-air-balloon text-pink-500"></i>
        </div>
        <div className="absolute top-40 right-10 text-5xl opacity-80 animate-bounce" style={{ animationDuration: '5s' }}>
          <i className="fa-solid fa-blimp text-purple-600"></i>
        </div>
        <div className="absolute bottom-40 right-1/4 text-2xl text-blue-200">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="absolute top-60 left-1/4 text-3xl text-blue-100">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex justify-center">
            <h2 className="text-5xl font-bold font-heading text-space-dark relative inline-block">
              Work
              <div className="absolute -bottom-1 w-full h-2 bg-blue-500/30 rounded-full"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-space-dark rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-purple-500/20 group">
              <div className="p-4 bg-space-light border-b border-white/10 flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <img
                alt="TaskFlow"
                className="w-full h-48 object-cover border-b border-white/5 opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhJgrQ8svUx2XorVld6Q1uTx5e1yNBS0MU4eEFk_S2DnQv7EE1GxX7HGbCl6xKFsQYzU89zBMseZ88fy44C_t4p960ddoXnsx7mKic-tJf5SiVSsO1aeyZhmW95aZYyc_s2ygiEprPBbCbJIiPFrWvJ2HIsPJomWgo8lwhDIkm-e86iu6Ssp_oMuMjP-OA743S9ECxOXqcPmT416Go91wO8mY1wwgp1m3v5qnWEabzgY-mY0ShYb9"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">TaskFlow</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  A productivity app to manage tasks, projects, and teams efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">React</span>
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">Node.js</span>
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">MongoDB</span>
                </div>
                <a className="text-primary hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bg-space-dark rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-purple-500/20 group">
              <div className="p-4 bg-space-light border-b border-white/10 flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <img
                alt="Space Explorer"
                className="w-full h-48 object-cover border-b border-white/5 opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTZrfA_FVPFkxZB7T6FNfOfP6-15J-qmUCscPO5ob7UtHTdJMPTyhCh_nEL9h2i-nUEWqh1wkEGeROPHYKL-YbtspGbAv3xV0jPMwpZOBpTnPec_x316YR7eKHIe924qlCMfuyJ3LwlN3Sl7QKQJtXjiONmW_bh7_dSGW63-QmwxuFpjQVqaKilJMkhimCX4eqdiuPFn_rd0GuglUo3MCxZgiaggUPSyNyLWV4xJ063dcYjHxpbFa7"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Space Explorer</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  Interactive space information hub with beautiful animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">Next.js</span>
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">TypeScript</span>
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">Tailwind</span>
                </div>
                <a className="text-primary hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bg-space-dark rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-purple-500/20 group">
              <div className="p-4 bg-space-light border-b border-white/10 flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <img
                alt="ShopSphere"
                className="w-full h-48 object-cover border-b border-white/5 opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gWiWYKUdd2HrnbN3N_rGCmR7GMRTAmWsA2aB0xBKQZ7-MRtrd3gfapmNoioDJB0eFu8R5MhNlIpxQPGYqeYYD8bYSSDxn_NVhTIoDEU5I0ObYEUeVXPfwPoh0yMfkNEw7LqNUniTMs8TxJxr6XUbNV5tEvtnsAMEKYICorzr7OEa-im1evbR9v8PoVk0LBcK25GVktQQAPPwxjo5hmguY7LRWTEib2DY-vP9Rff5SyO9WjYGxj8o"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">ShopSphere</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  E-commerce platform with cart, payments, and order tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">React</span>
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">Express</span>
                  <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/5">PostgreSQL</span>
                </div>
                <a className="text-primary hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Work Section */}

      {/* BEGIN: Skills Section */}
      <section className="py-16 bg-blue-100/50 bg-gradient-to-b from-blue-100 to-pink-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-heading text-space-purple inline-block relative">
              Skills & Technologies
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-purple-400/40 rounded-full"></div>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {/* Tech Icons */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-orange-500 border border-gray-100">
                <i className="fa-brands fa-html5"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">HTML5</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-blue-500 border border-gray-100">
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">CSS3</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-yellow-400 border border-gray-100">
                <i className="fa-brands fa-js"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl group-hover:-translate-y-2 transition-transform text-blue-600 border border-gray-100 font-bold font-mono">
                TS
              </div>
              <span className="text-xs font-semibold text-gray-600">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-cyan-400 border border-gray-100">
                <i className="fa-brands fa-react"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-black border border-gray-100">
                <i className="fa-brands fa-neos"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-green-500 border border-gray-100">
                <i className="fa-brands fa-node-js"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-green-600 border border-gray-100">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-cyan-500 border border-gray-100">
                <i className="fa-solid fa-wind"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform text-orange-600 border border-gray-100">
                <i className="fa-brands fa-git-alt"></i>
              </div>
              <span className="text-xs font-semibold text-gray-600">Git</span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Skills Section */}

      {/* BEGIN: Contact Section */}
      <section className="relative py-32 bg-sunset-gradient overflow-hidden" id="contact">
        {/* Landscape Background Illustration */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Sunset Landscape"
            className="w-full h-full object-cover object-bottom opacity-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJynEpQOrggzJMw8qnTS_JxLyTb7suPPQWqqy5EXoGGrNM68fuSRnBxNFVhKLHHguusF5PVtf84MkfR4rUWJZfgdlrjWuny2da5LhWmtaX809T-jKskCLRWzSsH3vLPRz9A8RX3OfKR6WbFhuAv3i3afglSoMvTz3fxAsxzPlvU3Af30DWASwsWaU6RfkMrZfJ10PPjRKbVnzWP4fQ5WsiND1AqVX2Z8IkVri0fm6qAmJPtXX1natN"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold font-heading text-white mb-6">Let's Connect!</h2>
          <p className="text-gray-200 max-w-lg mx-auto mb-10 font-medium text-lg">
            I'm always open to new opportunities, interesting projects, or just a friendly hello. Feel free to reach
            out!
          </p>
          <div className="flex flex-col items-center gap-4 mb-10">
            <a className="flex items-center gap-3 text-white hover:text-pink-300 transition-colors bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10" href="mailto:hello@maydan.dev">
              <i className="fa-solid fa-envelope text-xl"></i>
              <span className="font-semibold">hello@maydan.dev</span>
            </a>
            <div className="flex items-center gap-3 text-white bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 cursor-default">
              <i className="fa-solid fa-location-dot text-xl text-red-400"></i>
              <span className="font-semibold">Somewhere on Earth 🌍</span>
            </div>
          </div>
          <button className="bg-primary hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] flex items-center gap-3 mx-auto transform hover:-translate-y-1">
            <i className="fa-solid fa-paper-plane"></i>
            Send Me a Message
          </button>
        </div>
        {/* Gradient Overlay at bottom for footer transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
      </section>
      {/* END: Contact Section */}

      {/* BEGIN: Footer */}
      <footer className="bg-space-dark py-12 relative z-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <i className="fa-solid fa-user-astronaut text-xl text-space-dark"></i>
            </div>
            <span className="font-heading text-2xl font-bold text-white tracking-wide">MaYdaN</span>
          </div>
          <p className="text-gray-400 text-sm mb-6 max-w-md">
            Building ideas. Crafting experiences. Creating the future.
          </p>
          <div className="flex gap-6 mb-8 text-2xl">
            <a className="text-gray-400 hover:text-white transition-colors" href="#">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="text-gray-400 hover:text-blue-400 transition-colors" href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            © 2024 MaYdaN. All rights reserved.
          </p>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  )
}

export default App
