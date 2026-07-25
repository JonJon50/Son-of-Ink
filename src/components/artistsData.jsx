// artistsData.jsx is a file that contains an array of objects. Each object represents an artist and contains the following properties:

// Define an array of artist objects
const artistsData = [
  {
    id: 1,
    name: "Theron",
    imageUrl: "/Assets/d.png", // Image URL for Theron's profile picture
    bio: (
      <>
        <p>Hello, my name is Theron.</p>
        <p>
          I am the owner and operator of,  <a
            href="https://www.instagram.com/theronissac/"
            style={{ color: "red" }} // Corrected style object
          >
            SON OF INK
          </a>
          .
        </p>
        <p>I grew up in DMV, producing creative drawings from a young age. I have a passion for art and graphic design, along with several art show awards and publicized pieces of work.</p>
        <p>I have room to flourish in unlimited styles of tattoos, I specialize in black and grey realistic style. I’m still pushing my limits and expanding my skill set every day.</p>
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
  // ... add more artists with their data
];


export default artistsData;
