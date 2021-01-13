import Link from "next/link";
import s from "./Navbar.module.css";
import Logo from "../../icons/Logo";

const Navbar = () => {
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              <Link href="https://fitvitals.dev/pricing">
                <a className={s.link}>Pricing</a>
              </Link>
              <Link href="https://fitvitals.dev/blog">
                <a className={s.link}>Blog</a>
              </Link>
              <Link href="/">
                <a className={s.link}>Learn</a>
              </Link>
              <Link href="https://fitvitals.dev/account">
                <a className={s.link}>Account</a>
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            <Link href="https://fitvitals.dev/signin">
              <a className={s.link}>Sign in</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
