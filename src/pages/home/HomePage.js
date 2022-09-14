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
  overflow-x: hidden;
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

const TempusLogo = () => <img style={{ maxWidth: 500, display: 'block', margin: 'auto' }} src={tempusLogo} alt='tempus logo' />
const OroliaLogo = () => <img style={{ width: 120, margin: 10 }} src={oroliaLogo} alt='orolia' />;

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
            The Timing System Central Configuration & Monitoring project is an Android based mobile application for Orolia USA, inc. The app serves as a hub which allows users to monitor, review and modify configuration values for one or more onboarded Orolia SecureSync® Time and Frequency Reference Systems from their mobile device. <br/><br/>
            In the app, the user will be able to see the existing configurations of the added devices and monitor the configured devices via a dashboard. Users can create, modify, and delete configurations which will reflect on all the onboarded devices which follow that configuration. The dashboard allows users to monitor the general performance and health of each added device and gain insight into the networking and timing performance of their configuration.<br/><br/>
            There is a list view and a map view which interfaces with Google Maps from which users can select any added device they want to view and/or modify the configurations of.<br/><br/>
            The Timing System Central Configuration & Monitoring app allows users to set alerts and notifications depending on the monitored metric values for each SecureSync device being monitored. These metric values are retrieved from the exposed SecureSync REST API. Initially, the threshold criteria for these alerts will be set with default values but can also be configurable by the user to the required devices. Users can decide whether an event enables a notification as well as what kind of notification is enabled thus allowing them to monitor all added SecureSync devices from a centralized application.
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
      <td>Backend Lead</td>
    </tr>
    <tr>
      <td>Bradley Boxer</td>
      <td>Frontend Lead + Website Manager</td>
    </tr>
  </tbody>
</Table>

export default HomePage;