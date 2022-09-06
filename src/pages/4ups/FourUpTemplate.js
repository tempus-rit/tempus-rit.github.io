import { Table } from '../../components/styledComponents';

const FourUpTemplate = ({ content: { date, progress, plans, risks, needs } }) => {
  return <div style={{ marginLeft: 20 }}>
    <Table>
      <caption style={{ textAlign: 'left', marginLeft: '-20px' }}>
        <h3 style={{ margin: 5 }}>Week of {new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</h3>
      </caption>
      <tbody>
      <tr>
        <th>Progress</th>
        <th>Risks</th>
      </tr>
      <tr>
        <td>
          <ul>
            {progress.map(({ task, assignee }) => <li key={task}>{task} ({assignee})</li>)}
          </ul>
        </td>
        <td>
          <ul>
            {risks.map(risk => <li key={risk}>{risk}</li>)}
          </ul>
        </td>
      </tr>
      <tr>
        <th>Plans</th>
        <th>Needs</th>
      </tr>
      <tr>
        <td>
          <ul>
            {plans.map(({ task, assignee }) => <li key={task}>{task} ({assignee})</li>)}
          </ul>
        </td>
        <td>
          <ul>
            {needs.map(need => <li key={need}>{need}</li>)}
          </ul>
        </td>
      </tr>
      </tbody>
    </Table>
  </div>
}

export default FourUpTemplate;