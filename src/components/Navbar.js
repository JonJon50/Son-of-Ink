import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center space-x-8 py-4 text-white">
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/artist">
        <a>Artist</a>
      </Link>
      <Link href="/bookings">
        <a>Bookings</a>
      </Link>
    </nav>
  );
};

export default Navbar;
