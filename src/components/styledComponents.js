import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  & th, & td {
    padding: 6px 20px 6px 0;
  }

  & thead tr, & th {
    background-color: #245cac;
    color: white;
  }
  
  & tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;