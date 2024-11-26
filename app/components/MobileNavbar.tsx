import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

// Props Type
type Props = {
  showNav: boolean;
  hideNav: () => void;
};

export const MobileNavbar = ({ hideNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>

      {/* Sidebar */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#240046] space-y-6 z-[10000]`}
      >
        {navLinks.map((navlink) => {
          return (
            <Link href={navlink.url} key={navlink.id}>
              <p className="text-lg sm:text-2xl font-semibold ml-12 border-b-[1.5px] pb-2 border-white hover:text-[#f72585] transition-all duration-300">
                {navlink.label}
              </p>
            </Link>
          );
        })}

        {/* Close Button */}
        <CgClose
          onClick={hideNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white hover:text-[#f72585] transition duration-300"
        />
      </div>
    </>
  );
};
