import model from '../media/domain-model.png';
import styled from 'styled-components';

const Page = styled.div`
  margin: 40px;
`;

const DomainModel = styled.img`
  width: 85%;
`;

const DomainModelPage = () => {
  return <Page>
    <DomainModel src={model} alt="domain model"/>
  </Page>
};

export default DomainModelPage;