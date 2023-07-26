import Image from 'next/image';
import RootLayout from '../components/layout'; // Updated import statement

export default function Home() {
  return (
    <RootLayout> {/* Wrap the content with the RootLayout component */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-gray-800 text-white">
        {/* Your Navbar content goes here */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl font-bold">Your App Name</h1>
          </div>
          <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* The rest of your page content goes here */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Your page content */}
      </main>
    </RootLayout>
  );
}
