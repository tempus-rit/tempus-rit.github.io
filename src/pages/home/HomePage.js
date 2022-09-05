import React from 'react';
import tempusLogo from '../../media/TEMPUS.jpg';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 3fr 1fr;
`;

const HomePage = () => {
  return (
    <Page>
      <div>
        <img id='logo' src={tempusLogo} alt='tempus logo' />
        <div>
          <ul>
            <li>Project Manager: Ethan Yaccarino-Mims</li>
            <li>Communications Manager: Raavi Chowdhury</li>
            <li>Johann Lee</li>
            <li>Bradley Boxer</li>
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;