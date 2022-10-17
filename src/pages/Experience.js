import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
          date='2010 - 2013'
          iconStyle={{background: "#3e497a", colo: "#fff"}}
          icon= <SchoolIcon />
        >
          <h3 className='vertical-timeline-element-title'> My High School</h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
          date='2014 - 2019'
          iconStyle={{background: "#3e497a", colo: "#fff"}}
          icon= <SchoolIcon />
        >
          <h3 className='vertical-timeline-element-title'>Nova SBE University, Lisbon, Portugal</h3>
          <h4 className='vertical-timeline-element-subtitle'> Bachelor's Degree</h4>
          <p> Economics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
          date='2010 - 2013'
          iconStyle={{background: "#3e497a", colo: "#fff"}}
          icon= <SchoolIcon />
        >
          <h3 className='vertical-timeline-element-title'> Nova SBE University, Lisbon, Portugal</h3>
          <h4 className='vertical-timeline-element-subtitle'> Master's Degree</h4>
          <p> Finance</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
          date='2020 - 2023'
          iconStyle={{background: "#ed935b", colo: "#fff"}}
          icon= <WorkIcon />
        >
          <h3 className='vertical-timeline-element-title'> Asset Management & Financial Analyst - Banco Invest</h3>
          <h4 className='vertical-timeline-element-subtitle'> Lisbon, PT</h4>
          <p> Invested for clients</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
