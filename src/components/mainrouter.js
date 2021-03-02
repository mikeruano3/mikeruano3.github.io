import React, { Suspense } from 'react'
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Contact from './contact'
import Projects from './Project/projects'
import Resume from './Resume/resume'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Main = withRouter(({ location }) => {

    const ProjectDemos = React.lazy(() => import('./ProjectDemos/ProjectDemo')) 

    return <TransitionGroup>
        <CSSTransition
            mountOnEnter
            key={location.key}
            classNames="slide"
            timeout={1000}>
            <HashRouter basename='/'>
                <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/resume" component={Resume} />
                    <Route path="/demos" render={() => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProjectDemos/>
                        </Suspense>
                        )} /> 
                </Switch>
            </HashRouter>
        </CSSTransition>
    </TransitionGroup>
})

export default Main;