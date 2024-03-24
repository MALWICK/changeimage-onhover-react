
// import React, { useState, useEffect } from "react";

// const HoverImageCarousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
// const [intervalId, setIntervalId] = useState(null);

//   const hoverImageUrl = [
//     "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
//     "https://c1.neweggimages.com/productimage/nb300/19-113-793-03.png",
//     "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D.jpg",
//     "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V01.jpg",
//   ];

//   useEffect(() => {
//     const startRotation = () => {
//       const id = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hoverImageUrl.length);
//     }, 4000);
// setIntervalId(id);
//     };

//     const stopRotation = () => {
//       clearInterval(intervalId);
//     };
  
//     if (isHovered) {
//       startRotation();
//     } else {
//       stopRotation();
//     }

//     return stopRotation;
//   }, [isHovered]);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setCurrentImageIndex(0);
//   };

//   return (
//     <div>
//       <img
//         src={isHovered ? hoverImageUrl[currentImageIndex] : hoverImageUrl[0]}
//         alt="Hover Image"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       />
//     </div>
//   );
// };

// // export default HoverImageCarousel;
// import React, { useState, useEffect } from "react";
// import "./style.css";

// const HoverImageCarousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState({});
//   const [isHovered, setIsHovered] = useState(false);
//   const [intervalId, setIntervalId] = useState(null);

//   const hoverImages = [
//     {
//       name: "Image 1",
//       description: "Description 1",
//       hoverImageUrl: [
//         "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
//         "https://c1.neweggimages.com/productimage/nb300/11-353-205-V14.jpg",
//         "https://c1.neweggimages.com/productimage/nb300/11-353-205-V15.jpg",
//       ],
//     },
//     {
//       name: "Image 2",
//       description: "Description 2",
//       hoverImageUrl: [
//         "https://c1.neweggimages.com/productimage/nb300/19-113-793-03.png",
//         "https://c1.neweggimages.com/productimage/nb300/19-113-793-04.png",
//         "https://c1.neweggimages.com/productimage/nb300/19-113-793-05.png",
//       ],
//     },
//     {
//       name: "Image 3",
//       description: "Description 3",
//       hoverImageUrl: [
//         "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D.jpg",
//         "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D-1.jpg",
//         "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D-2.jpg",
//       ],
//     },
//     {
//       name: "Image 4",
//       description: "Description 4",
//       hoverImageUrl: [
//         "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V01.jpg",
//         "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V02.jpg",
//         "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V03.jpg",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const startRotation = () => {
//       const id = setInterval(() => {
//         setCurrentImageIndex((prevIndex) => {
//           const currentIndex = { ...prevIndex };
//           currentIndex[currentIndex.cardIndex] =
//             (currentIndex[currentIndex.cardIndex] + 1) %
//             hoverImages[currentIndex.cardIndex].hoverImageUrl.length;
//           return currentIndex;
//         });
//       }, 4000);
//       setIntervalId(id);
//     };

//     const stopRotation = () => {
//       clearInterval(intervalId);
//     };

//     if (isHovered) {
//       startRotation();
//     } else {
//       stopRotation();
//     }

//     return stopRotation;
//   }, [isHovered]);

//   const handleMouseEnter = (cardIndex) => {
//     setIsHovered(true);
//     setCurrentImageIndex((prevIndex) => ({ ...prevIndex, cardIndex }));
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setCurrentImageIndex({});
//   };

//   return (
//     <div className="container">
//       {hoverImages.map((image, index) => (
//         <div
//           key={index}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src={
//               isHovered && currentImageIndex.cardIndex === index
//                 ? image.hoverImageUrl[currentImageIndex[index]] // Use the corresponding hoverImageUrl
//                 : image.hoverImageUrl[0]
//             }
//             alt="Hover Image"
//           />
//           <div>
//             <h3>{image.name}</h3>
//             <p>{image.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HoverImageCarousel;

import React, { useState, useEffect } from "react";
import "./style.css";


const HoverImageCarousel = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [intervalIds, setIntervalIds] = useState({});

  const hoverImages = [
    {
      name: "Image 1",
      description: "Description 1",
      hoverImageUrl: [
        "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
        "https://c1.neweggimages.com/productimage/nb300/11-353-205-V14.jpg",
        "https://c1.neweggimages.com/productimage/nb300/11-353-205-V15.jpg",
      ],
    },
    {
      name: "Image 2",
      description: "Description 2",
      hoverImageUrl: [
        "https://c1.neweggimages.com/productimage/nb300/19-113-793-03.png",
        "https://c1.neweggimages.com/productimage/nb300/19-113-793-04.png",
        "https://c1.neweggimages.com/productimage/nb300/19-113-793-05.png",
      ],
    },
    {
      name: "Image 3",
      description: "Description 3",
      hoverImageUrl: [
        "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D.jpg",
        "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D-1.jpg",
        "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D-2.jpg",
      ],
    },
    {
      name: "Image 4",
      description: "Description 4",
      hoverImageUrl: [
        "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V01.jpg",
        "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V02.jpg",
        "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V03.jpg",
      ],
    },
  ];
  const startRotation = (cardIndex) => {
    const id = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) => {
        const currentIndexes = { ...prevIndexes };
        currentIndexes[cardIndex] =
          (currentIndexes[cardIndex] + 1) %
          hoverImages[cardIndex].hoverImageUrl.length;
        return currentIndexes;
      });
    }, 2000);
    setIntervalIds((prevIds) => ({ ...prevIds, [cardIndex]: id }));
  };

  const stopRotation = (cardIndex) => {
    clearInterval(intervalIds[cardIndex]);
    setIntervalIds((prevIds) => {
      const updatedIds = { ...prevIds };
      delete updatedIds[cardIndex];
      return updatedIds;
    });
  };

  const handleMouseEnter = (cardIndex) => {
    setIsHovered(true);
    setCurrentImageIndexes((prevIndexes) => ({
      ...prevIndexes,
      [cardIndex]: prevIndexes[cardIndex] || 0,
    }));
    startRotation(cardIndex);
  };

  const handleMouseLeave = (cardIndex) => {
    setIsHovered(false);
    setCurrentImageIndexes((prevIndexes) => {
      const currentIndexes = { ...prevIndexes };
      delete currentIndexes[cardIndex];
      return currentIndexes;
    });
    stopRotation(cardIndex);
  };

  useEffect(() => {
    return () => {
      Object.keys(intervalIds).forEach((cardIndex) => {
        stopRotation(cardIndex);
      });
    };
  }, [intervalIds]);

  return (
    <div className="container" >
      {hoverImages.map((image, index) => (
        <div 
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img className="image"
            src={
              isHovered && currentImageIndexes[index] !== undefined
                ? image.hoverImageUrl[currentImageIndexes[index]]
                : image.hoverImageUrl[0]
            }
            alt="Hover Image"
          />
          <div>
            <h3>{image.name}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverImageCarousel;