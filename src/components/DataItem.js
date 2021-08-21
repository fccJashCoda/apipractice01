import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataItem = ({ entry, index }) => {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>{entry.API}</td>
      <td>{entry.Description}</td>
      <td>
        {entry.Auth ? (
          <Badge color='danger' pill>
            {entry.Auth}
          </Badge>
        ) : null}
        {entry.HTTPS ? (
          <Badge color='info' pill>
            HTTPS
          </Badge>
        ) : null}
        {entry.Cors !== 'no' ? (
          <Badge color='warning' pill>
            {entry.Cors}
          </Badge>
        ) : null}
      </td>
    </tr>
  );
};

export default DataItem;

{
  /* <td>
  {entry.Auth && <Badge color='danger'>auth</Badge>}{' '}
  {entry.HTTPS && <Badge color='info'>true</Badge>}
  {entry.Cors && <Badge color='success'>cors</Badge>}
</td>; */
}
