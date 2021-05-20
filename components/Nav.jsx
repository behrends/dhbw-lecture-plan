import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/testing">Testbereich</Link>
        </li>
        <li>
          <Link href="/playground">Playground</Link>
        </li>
        <li>
          <Link href="/planning">Vorlesungsplanung</Link>
        </li>
        <li>
          <Link href="/about">Über</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
