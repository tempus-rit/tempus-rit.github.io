import styled from 'styled-components';
import React from 'react';

const Link = ({ href, children }) => <li><a target="_blank" rel="noreferrer" href={href}>{children}</a></li>;

const ArtifactPage = () => {
  return <div style={{ marginLeft: 50, paddingBottom: 100, overflowX: 'hidden' }}>
    <h1>Project Artifacts</h1>
    <h2>Public</h2>
      <ul>
        <Link href='/#/domain-model'>Domain Model</Link>
        <Link href='https://docs.google.com/document/d/1VqC0VSXLcAbwLMHTMlLvK3pTxwUhj_HCT4az1GfNb94/edit?usp=sharing'>Project Plan</Link>
        <Link href='https://drive.google.com/drive/folders/1WjeyrbUTcGLuGqnlWYpXUTgPLkWX_3ez?usp=sharing'>Meeting Agendas</Link>
        <Link href='https://docs.google.com/spreadsheets/d/1D6faW5yYy9792LJRmnatSVulSXdI4h1w9LXatj7Y2nM/edit?usp=sharing'>Project Milestones</Link>
        <Link href='https://www.figma.com/file/RalN4gKoUEdWGprcTHUs94'>Project Design (figma)</Link>
        <Link href='https://docs.google.com/presentation/d/1l_MMbNrgwJYLXNa-PdiHpB3hVldoAwzJ5m5p_m5ER3s/edit?usp=sharing'>Project Design (Google Slides walk-through)</Link>
        <Link href='https://drive.google.com/file/d/1AEnLdivYUyrd6PeJskhBbCMDWIinVYdG/view?usp=sharing'>Video</Link>
        <Link href='https://docs.google.com/presentation/d/1wWtOiKFlxXGUHamzspm2QbD5Zw9gnDWD08sggLy3bG8/edit?usp=sharing'>Mid-Year Presentation</Link>
      </ul>
    <h2>Require Login</h2>
      <ul>
        <Link href='https://bitbucket.org/spectracom/mobile-application/src/master/'>BitBucket</Link>
        <Link href='https://spectracom.atlassian.net/jira/software/projects/MCA/boards/145'>JIRA</Link>
      </ul>
  </div>
};

export default ArtifactPage;
