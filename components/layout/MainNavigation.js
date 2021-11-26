import Link from 'next/link';
import Image from 'next/image';

function MainNavigation() {
  return (
    <header className="flex w-full justify-between bg-gray-900 py-5 px-16 text-xl text-white">
      <div className="flex items-center">
        <Image src={'/logo192.png'} width={40} height={40} alt="logo" /> <h2 className='ml-2'>Hackerlabs</h2>
      </div>
      <nav className="w-1/3">
        <ul className="flex w-full justify-between text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Devs</Link>
          </li>
          <li>
            <Link href="/">Tech</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
