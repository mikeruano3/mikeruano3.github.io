import React from 'react'
import sgyt from '../../assets/img/sgyt.png'
import infoutility from '../../assets/img/infoutility.jpg'
import usaclogo from '../../assets/img/usaclogo.png'
import rp from '../../assets/img/rp.png'

export const experienceData = [
    {
        startDate: "July 2020",
        endDate: "Currently",
        institution: "Reporting-Pal",
        jobName: "FullStack Developer",
        url: "https://reporting-pal.com/",
        jobDescription: <div>
            <h6 className="job_desc">
                Lead developer for TICO (check out the projects tab). TICO is a project 
                made in collaboration with <a href='https://jcwtitle.com/'>JWCTitle</a> to help 
                collaborators create property examinations for their clients.
            </h6>
            <p className="made-with"><i>Made with Angular, Firebase, Azure</i></p>
            <h6 className="no_margin_bottom">
                Side developer for the ReactJS-based CRM project for  
                <a href='https://omniinteractions.com/gig-life/'> Omni Interactions</a> company.
            </h6>
            <p className="made-with"><i>Made with REACTJS, MongoDB, Azure, Google Cloud Functions</i></p>
        </div>
        ,
        image: rp
    },
    {
        startDate: "April 2020",
        endDate: "April 2021",
        institution: "InfoUtility",
        jobName: "Software Developer",
        url: "http://infoutilitygt.com/",
        jobDescription: 
        <h6 className="job_desc">
            Worked as a part-time freelancer at several projects, 
            using technologies such as IONIC, Angular, React, NodeJs, AngularJs, .Net C#, SQL Server, Azure and more.`
        </h6>
        ,
        image: infoutility
    },
    {
        startDate: "25 Sept 2019",
        endDate: "19 Feb 2020",
        institution: "Seguros GyT",
        jobName: "Analyst/Programmer",
        url: "https://segurosgyt.com.gt/",
        jobDescription: 
        <h6 className="job_desc">
            During this time I gave support to existing and new software for the company, 
            adding and reviewing functionalities, as well as working in new solutions. 
            I worked mainly as a data-scientist for Oracle, MySQL and SQL techonologies.
        </h6>,
        image: sgyt
    },
    {
        startDate: "1 Feb 2019",
        endDate: "1 Nov 2019",
        institution: "San Carlos of Guatemala University",
        jobName: "Academic Tutor (Compiler Science I)",
        url: "https://www.usac.edu.gt/",
        jobDescription:
        <h6 className="job_desc">
            I worked as a supporting teacher at the Compiler Science Area. I managed to learn the basics of compilers and its implementation.
        </h6>,
        image: usaclogo
    }
]