'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch, CiUser } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube
} from 'react-icons/sl';
import { usePathname } from 'next/navigation';
import LangChange from '../ui/LangChange';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import MobileNav from '../ui/MobileNav';
interface IProps {
  name?: string;
  email?: string;
}
/**
 * ==> Component
 */
const Header = ({}) => {
  const path = usePathname();
  const t = useTranslations('nav');
  const [userData, setUserData] = useState<IProps>({});
  console.log(userData);

  const user = Cookies.get('userData');
  useEffect(() => {
    if (user) {
      setUserData(JSON.parse(user));
    } else {
      setUserData({});
    }
  }, [user]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  const can = Object.keys(userData).length !== 0;

  return (
    <>
      <div className="bg-primary-200 hidden md:flex items-center justify-center h-[64px]">
        <div className="container flex items-center justify-between">
          <div className="icons flex items-center gap-4">
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
            <LangChange />
            <button>
              <i className="text-2xl font-bold">
                <CiSearch />
              </i>
            </button>
            {!can && (
              <Link href="/login" className="btn main-btn">
                <span className="content">login</span>
              </Link>
            )}
            {can && (
              <Link href={'/profile'}>
                <CiUser className="text-2xl font-bold" />
              </Link>
            )}
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
              sizes="100"
            />
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href={'/'}
                  className={`text-base md:text-lg font-normal duration-300
                hover:text-primary 
                ${path == '/' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('home')}
                </Link>
              </li>

              <li>
                <Link
                  href={'/recipes'}
                  className={`text-base md:text-lg font-normal duration-300
                hover:text-primary 
                ${path == '/recipes' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('recipes')}
                </Link>
              </li>
              <li>
                <Link
                  href={'/categories'}
                  className={`text-base md:text-lg font-normal duration-300
                 hover:text-primary 
                 ${
                   path == '/categories' ? 'text-primary' : 'text-secondary-100'
                 } `}
                >
                  {t('categories')}
                </Link>
              </li>
              <li>
                <Link
                  href={'/about'}
                  className={`text-base md:text-lg font-normal duration-300
                  hover:text-primary
                  ${path == '/about' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={'/blogs'}
                  className={`text-base md:text-lg font-normal duration-300 
                hover:text-primary
                  ${path == '/blogs' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('blog')}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <i className="text-2xl font-bold">
                <FaBars />
              </i>
            </button>
          </div>
        </div>
      </header>
      <MobileNav
        can={can}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

export default Header;
