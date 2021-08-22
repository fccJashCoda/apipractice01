const DataItem = ({ entry, index }) => {
  const current = `${index + 1}`.padStart(3, '0');

  return (
    <div class='w-auto bg-gray-900  p-4 rounded-xl h-52 relative'>
      <div>
        <a href={entry.Link}>
          <span class='text-3xl text-yellow-500 font-bold'>#{current}:</span>{' '}
          <span class='font-bold text-white text-5xl'>{entry.API}</span>
        </a>
      </div>
      <p class='pb-5 mb-auto text-white'>{entry.Description}</p>
      <div class='flex mt-auto absolute bottom-4'>
        {entry.Auth ? (
          <div class='bg-red-700 rounded-2xl  py-1 px-2 mr-1 text-xs text-white'>
            {entry.Auth}
          </div>
        ) : null}
        {entry.HTTPS ? (
          <div class='bg-blue-700 rounded-2xl py-1 px-2 mr-1 text-xs text-white'>
            HTTPS
          </div>
        ) : null}
        {entry.Cors !== 'no' ? (
          entry.Cors === 'unknown' ? (
            <div class='bg-yellow-600 rounded-2xl py-1 px-2 mr-1 text-xs text-white'>
              Cors Unknown
            </div>
          ) : (
            <div class='bg-green-700 rounded-2xl py-1 px-2 mr-1 text-xs text-white'>
              Cors
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default DataItem;

{
  /* <div color='warning'>{entry.Cors}</div> */
}
