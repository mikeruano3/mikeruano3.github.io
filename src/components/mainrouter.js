import React, { Suspense } from 'react'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Spinner from './LoadingTools/Spinner/Spinner'

const Main = withRouter(({ location }) => {

    const LandingPage = React.lazy(() => import('./LandingPage/LandingPage')) 
    const Contact = React.lazy(() => import('./contact')) 
    const Resume = React.lazy(() => import('./Resume/resume')) 
    const ProjectDemos = React.lazy(() => import('./Demos/ProjectDemo')) 
    const Code = React.lazy(() => import('./Code/projects'))  
    const Dashboard = React.lazy(() => import('./ShowOffProjects/Dashboard/Dashboard'))  

    const routes = [
        { path: "/", name: 'LandingPage', Component: LandingPage, exact: true },
        { path: "/contact", name: 'Contact', Component: Contact, exact: true},
        { path: "/code", name: 'Code', Component: Code, exact: true },
        { path: "/resume", name: 'Resume', Component: Resume, exact: true },
        { path: "/demos", name: 'ProjectDemos', Component: ProjectDemos, exact: false },
        { path: "/projects", name: 'Dashboard', Component: Dashboard, exact: false },
      ]

    return  <HashRouter basename='/'>
                {routes.map(({ path, Component, props, exact }) => (
                <Route key={path} exact={exact} path={path}>
                {({ match }) => (
                    <CSSTransition
                    in={match != null}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                    >
                    <div className="slide">
                        <Suspense fallback={<Spinner />}> <Component {...props}/> </Suspense>
                    </div>
                    </CSSTransition>
                )}
                </Route>))
                }
            </HashRouter>

        /**
       *  <TransitionGroup>
        <CSSTransition
            mountOnEnter
            key={location.key}
            classNames="slide"
            timeout={1000}>
            <Switch location={location}>
                <HashRouter basename='/'>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/code" render={() => (
                        <Suspense fallback={<Spinner/>}>
                            <Code/>
                        </Suspense>
                        )} />
                    <Route exact path="/resume" component={Resume} />
                    <Route path="/demos" render={() => (
                        <Suspense fallback={<Spinner/>}>
                            <ProjectDemos/>
                        </Suspense>
                        )} /> 
                    <Route path="/projects" component={Dashboard}/>
                </HashRouter>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
       */
})

export default Main;