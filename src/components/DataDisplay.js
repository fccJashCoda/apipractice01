import { Table } from 'reactstrap';
import DataItem from './DataItem';

const DataDisplay = (props) => {
  const { count, entries } = props.data;
  return (
    <div className='container'>
      <h2>{count}</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>api</th>
            <th>Description</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <DataItem key={i} entry={entry} index={i} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataDisplay;
