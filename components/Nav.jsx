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
          <Link href="/courses">Kurse</Link>
        </li>
        <li>
          <Link href="/about">Über</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
