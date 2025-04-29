import React from "react";
import RoomCard from "./RoomCard";
import RoomCardRTL from "./RoomCardRTL";

const RoomGrid = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1  p-4 mx-auto">
      {rooms.map((room, index) => {
        const Component = index % 2 === 0 ? RoomCard : RoomCardRTL;
        return (
          <Component 
            key={index} 
            order={index % 2 === 0 ? 1 : 0}
            title={room.title}
            imageSrc={room.imageSrc}
            description={room.description}
            buttonText={room.buttonText}
          />
        );
      })}
    </div>
  );
};

export default RoomGrid;
