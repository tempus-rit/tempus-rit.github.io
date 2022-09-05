import React from 'react';
import tempusLogo from '../../media/TEMPUS.jpg';
import oroliaLogo from '../../media/orolia-logo.svg'
import styled from 'styled-components';
import { Table } from '../../components/styledComponents';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1.5fr;
`;

const Sponsor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

const Text = styled.p`
  padding-top: 5px;
`;

const TwoColumn = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  place-self: start center;
  justify-content: space-evenly;
`;

const TempusLogo = () => <img style={{ maxWidth: 500, display: 'block', margin: 'auto' }} src={tempusLogo} alt='tempus logo'/>
const OroliaLogo = () => <img style={{ width: 120, margin: 10 }} src={oroliaLogo} alt='orolia'/>;

const HomePage = () => {
  return (
    <Page>
      <div>
        <TempusLogo />
        <h3 style={{ marginBottom: 0 }}>Timing System Central Configuration</h3>
        <Sponsor>
          <Text>Sponsored by</Text>
          <OroliaLogo />
          <Text>with support from <b>Xueling Zhang</b></Text>
        </Sponsor>
      </div>
      <TwoColumn>
        <div style={{ width: '40%', minWidth: 500 }}>
          <h3>About</h3>
          <p style={{ marginLeft: 10 }}>
            A description of the project goes here. It should be no longer than 250 words, and should be approved by the sponsor and coach.
          </p>
        </div>
        <div>
          <h3>Team Members</h3>
          <MemberTable />
        </div>
      </TwoColumn>
    </Page>
  );
};

const MemberTable = () => <Table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ethan Yaccarino-Mims</td>
      <td>Project Manager</td>
    </tr>
    <tr>
      <td>Raavi Chowdhury</td>
      <td>Communications Manager</td>
    </tr>
    <tr>
      <td>Johann Lee</td>
      <td />
    </tr>
    <tr>
      <td>Bradley Boxer</td>
      <td />
    </tr>
  </tbody>
</Table>

export default HomePage;