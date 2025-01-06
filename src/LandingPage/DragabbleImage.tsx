import React, { useState, useEffect } from "react";

const DraggableImage = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position (x and y coordinates)
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Do not remove currentImageIndex
  const imageArray = [
    "/GraphicDesign/ErrarThumb.png",
    "/GraphicDesign/MonofolhaThumb.png",
    "/GraphicDesign/MurderThumb.png",
    "/GraphicDesign/OpenThumb.png",
    "/GraphicDesign/RewireThumb.png",
  ];
  const preloadImages = (images: string[]) => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const changeImage = (imgElement: HTMLImageElement) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % imageArray.length;
      imgElement.src = imageArray[newIndex]; // Update the image source
      return newIndex; // Update state
    });
  };
  

  useEffect(() => {
    preloadImages(imageArray);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, Math.min(e.clientX - offset.x, window.innerWidth - 100)),
          y: Math.max(0, Math.min(e.clientY - offset.y, window.innerHeight - 100)),
        });
      }
    };

    if (!isDragging) {

      let x: number = 0;
      let y: number = 0;
      let dirX: number = 1;
      let dirY: number = 1;
      const speed: number = 1.5;

      const dvd = document.getElementById("dragimg") as HTMLElement;
      if (!dvd) {
        throw new Error("Element with id 'dvd' not found.");
      }
      const imgElement = dvd as HTMLImageElement;
      
      const black = document.getElementById("dragcontainer") as HTMLElement;
      if (!black) {
        throw new Error("Element with id 'black' not found.");
      }

      const dvdWidth: number = dvd.clientWidth;
      const dvdHeight: number = dvd.clientHeight;

      function animate(): void {
        // Get the dimensions of the "dragcontainer" (black container)
        const blackHeight: number = black.clientHeight;
        const blackWidth: number = black.clientWidth;


        // Adjust direction when hitting the edges of the black container
        if (y + dvdHeight >= blackHeight || y < 0) {
          changeImage(imgElement);
          dirY *= -1;
        }
        if (x + dvdWidth >= blackWidth || x < 0) {
          changeImage(imgElement);
          dirX *= -1;
        }

        // Update position
        x += dirX * speed;
        y += dirY * speed;

        // Apply the new position
        dvd.style.left = `${x}px`;
        dvd.style.top = `${y}px`;

        // Request the next animation frame
        window.requestAnimationFrame(animate);
      }


      window.requestAnimationFrame(animate);

    }
    

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    
  }, [isDragging, offset]);
  
  return (
    <div id="dragcontainer">
      <img
        src="/Photography/IcebergThumb.png"
        alt="Draggable Work"
        id="dragimg"
        loading="lazy"
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default DraggableImage;
