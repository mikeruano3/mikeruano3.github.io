import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import MainRouter from '../mainrouter'
import { Link, HashRouter } from 'react-router-dom'
import RainbowLink from './rainbowLink'

const LayoutComponent = props => {

    const navigation = (
        <HashRouter basename='/'>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/code">Code</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/demos">Demos</Link>
            </Navigation>
        </HashRouter>
    )

    return (
        <div className="demo-big-content">
            {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <Layout>
                <Header className="header-color" 
                    title={
                        <RainbowLink to="/" text="MyPortfolio"/>} 
                    scroll>
                    {navigation}
                </Header>
                <Drawer  title={
                    <Link style={{textDecoration: 'none'}} to="/">
                        MyPortfolio
                    </Link>
                }>
                    {navigation}
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <MainRouter/>
                </Content>
            </Layout>
        </div>
    );
  }
  
  export default LayoutComponent;
  