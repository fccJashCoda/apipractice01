import { useState } from 'react';
import DataItem from './DataItem';

const DataDisplay = (props) => {
  const { count, entries } = props.data;
  const [pick, setPick] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const pickRandom = () => {
    const rand = Math.floor(Math.random() * count);
    setPick(rand);
    if (!toggle) handleToggle();
  };

  return (
    <div className='container'>
      <h2 className='text-white text-center text-8xl my-6'>
        <span className='text-yellow-500'>{count}</span> API's
      </h2>
      {toggle && (
        <div className=''>
          <DataItem entry={entries[pick]} index={pick} />
        </div>
      )}
      <button
        onClick={pickRandom}
        className='block w-full md:inline md:w-auto bg-green-500 hover:bg-green-400 text-white text-xl font-semibold p-2 rounded-md my-10'
      >
        {toggle ? 'Pick another API' : 'Pick an API'}
      </button>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {entries.map((entry, i) => (
          <DataItem key={i} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
