import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSchool } from "react-icons/md"
import { HiOutlineBriefcase } from "react-icons/hi"

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#71334a">
            <VerticalTimelineElement className="vertical-timeline-element--education" date="August 2014 - May 2018" iconStyle={{background: "#71334a", color: "#fff"}} icon={<MdOutlineSchool />}>
                <h3 className="vertical-timeline-element-title">University of Missouri - Columbia, Missouri</h3>
                <p>Bachelor of Science - Biological Engineering</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="July 2018 - May 2022" iconStyle={{background: "#3e497a", color: "#fff"}} icon={<HiOutlineBriefcase />}>
                <h3 className="vertical-timeline-element-title">Technical Solutions Engineer - Epic</h3>
                <ul>
                    <li>Worked closely with clients to translate technical requirements into proposed system-level solutions.</li>
                    <li>Provided consistent feedback and enhancement ideas to the Research and Development division based on client experience.</li>
                    <li>Wrote hundreds of queries run in the environments of the entire client base to find unsupported configurations.</li>
                    <li>Drove innovation for a voice assistant product through design, development, and support for use on mobile and desktop.</li>
                    <li>Mentored technical hires through process, policy, and best practices to support talent across the organization.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="May 2022 - August 2022" iconStyle={{background: "#71334a", color: "#fff"}} icon={<MdOutlineSchool />}>
                <h3 className="vertical-timeline-element-title">Thinkful</h3>
                <p>Certificate - Software Engineering</p>
                <ul>
                    <li>Learned industry best practices and software development standards focused on Javascript, HTML5, CSS3, React.js, Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.</li>
                    <li>Developed and deployed mobile-first applications while learning new languages and frameworks, spending several hours per week collaborating with and learning from senior web developers in a mentor-student relationship.</li>
                </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience