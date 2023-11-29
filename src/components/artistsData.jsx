// artistsData.jsx is a file that contains an array of objects. Each object represents an artist and contains the following properties:

// Define an array of artist objects
const artistsData = [
  {
    name: "Theron",
    imageUrl: "/Assets/Theron.png", // Image URL for Theron's profile picture
    bio: (
      <>
      <p>Hello, my name is Theron.</p>
      <p>I am a new artist and recent apprentice at Inkstaind Tattoo, where I learned everything I know about the profession from Crystal.</p>
      <p>I grew up in Buckley WA, producing creative drawings from a young age. I graduated from White River with knowledge and passion for art and graphic design, along with several art show awards and publicized pieces of work.</p>
      <p>Although I have room to flourish in unlimited styles of tattoos, I have a fondness for American Traditional work. I can’t help but gravitate toward bold lines and bright colors. I’m still pushing my limits and expanding my skill set every day.</p>
    </>
  ), 
    galleryImages: [
      { url: "/Assets/1.png" },
      { url: "/Assets/2.png" },
      { url: "/Assets/3.png" },
      { url: "/Assets/4.png" },
      { url: "/Assets/5.png" },
      { url: "/Assets/6.png" },
      { url: "/Assets/7.png" },
    ],
  },
  {
    name: "Art",
    imageUrl: "/Assets/tatArt.png", // Image URL for Art profile picture
    bio: "", 
    galleryImages: [
      { url: "/Assets/d.png" },
      { url: "/Assets/c.png" },
      { url: "/Assets/b.png" },
      { url: "/Assets/a.png" },
      { url: "/Assets/e.png" },
    ],
  },
  // ... add more artists with their data
];


export default artistsData;
