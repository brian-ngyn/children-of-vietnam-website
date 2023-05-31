import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isCurrPathStyling = "text-green underline underline-offset-[1.5px] decoration-2";
  const notCurrPathStyling = "text-green transition hover:text-green/75";

  return (
    <header aria-label="Site Header" className="sticky left-0 top-0 z-50 bg-off-white">
      <div className="z-50 mx-4 border-b-[1.5px] border-[#dad7d1]">
        <div className="mx-auto flex h-16 items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
          <Link className="relative block aspect-square h-full text-green" href="/">
            <Image
              style={{ objectFit: "contain" }}
              fill={true}
              src="/logos/logo-no-text.png"
              alt="Logo"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-4 text-sm">
                <li>
                  <Link
                    className={pathname === "/about-us" ? isCurrPathStyling : notCurrPathStyling}
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === "/team" ? isCurrPathStyling : notCurrPathStyling}
                    href="/team"
                  >
                    Team
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === "/events" ? isCurrPathStyling : notCurrPathStyling}
                    href="/events"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === "/join-us" ? isCurrPathStyling : notCurrPathStyling}
                    href="/join-us"
                  >
                    Join Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
