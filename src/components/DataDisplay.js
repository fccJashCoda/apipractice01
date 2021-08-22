import DataItem from './DataItem';

const DataDisplay = (props) => {
  const { count, entries } = props.data;
  return (
    <div className='container'>
      <h2 class='text-white text-center text-6xl mb-6'>
        <span class='text-yellow-500'>{count}</span> API's
      </h2>
      <div class='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {entries.map((entry, i) => (
          <DataItem key={i} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
