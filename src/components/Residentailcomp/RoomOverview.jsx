const RoomOverview = ({ roomOverview}) => {
    return (
      <div className='relative half-background py-2 flex justify-center items-center w-full min-h-[500px]'>
        {/* Text Container */}
        <div className={`origin-bottom font-Lato w-[80%] bg-[${roomOverview.backgroundColor}] ${roomOverview.textColor} p-8 text-center rounded-xl`}>
          <div className='mb-2 text-xl'>{roomOverview.heading}</div>
          <h2 className='text-3xl mb-4'>{roomOverview.subheading}</h2>
  
          {roomOverview.paragraphs.map((text, index) => (
            <p key={index} className='text-md '>
              {text}
            </p>
          ))}
        </div>
      </div>
    );
  };
  export default RoomOverview;