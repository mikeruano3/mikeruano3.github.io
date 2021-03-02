import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import MainRouter from '../mainrouter'
import { Link } from 'react-router-dom'
import RainbowLink from './rainbowLink.js'

const LayoutComponent = props => {

    const navigation = (
        <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/demos">Demos</Link>
        </Navigation>
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
  