const DataDisplay = ({ count, entries }) => {
  console.log(entries[0]);
  return (
    <div>
      <h2>{count}</h2>
      {entries.map((entry) => (
        <p>
          api: {entry.API} Description: {entry.Description} Auth: {entry.Auth}{' '}
          HTTPS: {entry.HTTPS} Cors: {entry.Cors}
        </p>
      ))}
    </div>
  );
};

export default DataDisplay;
