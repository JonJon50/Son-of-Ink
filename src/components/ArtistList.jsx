// // pages/artist.js
// import React from 'react';
// import Navbar from '../components/Navbar';

// const ArtistPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <h1>Artist Page</h1>
//       {/* Add the artist gallery using Splide */}
//     </div>
//   );
// };

// export default ArtistPage;

import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const ArtistList = () => {
  // Replace these image URLs with actual image URLs for the artists
  const artist1ImageUrl = '/Assets/Theron.png';
  const artist2ImageUrl = '/Assets/Johnny.png';

  return (
    <div>
      <Navbar /> {/* Add the Navbar at the top of the page */}
      <div className="flex justify-center">
        <Link href="/artist/1">
          <a>
            <img src={artist1ImageUrl} alt="Artist 1" className="w-48 h-48 object-cover" />
          </a>
        </Link>
        <Link href="/artist/2">
          <a>
            <img src={artist2ImageUrl} alt="Artist 2" className="w-48 h-48 object-cover" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ArtistList;
