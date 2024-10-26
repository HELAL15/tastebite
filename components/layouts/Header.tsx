'use client'
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { toast } from "react-toastify";


/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Header: FC<IProps> = ({  }) => {
  return (
    <>
      <div className="bg-primary-100 hidden md:flex items-center justify-center py-3">
        <div className="container flex items-center justify-between">
          <div className="icons flex items-center gap-6">
          <Link href={"/"}  target="_blank" className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center">
            <SlSocialFacebook />
          </Link>
          <Link href={"/"}  target="_blank" className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center">
            <SlSocialTwitter />
          </Link>
          <Link href={"/"}  target="_blank" className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center">
            <SlSocialInstagram />
          </Link>
          <Link href={"/"}  target="_blank" className="text-base font-bold w-8 h-8 rounded-full bg-white duration-300 hover:bg-primary hover:text-white grid place-items-center"> 
            <SlSocialYoutube />
          </Link>
          </div>
          <div className="actions flex items-center gap-6">
            <button>
              <i className="text-3xl font-bold">
              <CiSearch />
              </i>
            </button>
            <button onClick={()=>{
              toast("done")
            }} className="px-10 py-1 text-lg font-semibold border border-black rounded">
              login
            </button>
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
        <Link href={"/"} className="">
          <Image 
            src={'/logo.png'}
            alt="website logo"
            className="object-contain mx-auto h-[30px] md:h-[50px] w-[100px] md:w-[150px] lg:w-[200px]"
            width={0}
            height={0}
            sizes="100vh" />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <Link href={"/"} className="text-xl font-medium duration-300 text-secondary-100 hover:text-primary" >
                home
              </Link>
            </li>
            <li>
              <Link href={"/recipes"} className="text-xl font-medium duration-300 text-secondary-100 hover:text-primary" >
                Recipes
              </Link>
            </li>
            <li>
              <Link href={"/categories"} className="text-xl font-medium duration-300 text-secondary-100 hover:text-primary" >
                categories
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-xl font-medium duration-300 text-secondary-100 hover:text-primary" >
                about
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-xl font-medium duration-300 text-secondary-100 hover:text-primary" >
                blog
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
}

export default Header;