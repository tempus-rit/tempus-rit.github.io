import styled from 'styled-components';
import timeTrackingContent from './timeTrackingContent.json';
import TimeTrackingTemplate from './TimeTrackingTemplate';
import { Table } from '../../components/styledComponents';

const TimeTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TimeTrackingPage = () => {
  return <div style={{ marginLeft: 50, paddingBottom: 50, overflowX: 'hidden' }}>
    <h1>Time Tracking</h1>

    <h3>Total</h3>
    <div style={{ marginLeft: 20 }}>
      <AggregateTable/>
    </div>
    <br />

    <TimeTrackingContainer>
      {timeTrackingContent.map(content => <TimeTrackingTemplate key={content.date} content={content}/>)}
    </TimeTrackingContainer>
  </div>
};

const AggregateTable = () => {
  const totalHoursByName = {};
  timeTrackingContent.forEach(week => {
    Object.entries(week.thisWeekTracking).forEach(([name, tasks]) => {
      if (!totalHoursByName[name]) totalHoursByName[name] = 0;
      totalHoursByName[name] += tasks.reduce((prev, current) => prev + Number.parseInt(current.time), 0);
    });
  });

  console.log(totalHoursByName);
  return <Table>
     <thead>
      <tr>
        <th>Team Member</th>
        <th>Time</th>
      </tr>
     </thead>
    <tbody>
    {Object.entries(totalHoursByName).map(([name, totalHours]) =>
      <tr key={name}>
        <td>{name}</td>
        <td>{totalHours} hours</td>
      </tr>
    )}
    </tbody>
  </Table>
};

export default TimeTrackingPage;