import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import Profile from './Profile'
import Education from './Education'
import Experience from './Experience'
import Skills from './ProgrammingSkills'
import Course from './Courseworks'
import Portofolio from './Portofolio'

const Navigation = () => {
    return (
        <Tabs
            className="text-sm"
            defaultActiveKey="profile"
            transition={false}
            id="noanim-tab-example">
            <Tab eventKey="profile" title="PROFILE">
                <Profile />
            </Tab>
            <Tab eventKey="portofolio" title="PORTOFOLIO">
                <Portofolio />
            </Tab>
            <Tab eventKey="education" title="EDUCATION">
                <Education />
            </Tab>
            <Tab eventKey="experience" title="EXPERIENCE">
                <Experience />
            </Tab>
            <Tab eventKey="programming-skills" title="PROGRAMMING SKILLS">
                <Skills />
            </Tab>
            <Tab eventKey="courseworks" title="COURSEWORKS & CERTIFICATION">
                <Course />
            </Tab>
        </Tabs>
    )
}

export default Navigation