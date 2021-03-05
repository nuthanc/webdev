import Link from 'next/link';


const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          <li key="signin" className="nav-item">
            <Link href="/auth/signup">
              <a className="nav-link">Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;