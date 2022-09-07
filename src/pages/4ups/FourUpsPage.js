import styled from 'styled-components';
import fourUpContent from './fourUpContent.json';
import FourUpTemplate from './FourUpTemplate';

const FourUpsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 50px;
`;

const FourUpsPage = () => {
  return <div style={{ marginLeft: 50 }}>
    <h1>4-Ups</h1>
    <FourUpsContainer>
      {fourUpContent.map(content => <FourUpTemplate key={content.date} content={content}/>)}
    </FourUpsContainer>
  </div>
};

export default FourUpsPage;