import React from "react";
import GalleryItemLeft from "./GalleryItemLeft";
import GalleryItemRight from "./GalleryItemRight";
// import "@fontsource/abhaya-libre";

const Gallery = () => {
  return (
    <section className="relative text-center py-10">

      

      
      <div className="flex flex-col gap-20 px-0 mt-[250px]">  
        
      <GalleryItemLeft 
      image="/activities/Rectangle57.jpg" 
      title="Nature Trails & Hiking" 
      description="Nature trails and hiking adventures offer a rejuvenating escape from daily life, allowing individuals to connect with the natural world while promoting physical health and mental well-being. Whether through dense forests, mountain ridges, coastal paths, or serene meadows, hiking provides an opportunity to explore breathtaking landscapes, observe wildlife, and experience the rhythm of nature firsthand."
      />

      <GalleryItemRight 
      image="/activities/Rectangle 59.jpg" 
      title="Avi Fauna Exploration" 
      description="Chirping is a serene and rewarding activity that invites individuals to connect with nature while observing the beauty and diversity of avian life. Whether in urban parks, wetlands, forests, or coastal areas, bird watchers can enjoy the thrill of spotting various species, learning about their behaviors, and appreciating their unique adaptations."
      />
        
      <GalleryItemLeft
      image="/activities/Rectangle 61.webp"  
      title=" Yoga & Meditation"
      description="Yoga and meditation are transformative practices that promote physical, mental, and emotional well-being. Yoga combines physical postures, breath control, and mindfulness to enhance flexibility, strength, and relaxation. Meditation cultivates inner peace and clarity through focused attention and awareness. "
      />

      <GalleryItemRight
      image="/activities/Rectangle 63.jpg"
      title="Bonfire Nights"
      description="Bonfire nights are enchanting gatherings that bring people together around a warm, crackling fire under the stars. These evenings are filled with laughter, storytelling, and the comforting aroma of roasting marshmallows. The flickering flames create a cozy ambiance, fostering connections and camaraderie among friends and family."
      />

      <GalleryItemLeft
      image="/activities/Rectangle 65.webp"
      title="Painting & Sketching Sessions "
      description="Painting and sketching sessions provide a creative outlet for self-expression, mindfulness, and artistic exploration. Whether you're a seasoned artist or a curious beginner, these sessions offer a space to unwind, observe, and translate emotions or surroundings onto paper or canvas. Guided or freeform, they encourage focus, patience, and a deeper appreciation for color, form, and perspective."
      />

      <GalleryItemRight
      image="/activities/Rectangle 67.jpg"
      title=" Photography Walks "
      description="Photography walks are immersive experiences that blend exploration and creativity, inviting individuals to capture the beauty of their surroundings through the lens of a camera. These walks encourage participants to observe details often overlooked in daily life, fostering a deeper connection to nature and urban environments."
      />

      
      </div>
    </section>
  );
};

export default Gallery;
