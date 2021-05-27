import React, {useCallback} from 'react'
//import { Layout, Header, Drawer, Content } from 'react-mdl'
import MainRouter from '../mainrouter'
import { NavLink, HashRouter } from 'react-router-dom'
import RainbowLink from './rainbowLink'
import './Layout.scss'
import spaceImg from '../../assets/img/space.jpg'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
//import Typography from '@material-ui/core/Typography'
//import Button from '@material-ui/core/Button'
//import List from '@material-ui/core/List'
//import ListItem from '@material-ui/core/ListItem'
//import ListItemIcon from '@material-ui/core/ListItemIcon'
//import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
     // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
}))

const LayoutComponent = props => {
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const navigation = useCallback((className, activeClassName) =>{
        return <HashRouter basename='/'>
            <RainbowLink to="/" styleBefore={className} activeClassName={activeClassName} exact={true}>Home</RainbowLink>
            <NavLink to="/resume" className={className} activeClassName={activeClassName}>Resume</NavLink>
            <NavLink to="/projects" className={className} activeClassName={activeClassName}>Projects</NavLink>
            <NavLink to="/code" className={className} activeClassName={activeClassName}>Code</NavLink>
            <NavLink to="/contact" className={className} activeClassName={activeClassName}>Contact</NavLink>
            <NavLink to="/demos" className={className} activeClassName={activeClassName}>Demos</NavLink>
        </HashRouter>
    }, [])

    const container = window !== undefined ? () => document.body : undefined;

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <div className={'navigationLinksFlex '}>
                {navigation('navigationLinks navigationLinksLeft', 'navigationLinksLeftActive')}
            </div>
            <Divider />
        </div>
      )

    const threeDotButton = <IconButton 
        edge="start" 
        className={classes.menuButton} 
        color="inherit" aria-label="menu"
        onClick={handleDrawerToggle}
        >
            <MenuIcon />
    </IconButton>

    return (<div>
        <div className={classes.root}>
            <Hidden xsDown >
                <AppBar position="fixed" style={{background: `url(${spaceImg}) center / cover`,}}>
                    <Toolbar>
                        {threeDotButton}
                        { navigation('navigationLinks', 'navigationLinksActive') }
                    </Toolbar>
                </AppBar>
            </Hidden>
            <Hidden smUp >
                <AppBar position="fixed" style={{background: `url(${spaceImg}) center / cover`,}}>
                    <Toolbar>
                        {threeDotButton}
                    </Toolbar>
                </AppBar>
            </Hidden>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
                </Hidden>
            </nav>
        </div>
            {/*
            <Layout>
                <Header 
                    style={{background: `url(${spaceImg}) center / cover`,}}
                    title={
                        <RainbowLink to="/" text="MyPortfolio"/>} >
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
                    <MainRouter/>
                </Content>    
            </Layout>
            */}
            <div className="content-margin-top">
                <MainRouter/>
            </div>
        </div>
    );
  }
  
  export default LayoutComponent;
  