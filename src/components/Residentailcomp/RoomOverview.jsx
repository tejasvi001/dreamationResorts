const RoomOverview = ({ 
    heading = "Room Overview", 
    subheading = "Residential Room", 
    paragraphs = [], 
    backgroundColor = "#d69d52", 
    textColor = "text-white" 
  }) => {
    return (
      <div className='relative half-background py-5 flex justify-center items-center w-full min-h-[500px]'>
        {/* Text Container */}
        <div className={`origin-bottom font-Lato w-[80%] bg-[${backgroundColor}] ${textColor} p-8 text-center`}>
          <div className='mb-2'>{heading}</div>
          <h2 className='text-3xl mb-4'>{subheading}</h2>
  
          {paragraphs.map((text, index) => (
            <p key={index} className='text-sm mb-4'>
              {text}
            </p>
          ))}
        </div>
      </div>
    );
  };
  
  export default RoomOverview;
  