import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="dev-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachItem => {
              if (eachItem.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard
                    courseTimeline={eachItem}
                    key={eachItem.id}
                  />
                )
              }

              if (eachItem.categoryId === 'PROJECT') {
                return (
                  <ProjectTimeLineCard
                    projectTimeline={eachItem}
                    key={eachItem.id}
                  />
                )
              }

              return null // Return null for items that don't match the categories
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
