import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import profile from './assets/profile.jpg'

function App() {

  const [resumePopup, setResumePopup] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'AmbiTrack',
      overview:
        'AmbiTrack is a smart ambulance tracking and emergency response system designed for smart-city integration. It helps reduce emergency response delays using live tracking and optimized routing.',
    },
    {
      title: 'SkyHawk',
      overview:
        'SkyHawk is a drone-powered safety and emergency response project focused on surveillance, disaster monitoring, and quick-response assistance.',
    },
    {
      title: 'Phishing Email Detection',
      overview:
        'A machine learning project that detects phishing emails using NLP and classification techniques to improve cybersecurity awareness.',
    },
    {
      title: 'Secure Login System',
      overview:
        'A Flask and SQL based authentication system with secure login, registration, session handling, and password protection.',
    },
    {
      title: 'Password Strength Checker',
      overview:
        'A cybersecurity-focused password validation tool that checks password strength and provides security suggestions.',
    },
  ]

  const handleResume = () => {
    setResumePopup(true)

    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Daniya_Tazeen_Resume.pdf'
      link.click()
      setResumePopup(false)
    }, 2500)
  }

  return (
    <div className="bg-[#030712] text-white min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full float"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[120px] rounded-full float"></div>

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold gradient-text">
            Daniya.dev
          </h1>

          <div className="hidden md:flex gap-8 text-lg">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-cyan-400 text-2xl mb-6"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[120px] font-black leading-none"
          >
            Daniya
            <span className="gradient-text"> Tazeen</span>
          </motion.h1>

          <div className="mt-10 text-2xl md:text-4xl font-semibold text-gray-300 h-[80px]">

            <TypeAnimation
              sequence={[
                'Software Developer',
                1500,
                'Cybersecurity Enthusiast',
                1500,
                'Hackathon Builder',
                1500,
                'AI Explorer',
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-gray-400 text-xl leading-10 max-w-3xl mx-auto"
          >
            Passionate B.Tech student exploring software development,
            cybersecurity, AI, and smart-city innovations.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <button
              onClick={handleResume}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-lg font-semibold hover:scale-110 transition duration-300 flex items-center gap-3"
            >
              <FaDownload /> Resume
            </button>

            <a
              href="https://github.com/daniya-boop"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 rounded-full glass hover:border-cyan-400 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/daniya-tazeen-995600362"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 rounded-full glass hover:border-purple-400 transition duration-300"
            >
              LinkedIn
            </a>

          </div>

          {/* Icons */}
          <div className="flex justify-center gap-14 mt-20">

            <a
              href="https://github.com/daniya-boop"
              target="_blank"
              rel="noreferrer"
              className="text-7xl hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/daniya-tazeen-995600362"
              target="_blank"
              rel="noreferrer"
              className="text-7xl hover:text-purple-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </section>

      {/* About Me */}
      <section id="about" className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-30 rounded-full"></div>

              <img
                src={profile}
                alt="Daniya"
                className="relative w-[350px] h-[350px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
              />

            </div>

          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-6xl font-black gradient-text mb-10">
              About Me
            </h2>

            <p className="text-gray-300 text-xl leading-10">
              I’m a passionate and motivated B.Tech student with strong interests
              in software development, cybersecurity, AI, and smart-city
              innovations. I enjoy participating in hackathons, building impactful
              real-world projects, and continuously learning modern technologies.
            </p>

            <p className="text-gray-400 text-lg leading-9 mt-8">
              My goal is to create innovative solutions that combine technology,
              security, and creativity while gaining experience through internships,
              collaborations, and technical communities.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6">

        <h2 className="text-5xl font-bold gradient-text text-center mb-20">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            'Python',
            'Java',
            'C/C++',
            'SQL',
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Cybersecurity',
          ].map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-10 text-center"
            >

              <h3 className="text-2xl font-semibold gradient-text">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Achievements */}
      <section className="py-32 px-6">

        <h2 className="text-5xl font-bold gradient-text text-center mb-20">
          Achievements
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            { number: '15+', label: 'Certificates' },
            { number: '3+', label: 'Internships' },
            { number: '5+', label: 'Projects' },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-3xl p-12 text-center"
            >

              <h2 className="text-6xl font-black gradient-text mb-4">
                {item.number}
              </h2>

              <p className="text-2xl text-gray-300">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Work Experience */}
      <section className="py-32 px-6">

        <h2 className="text-5xl font-bold gradient-text text-center mb-20">
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          {[
            {
              title: 'Sports Club Head',
              overview:
                'Led and managed the college sports club by organizing various sports events, coordinating teams, handling event planning, and ensuring smooth execution of activities while improving teamwork and leadership skills.',
            },
            {
              title: 'Cybersecurity Intern',
              overview:
                'Worked on cybersecurity-related concepts including vulnerability analysis, secure authentication systems, and password security projects.',
            },
            {
              title: 'Hackathon Participant',
              overview:
                'Participated in multiple hackathons including WE Hub Indeathon and collaborated on innovative smart-city and emergency response solutions.',
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(item)}
              className="glass rounded-3xl p-10 cursor-pointer"
            >

              <h3 className="text-3xl font-bold gradient-text">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                Click to view overview
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">

        <h2 className="text-5xl font-bold gradient-text text-center mb-20">
          Projects
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-3xl p-10 cursor-pointer"
            >

              <h3 className="text-3xl font-bold gradient-text">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                Click to view overview
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Strengths & Weaknesses */}
      <section className="py-32 px-6">

        <h2 className="text-5xl font-bold gradient-text text-center mb-20">
          Strengths & Weaknesses
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Strengths */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass rounded-3xl p-12"
          >

            <h3 className="text-4xl font-bold gradient-text mb-8">
              Strengths
            </h3>

            <ul className="space-y-5 text-gray-300 text-xl">

              <li>• Quick learner and adaptable</li>
              <li>• Strong problem-solving skills</li>
              <li>• Team collaboration and leadership</li>
              <li>• Passionate about cybersecurity & AI</li>
              <li>• Creative hackathon project builder</li>

            </ul>

          </motion.div>

          {/* Weaknesses */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass rounded-3xl p-12"
          >

            <h3 className="text-4xl font-bold gradient-text mb-8">
              Weaknesses
            </h3>

            <ul className="space-y-5 text-gray-300 text-xl">

              <li>• Sometimes overfocus on perfection</li>
              <li>• Tend to take multiple responsibilities</li>
              <li>• Still improving advanced backend skills</li>
              <li>• Learning deeper system design concepts</li>

            </ul>

          </motion.div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 text-center">

        <h2 className="text-5xl font-bold gradient-text mb-10">
          Contact Me
        </h2>

        <p className="text-gray-400 text-xl leading-9 max-w-3xl mx-auto">
          Let’s connect for internships, collaborations,
          projects, hackathons, or exciting opportunities.
        </p>

      </section>

      {/* Resume Popup */}
      <AnimatePresence>

        {resumePopup && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="glass rounded-3xl p-16 text-center"
            >

              <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>

              <h2 className="text-4xl font-bold gradient-text mb-4">
                Downloading Resume...
              </h2>

              <p className="text-gray-300 text-lg">
                Please wait while your resume downloads.
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* Project Popup */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="glass rounded-3xl p-12 max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              <h2 className="text-5xl font-bold gradient-text mb-8">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 text-xl leading-10">
                {selectedProject.overview}
              </p>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  )
}

export default App