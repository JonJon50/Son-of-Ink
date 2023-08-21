// artistsData.jsx is a file that contains an array of objects. Each object represents an artist and contains the following properties:



const artistsData = [
    {
      name: 'Theron',
      imageUrl: '/Assets/Theron.png',
      bio: "I'm Artist 1. Ut commodo pharetra nisi a egestas...",
      galleryImages: [
        { url: '/images/theron-gallery1.jpg' },
        { url: '/images/theron-gallery2.jpg' },
        // ... add more images for Theron's gallery
      ],
    },
    {
      name: 'Jonny',
      imageUrl: '/Assets/Johnny.png',
      bio: "I'm Artist 2. Ut commodo pharetra nisi a egestas...",
      galleryImages: [
        { url: '/images/jonny-gallery1.jpg' },
        { url: '/images/jonny-gallery2.jpg' },
        // ... add more images for Jonny's gallery
      ],
    },
    // ... add more artists with their data
  ];
  
  export default artistsData;