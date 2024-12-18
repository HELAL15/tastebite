'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { IoMdClose } from 'react-icons/io';

interface IProps {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
  can?: boolean;
}

const MobileNav: FC<IProps> = ({ setIsMenuOpen, isMenuOpen, can }) => {
  const path = usePathname();
  const t = useTranslations('nav');
  return (
    <>
      <div
        className={`fixed h-screen py-8 top-0 ${
          isMenuOpen ? 'inset-x-0' : '-inset-x-full'
        }  bg-white shadow w-[90%] md:w-1/2 z-[99999999999] duration-300 `}
      >
        <div className="container">
          <div className="flex items-center justify-between">
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
            <button onClick={() => setIsMenuOpen(false)}>
              <i className="text-3xl font-bold">
                <IoMdClose />
              </i>
            </button>
          </div>
          <nav>
            <ul className="flex flex-col mt-20 gap-6">
              <li>
                <Link
                  href={'/'}
                  className={`text-2xl font-normal duration-300
                hover:text-primary 
                ${path == '/' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('home')}
                </Link>
              </li>

              <li>
                <Link
                  href={'/recipes'}
                  className={`text-2xl font-normal duration-300
                hover:text-primary 
                ${path == '/recipes' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('recipes')}
                </Link>
              </li>
              <li>
                <Link
                  href={'/categories'}
                  className={`text-2xl font-normal duration-300
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
                  className={`text-2xl font-normal duration-300
                  hover:text-primary
                  ${path == '/about' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={'/blogs'}
                  className={`text-2xl font-normal duration-300 
                hover:text-primary
                  ${path == '/blogs' ? 'text-primary' : 'text-secondary-100'} `}
                >
                  {t('blog')}
                </Link>
              </li>
              {can && (
                <li>
                  <Link
                    href={'/profile'}
                    className={`text-2xl font-normal duration-300
                hover:text-primary 
                ${path == '/profile' ? 'text-primary' : 'text-secondary-100'} `}
                  >
                    {t('profile')}
                  </Link>
                </li>
              )}
              {!can && (
                <li>
                  <Link
                    href={'/login'}
                    className={`text-2xl font-normal duration-300
                hover:text-primary 
                ${path == '/login' ? 'text-primary' : 'text-secondary-100'} `}
                  >
                    {t('login')}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
