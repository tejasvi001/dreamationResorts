import AmenitiesList from "./AmenitiesList";

const AmenitiesCard = ({
  title = '',
  backgroundColor = '',
  textColor = '',
  layout = 'right',
  amenities = [],
}) => {
  const containerClass =
    layout === "right" ? "ml-auto text-right" : "mr-auto text-left";

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="relative h-[600px] half-background-2 flex justify-center flex-col">
        <div
          className={`p-8 min-h-[300px] break-words max-w-[530px] ${containerClass}`}
          style={{ backgroundColor: backgroundColor }}
        >
          {/* Aligning title text to the left */}
          <div className={`text-[60px] font-normal font-Abhaya_Libre ${textColor} text-left`}>
            {title}
          </div>
        </div>
      </div>

      <AmenitiesList amenities={amenities} />
    </div>
  );
};

export default AmenitiesCard;
