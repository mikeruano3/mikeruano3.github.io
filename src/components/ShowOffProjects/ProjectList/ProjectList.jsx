import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ShootingStarBg from '../ShootingStarBg/ShootingStarBg'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const MotionItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const ProjectList = props => {

  const onShowTico = () => {
    props.onShowProject({ url: 'tico' })
  }

  const onShowTesis = () => {
    props.onShowProject({ url: 'thesis' })
  }

  return <div>
    <section className={'section main-section'}>
      <ShootingStarBg height="20vh" title="Projects" />
      <motion.div
        className="courses"
        variants={container}
        initial="hidden"
        animate="visible"
      >
          <motion.div className="course css"  key={'css'} variants={MotionItem}  >
            <div className="course-info">
              <span>Project</span>
              <h5>TICO Clasp</h5>
              <p >
                <a href='https://reporting-pal.com//'>Reporting-Pal and JCWTitle</a></p>
              <p>
                <span onClick={onShowTico} className="course-info-more" >
                  Check out &nbsp;
              <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </p>
            </div>
            <div className="course-more">
              <div className="details">
                <h5>ANGULAR, FIREBASE</h5>
                <div className="progress">
                  <span className="progress-bar p-100"></span>
                  <span className="progress-text">Since July 2020</span>
                </div>
              </div>
              <h5 className="name">Plataform designed to help <a href='https://jcwtitle.com/'>JWCTitle</a>  with their Examination Work in the Massachussets area.</h5>
              <button className="continue-btn css"
                onClick={onShowTico}>View more</button>
            </div>
          </motion.div>
          <motion.div className="course html" tabIndex="5"  key={'html'} variants={MotionItem} >
            <div className="course-info">
              <span>Project</span>
              <h5>Yo Entro A La U</h5>
              <p >
                <a href='https://yoentroalau.herokuapp.com/'>Thesis Project for Bachelor's degree</a></p>
              <p>
                <span onClick={onShowTesis} className="course-info-more" >
                  Check out &nbsp;
              <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </p>
            </div>
            <div className="course-more">
              <div className="details">
                <h5>IONIC, MONGODB</h5>
                <div className="progress">
                  <span className="progress-bar p-100"></span>
                  <span className="progress-text">June 2020 - November 2020</span>
                </div>
              </div>
              <h5 className="name">Mobile App develop in IONIC to help candidates make a better choice on University subjects.</h5>
              <button className="continue-btn html"
                onClick={onShowTesis}>View more</button>
            </div>
          </motion.div>
      </motion.div>
    </section>
    {
      /**
     * <section className=' main-section'>
     <div className="course-header">
      <i className="mode-switch fas fa-moon"></i>
      <h1>Projects</h1>
    </div>
    <section className="html-course course-section" className={getCourseClassName(showHtmlCourse)}>
    <div className="course js" tabindex="9">
        <div className="course-info">
          <span>Course</span>
          <h5>Basic ES6</h5>
          <a href="#">Chapters <i className="fas fa-chevron-right"></i></a>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Chapter 9</h5>
            <div className="progress">
              <span className="progress-bar p-40"></span>
              <span className="progress-text">4/10 Lessons Completed</span>
            </div>
          </div>
          <h2 className="name">Getters and Setters</h2>
          <a className="chapters" href="#" tabindex="10">Chapters <i className="fas fa-chevron-right"></i></a>
          <a className="continue-btn js" tabindex="11" href="#">Continue</a>
        </div>
      </div>
      <section className={getCourseClassName(showHtmlCourse) + ' html-course course-section '}>
        <span onClick={onBackToMain}><i className="fas fa-chevron-left"></i> Back to Courses</span>
      </section>
    <span onClick={onBackToMain}><i className="fas fa-chevron-left"></i> Back to Courses</span>
    <div className="courses">
      <div className="course html checked" tabindex="1">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Intro to Semantic HTML</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 1</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have completed this lesson.</p>
          <button className="read-btn mark" tabindex="2">Mark as Incomplete</button>
          <a className="read-btn" tabindex="3">Read</a>
        </div>
      </div>
      <div className="course html checked" tabindex="4">
        <div className="course-info">
          <span>Lesson</span>
          <h5>More on semantics</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 2</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have completed this lesson.</p>
          <button className="read-btn mark" tabindex="5">Mark as Incomplete</button>
          <a className="read-btn" tabindex="6">Read</a>
        </div>
      </div>
      <div className="course html" tabindex="7">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Uses for semantics</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 3</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have not completed this lesson yet.</p>
          <button className="read-btn mark" tabindex="8">Mark as Done</button>
          <a className="read-btn" tabindex="9">Read</a>
        </div>
      </div>
    </div>
  </section>
  <section className="css-course course-section">
    <a onClick={onBackToMain} className="back"><i className="fas fa-chevron-left"></i> Back to Courses</a>
    <div className="courses">
      <div className="course css checked" tabindex="1">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Special Selectors</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 1</h5>
            <span className="time">5 min.</span>
          </div>
          <p className="description">You have completed this lesson.</p>
          <button className="read-btn mark" tabindex="2">Mark as Incomplete</button>
          <a className="read-btn" tabindex="3">Read</a>
        </div>
      </div>
      <div className="course css checked" tabindex="4">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Sibling Selectors</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 2</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have completed this lesson.</p>
          <button className="read-btn mark" tabindex="5">Mark as Incomplete</button>
          <a className="read-btn" tabindex="6">Read</a>
        </div>
      </div>
      <div className="course css" tabindex="7">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Adjacent Selectors</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 3</h5>
            <span className="time">6 min.</span>
          </div>
          <p className="description">You have not completed this lesson yet.</p>
          <button className="read-btn mark" tabindex="8">Mark as Done</button>
          <a className="read-btn" tabindex="9">Read</a>
        </div>
      </div>
    </div>
  </section>
  <section className="js-course course-section">
    <a className="back"><i className="fas fa-chevron-left"></i> Back to Courses</a>
    <div className="courses">
      <div className="course js checked" tabindex="1">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Destructuring</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 1</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have completed this lesson.</p>
          <button className="read-btn mark" tabindex="2">Mark as Incomplete</button>
          <a className="read-btn" tabindex="3">Read</a>
        </div>
      </div>
      <div className="course js checked" tabindex="4">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Template Literals</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 2</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have completed this lesson.</p>
          <button className="read-btn mark" tabindex="5">Mark as Incomplete</button>
          <a className="read-btn" tabindex="6">Read</a>
        </div>
      </div>
      <div className="course js" tabindex="7">
        <div className="course-info">
          <span>Lesson</span>
          <h5>Getters and Setters</h5>
        </div>
        <div className="course-more">
          <div className="details">
            <h5>Lesson 3</h5>
            <span className="time">4 min.</span>
          </div>
          <p className="description">You have not completed this lesson yet.</p>
          <button className="read-btn mark" tabindex="8">Mark as Done</button>
          <a className="read-btn" tabindex="9">Read</a>
        </div>
      </div>
    </div>
  </section>
     ***/
    }
  </div>
}

export default ProjectList