import React, { Suspense } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import reactlogo from '../../assets/img/react-logo.png'
import angularlogo from '../../assets/img/angular-logo.png'
import nodelogo from '../../assets/img/node-logo.png'
import dockerlogo from '../../assets/img/docker-logo.png'

const ProjectCard = props => {

    const imgs = {  reactlogo: reactlogo, angularlogo: angularlogo, nodelogo: nodelogo, dockerlogo: dockerlogo}

    return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/**
                <CardTitle style={{
                    color: '#fff', height: '176px',
                }}>
                    {props.item.name}
                </CardTitle>
            **/}

            <img src={imgs[props.item.img]} alt={props.item.name}/>
            <CardText>
                {props.item.description}
            </CardText>
            <CardActions border>
                <Button href={props.item.githubLink} colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    )
}

export default ProjectCard