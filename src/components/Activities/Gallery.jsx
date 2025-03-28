import React from "react";
import GalleryItemLeft from "./GalleryItemLeft";
import GalleryItemRight from "./GalleryItemRight";
// import "@fontsource/abhaya-libre";

const Gallery = () => {
  return (
    <section className="relative text-center py-10">

      

      
      <div className="flex flex-col gap-20 px-0 mt-[250px]">  
        
      <GalleryItemLeft 
      image="/activities/Rectangle 57.png" 
      title="Neque porro quisquam" 
      />

      <GalleryItemRight 
      image="/activities/Rectangle 59.png" 
      title="Neque porro quisquam" 
      />
        
      <GalleryItemLeft
      image="/activities/Rectangle 61.png"  
      title="Neque porro quisquam"
      />

      <GalleryItemRight
      image="/activities/Rectangle 63.png"
      title="Neque porro quisquam"
      />

      <GalleryItemLeft
      image="/activities/Rectangle 65.png"
      title="Neque porro quisquam"
      />

      <GalleryItemRight
      image="/activities/Rectangle 67.png"
      title="Neque porro quisquam"
      />

      <GalleryItemLeft
      image="/activities/Rectangle 69.png"
      title="Neque porro quisquam"
      />

      <GalleryItemRight
      image="/activities/Rectangle 71.png"
      title="Neque porro quisquam"
      />

      <GalleryItemLeft
      image="/activities/Rectangle 73.png"
      title="Neque porro quisquam"
      />

      <GalleryItemRight
      image="/activities/Rectangle 75.png"
      title="Neque porro quisquam"
      />
      
      </div>
    </section>
  );
};

export default Gallery;
