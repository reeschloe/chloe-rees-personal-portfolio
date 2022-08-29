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
                <p>Made recommendations and offered technical guidance based on client needs.</p>
                <p>Translated customer needs into system-level solutions and communicated requests to Research and Development.</p>
                <p>Wrote hundreds of queries run in the environments of the entire client base to find unsupported configurations.</p>
                <p>Coordinated an effort involving 10+ teams across the organization for a voice assistant product used on mobile and desktop platforms. Formed new processes for product design, development, and support.</p>
                <p>Mentored new hires and led employees through the role’s training process and overall responsibilities.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="May 2022 - August 2022" iconStyle={{background: "#71334a", color: "#fff"}} icon={<MdOutlineSchool />}>
                <h3 className="vertical-timeline-element-title">Thinkful</h3>
                <p>Certificate - Software Engineering</p>
                <p>Learned industry best practices and software development standards focused on Javascript, HTML5, CSS3, React.js, Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.</p>
                <p>Developed and deployed mobile-first applications while learning new languages and frameworks, spending several hours per week collaborating with and learning from senior web developers in a mentor-student relationship.</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience