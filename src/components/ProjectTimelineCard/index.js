import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimeline} = props
  console.log(projectTimeline)
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectTimeline
  return (
    <div className="container">
      <img src={imageUrl} alt="project" className="img" />
      <div className="project-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
