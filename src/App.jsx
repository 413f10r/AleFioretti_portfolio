import './App.css'
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa'
import { SiExpress, SiMysql } from 'react-icons/si'
import { DiJavascript, DiJavascript1, DiNodejs } from 'react-icons/di'
import { TbBrandTypescript } from 'react-icons/tb'
import myphoto from './img/myphoto.jpg'
import ProjectsCarousel from './components/ProjectsCarousel'
import { projects } from './data/projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="bkg-container">
      {/* Hero Section*/}
      <div className="container-fluid h-100 d-flex flex-column">
        <div className="row flex-grow-1">

          {/* Profile Card - Left Column */}
          <div className="col-12 col-md-3 order-2 order-md-1 d-flex align-items-center pt-4 pt-md-5 px-3 px-md-5">
            <div className="card glass-effect text-white w-100">
              <div className="card-header text-center py-3">
                <img
                  src={myphoto}
                  alt="Alessandro Fioretti"
                  className="rounded-circle mb-3"
                  style={{ width: '17vh', height: '17vh', objectFit: 'cover' }}
                />
                <h5 className="mb-1 fw-bold">Alessandro Fioretti</h5>
                <p className="text-white mb-0 small">Jr Full Stack Web Developer</p>
              </div>

              <div className="card-body py-3">
                <h6 className="mb-2">💡 About me:</h6>
                <p className="mb-0 small">
                  Jr Full Stack web Developer specializzato in: HTML, CSS, Javascript, React, Node.js, Express, MySQL, Typescript, Bootstrap, Tailwind.
                </p>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item glass-effect d-flex align-items-center py-2">
                  <FaReact className="me-2 text-react" size={18} />
                  <span className="small">React & Frontend</span>
                </li>
                <li className="list-group-item glass-effect d-flex align-items-center py-2">
                  <DiNodejs className="me-2 text-node" size={18} />
                  <span className="small">Node.js & Backend</span>
                </li>
                <li className="list-group-item glass-effect d-flex align-items-center py-2">
                  <SiMysql className="me-2 text-mysql" size={18} />
                  <span className="small">Database & API</span>
                </li>
              </ul>

              <div className="card-body py-3 mt-auto">
                <div className="d-flex justify-content-around mb-2">
                  <a href="https://github.com/413f10r" className="btn btn-link text-white p-1">
                    <FaGithub className="me-1" size={16} /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/alessandro-fioretti-867184274" className="btn btn-link text-white p-1">
                    <FaLinkedin className="me-1" size={16} /> LinkedIn
                  </a>
                </div>
                <hr className="border-secondary my-2" />
                <div className="text-center">
                  <p className="mb-1 fw-bold small">🤝 Collaborazioni:</p>
                  <a href="mailto:ale-fioretti@live.it" className="text-white small">
                    ale-fioretti@live.it
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* title - Center Column */}
          <div className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center text-center pt-4 pt-md-0">
            <div className="mb-4">
              <h1 className="display-4 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                ALESSANDRO FIORETTI
              </h1>
              <h3 className="h4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                JR FULL STACK WEB DEVELOPER
              </h3>
            </div>

            <div className="logo-react mb-4">
              <FaReact size={100} className="text-react" />
            </div>
          </div>

          {/* Projects - Right Column */}
          <div className="col-12 col-md-3 order-3 d-flex align-items-center pt-4 justify-content-center">
            <div>
              <h2 className="mb-3 text-center h4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                My Projects
              </h2>

              <ProjectsCarousel projects={projects} />
            </div>
          </div>
        </div>

        {/* Skills Footer con position relative */}
        <div className="skills-footer-relative order-4">
          <div className="d-flex justify-content-center">
            <div className="skills-container d-flex flex-wrap gap-3 justify-content-center">
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <DiJavascript size={35} className="text-react" />
                <p className="skill-label">HTML</p>
              </div>
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <DiJavascript1 size={35} className="text-react" />
                <p className="skill-label">JavaScript</p>
              </div>
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <DiNodejs size={35} className="text-node" />
                <p className="skill-label">Node</p>
              </div>
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <FaReact size={35} className="text-react" />
                <p className="skill-label">React</p>
              </div>
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <TbBrandTypescript size={35} className="text-react" />
                <p className="skill-label">TypeScript</p>
              </div>
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <SiExpress size={35} className="text-react" />
                <p className="skill-label">Express</p>
              </div>
              <div className="skill-icon d-flex align-items-center justify-content-center hover-scale position-relative">
                <SiMysql size={35} className="text-mysql" />
                <p className="skill-label">MySQL</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App