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
        <p>Although I have room to flourish in unlimited styles of tattoos, I have a fondness for American Traditional work. I’m still pushing my limits and expanding my skill set every day.</p>
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
    id: 2,
    name: "Douglas",
    imageUrl: "/Assets/douglas.png", // Image URL for Art profile picture
    bio: (
      <>
        <p>Hello, my name Douglas.</p>
        <p>
          I am a new artist and recent apprentice at Inkstaind Tattoo,  <a
            href="https://planetlbx.com/"
            style={{ color: "red" }} // Corrected style object
          >
            PLANET LUNCHBOX
          </a>
          .
        </p>
        <p>Welcome to the home planet of earth bound Tattoo Artist Doug-E! You can find all his Art and Merch exclusively here!
          Ready for your next Tattoo? Just click and book your appointment today! </p>

      </>
    ),
    galleryImages: [
      { url: "/Assets/f.png" },
      { url: "/Assets/g.png" },
      { url: "/Assets/h.png" },
      { url: "/Assets/i.png" },
      { url: "/Assets/j.png" },
    ],
  },
  // ... add more artists with their data
];


export default artistsData;
