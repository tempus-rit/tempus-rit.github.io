import { Table } from '../../components/styledComponents';
import { Fragment } from 'react';

const TimeTrackingTemplate = ({ content: { date, thisWeekTracking } }) => {
  return <div style={{ marginLeft: 20 }}>
    <Table>
      <caption style={{ textAlign: 'left', marginLeft: '-24px' }}>
        <h3 style={{ margin: 5 }}>Week of {new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</h3>
      </caption>
      <thead>
        <tr>
          <th>Team Member</th>
          <th>Task</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(thisWeekTracking).map(([name, tasks]) =>
        <Fragment key={name}>
          <tr>
            <td>{name}</td>
            <td>{tasks[0]?.task}</td>
            <td>{tasks[0] ? `${tasks[0].time} hours` : undefined}</td>
          </tr>
          {tasks.slice(1).map(({ task, time }) =>
            <tr key={task}>
              <td />
              <td>{task}</td>
              <td>{time} hours</td>
            </tr>
          )}
        </Fragment>
      )}
      </tbody>
    </Table>
  </div>
}

export default TimeTrackingTemplate;