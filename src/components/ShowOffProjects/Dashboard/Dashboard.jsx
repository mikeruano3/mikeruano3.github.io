import React, { Suspense } from 'react'
import './Dashboard.css'
import './Actions.css'
//import GroundImage from '../../../assets/img/colorful-lightning.jpg'
//import GroundImage from '../../../assets/img/sup.png'
import { Route, useHistory } from 'react-router-dom'
import Spinner from '../../LoadingTools/Spinner/Spinner'
import {  CSSTransition } from 'react-transition-group'
import { ticoInfo, tesisInfo } from '../VideoView/info'

const Dashboard = props => {
  const history = useHistory()

  //const [overlayClass, setOverlayClass] = useState('')
  //const overlayMessage = useRef(null)

  const onShowProject = (projectData) => {
    history.replace({pathname: ''})
    history.push({pathname: '/projects/' + projectData.url})
    /*
    setOverlayClass('showOverlay')
    overlayMessage.current.innerText = "Loading..."
    setTimeout(() => {
      setShowMainSelector(false)
    }, 300)
    setTimeout(() => {
      setshowTico(true)
    }, 300)
    setTimeout(() => {
      setOverlayClass('hideOverlay')
    }, 500)
    */
  }

  const onBackToMain = () => {
    //history.replace({pathname: ''})
    //history.push({pathname: '/projects/'})
  }

  /*** ROUTE-COMPONENT */
  const VideoView = React.lazy(() => import('../VideoView/VideoView')) 
  const ProjectList = React.lazy(() => import('../ProjectList/ProjectList')) 
  
  const routes = [
    { path: "/projects/", name: 'main', Component: ProjectList, props: { onShowProject: onShowProject } },
    { path: "/projects/tico", name: 'tico', Component: VideoView, props: {info: ticoInfo, title: 'TICO', subtitle: 'Project Overview', onBackToMain: onBackToMain } },
    { path: "/projects/thesis", name: 'thesis', Component: VideoView, props: {info: tesisInfo, title: 'Yo entro a la U', subtitle: 'Project Overview', onBackToMain: onBackToMain } },
  ]
  /******** */

  return <div>
     {routes.map(({ path, Component, props }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Suspense fallback={<Spinner />}> <Component {...props}/> </Suspense>
                  </div>
                </CSSTransition>
              )}
            </Route>
      ))}
{
  /****
      <TransitionGroup>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        key={location.key}
        classNames="300"
        timeout={500}>
        <Switch location={location} >
          <Route path="/projects/tico" render={() => (
            <Suspense fallback={<Spinner />}> <TicoComponent /> </Suspense>
          )} />
           <Route path="/projects/thesis" render={() => (
            <Suspense fallback={<Spinner />}> <TicoComponent /> </Suspense>
          )} />
          <Route exact path="" render={() => (
            <Suspense fallback={<Spinner />}>  </Suspense>
          )} />
          <Route>
            <Redirect to="projects" />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    <div className={overlayClass + ' overlay'}
      style={{
        width: `100%`,
        backgroundImage: `url(${GroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `cover`,
      }}>
      <p className="overlay-message" ref={overlayMessage}>
        Loading...
        </p>
    </div>
   */
}  </div>
}

export default Dashboard