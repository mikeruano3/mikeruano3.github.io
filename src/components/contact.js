import React from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl'
import ProfilePic from '../components/Images/ProfilePic'
import { lang } from '../strings/languaje'
import './contact.scss'

const Contact = props => {
    return (
        <Grid className="contact-grid">
            <Cell col={6} phone={4}>
                <h2>Miguel Ruano</h2>
                <ProfilePic />
                <p>
                    {lang.aboutme}
                </p>
            </Cell>
            <Cell col={6} phone={8}>
                <h2>Contact Me</h2>
                <hr />
                <div>
                    <List className="contact-list">
                        <ListItem>
                            <ListItemContent>
                                <h5>
                                    <i className="fa fa-phone" aria-hidden="true" />
                                            +502 32043114
                                        </h5>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent>
                                <h5>
                                    <i className="fa fa-fax" aria-hidden="true" />
                                            78448182
                                        </h5>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent>
                                <h5>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                            miguelruano35@gmail.com
                                        </h5>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent>
                                <h5>
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                            https://www.linkedin.com/in/miguelruanoroca/
                                        </h5>
                            </ListItemContent>
                        </ListItem>
                    </List>
                </div>
            </Cell>
        </Grid>
    )
}

export default Contact