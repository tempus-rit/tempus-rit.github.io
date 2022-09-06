import styled from 'styled-components';
import timeTrackingContent from './timeTrackingContent.json';
import TimeTrackingTemplate from './TimeTrackingTemplate';

const TimeTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TimeTrackingPage = () => {
  return <div style={{ marginLeft: 50 }}>
    <h1>Time Tracking</h1>
    <h3>Aggregate</h3>
    <TimeTrackingContainer>
      {timeTrackingContent.map(content => <TimeTrackingTemplate key={content.date} content={content}/>)}
    </TimeTrackingContainer>
  </div>
};

export default TimeTrackingPage;