'use client';
import Image from 'next/image';
import Link from 'next/link';
//import { FC } from "react";
import { CiSearch } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube
} from 'react-icons/sl';
// import { toast } from "react-toastify";
// import MainButton from "../ui/Button";
import { usePathname } from 'next/navigation';

/**
 * ==> props interface
 */
// interface IProps {

// }

/**
 * ==> Component
 */
// : FC<IProps>
const Header = ({}) => {
  const path = usePathname();

  // const handleClick = ()=>{

  //     toast("done")

  // }
  return (
    <>
      <div className="bg-primary-200 hidden md:flex items-center justify-center py-3">
        <div className="container flex items-center justify-between">
          <div className="icons flex items-center gap-6">
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialFacebook />
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialTwitter />
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialInstagram />
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialYoutube />
            </Link>
          </div>
          <div className="actions flex items-center gap-6">
            <button>
              <i className="text-3xl font-bold">
                <CiSearch />
              </i>
            </button>
            <Link href="/login" className="btn main-btn">
              <span className="content">login</span>
            </Link>
          </div>
        </div>
      </div>
      <header className="bg-white/80 backdrop-blur-2xl backdrop-filter shadow-sm sticky top-0 z-50 border-b border-b-slate-100">
        <div className="container flex md:flex-col gap-8 justify-between md:justify-center flex-wrap items-center py-6">
          <div className="flex md:hidden">
            <button>
              <i className="text-3xl font-bold">
                <CiSearch />
              </i>
            </button>
          </div>
          <Link href={'/'} className="">
            <Image
              src={'/logo.png'}
              alt="website logo"
              className="object-contain mx-auto h-[30px] md:h-[50px] w-[100px] md:w-[150px] lg:w-[200px]"
              width={0}
              height={0}
              sizes="100vh"
            />
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href={'/'}
                  className={`text-xl font-medium duration-300
                hover:text-primary 
                ${path == '/' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  home
                </Link>
              </li>

              <li>
                <Link
                  href={'/recipes'}
                  className={`text-xl font-medium duration-300
                hover:text-primary 
                ${path == '/recipes' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href={'/categories'}
                  className={`text-xl font-medium duration-300
                 hover:text-primary 
                 ${
                   path == '/categories' ? 'text-primary' : 'text-secondary-100'
                 } `}
                >
                  categories
                </Link>
              </li>
              <li>
                <Link
                  href={'/about'}
                  className={`text-xl font-medium duration-300
                  hover:text-primary
                  ${path == '/about' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href={'/blogs'}
                  className={`text-xl font-medium duration-300 
                 hover:text-primary
                  ${path == '/blogs' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  blogs
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden">
            <button>
              <i className="text-2xl font-bold">
                <FaBars />
              </i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
