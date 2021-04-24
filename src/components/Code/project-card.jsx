import React from 'react';
import { Card, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

const ProjectCard = props => {

    return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/**
                <CardTitle style={{
                    color: '#fff', height: '176px',
                }}>
                    {props.item.name}
                </CardTitle>
            **/}

            <img src={props.item.img} alt={props.item.name}/>
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