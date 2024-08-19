import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimeline} = props
  const {courseTitle, description, duration, tagsList} = courseTimeline

  return (
    <div>
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>

      <div className="list-container">
        {tagsList?.map(item => (
          <p className="item" key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
