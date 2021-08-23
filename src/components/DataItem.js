const DataItem = ({ entry, index }) => {
  const current = `${index + 1}`.padStart(3, '0');

  return (
    <div className='w-auto bg-gray-900  p-4 rounded-xl min-h-52 relative'>
      <div>
        <a href={entry.Link}>
          <span className='text-3xl text-yellow-500 font-bold'>
            #{current}:
          </span>{' '}
          <span className='font-bold text-white text-5xl'>{entry.API}</span>
        </a>
      </div>
      <p className='pb-5 mb-10 text-white'>{entry.Description}</p>
      <div className='flex mt-auto absolute bottom-4 '>
        {entry.Auth ? (
          <div className='bg-red-700 rounded-2xl  py-1 px-2 mr-1 text-xs text-white'>
            {entry.Auth}
          </div>
        ) : null}
        {entry.HTTPS ? (
          <div className='bg-blue-700 rounded-2xl py-1 px-2 mr-1 text-xs text-white'>
            HTTPS
          </div>
        ) : null}
        {entry.Cors !== 'no' ? (
          entry.Cors === 'unknown' ? (
            <div className='bg-yellow-600 rounded-2xl py-1 px-2 mr-1 text-xs text-white'>
              Cors Unknown
            </div>
          ) : (
            <div className='bg-green-700 rounded-2xl py-1 px-2 mr-1 text-xs text-white'>
              Cors
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default DataItem;
