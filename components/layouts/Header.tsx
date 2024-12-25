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
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import FormControl from '../ui/FormControl';
import { Form, Formik } from 'formik';
import { MdClose } from 'react-icons/md';

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

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
            <button onClick={openModal}>
              <i className="text-2xl font-bold">
                <CiSearch />
              </i>
            </button>
            <Dialog
              open={isModalOpen}
              as="div"
              className="relative duration-300 z-50 focus:outline-none"
              onClose={close}
            >
              <div
                onClick={closeModal}
                className="fixed duration-300 bg-primary-200/40 backdrop-blur-md inset-0 w-screen overflow-y-auto"
              >
                <div className="flex pt-20 justify-center p-4">
                  <DialogPanel
                    transition
                    className="w-full max-w-xl rounded shadow-lg p-6 bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                  >
                    <DialogTitle
                      as="h2"
                      className="text-lg font-bold flex items-center justify-between gap-1  "
                    >
                      <span>search in meals</span>
                      <button onClick={closeModal}>
                        <i className="text-2xl font-bold">
                          <MdClose />
                        </i>
                      </button>
                    </DialogTitle>

                    <Formik
                      initialValues={{
                        search: ''
                      }}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values);
                        setSubmitting(false);
                        resetForm();
                        closeModal();
                      }}
                    >
                      {({ isValid, isSubmitting }) => (
                        <Form className="flex items-stretch gap-1 w-full my-4">
                          {/* Email Field */}
                          <FormControl
                            cx="!border-primary-200 !focus:border-primary-100"
                            label=""
                            name="search"
                            type="text"
                          />
                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className=" px-4 py-2 bg-primary/90 hover:bg-primary text-white rounded disabled:bg-slate-500 disabled:cursor-not-allowed "
                          >
                            {isSubmitting ? (
                              'Submitting...'
                            ) : (
                              <i className="text-2xl font-bold">
                                <CiSearch />
                              </i>
                            )}
                          </button>
                        </Form>
                      )}
                    </Formik>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Image
                          sizes="100"
                          width={0}
                          height={0}
                          className="aspect-square rounded max-w-16 w-16 h-16 object-cover"
                          src="/breakfast.jpeg"
                          alt=""
                        />
                        <h3 className="text-base font-semibold">
                          title title title
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          sizes="100"
                          width={0}
                          height={0}
                          className="aspect-square rounded max-w-16 w-16 h-16 object-cover"
                          src="/breakfast.jpeg"
                          alt=""
                        />
                        <h3 className="text-base font-semibold">
                          title title title
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          sizes="100"
                          width={0}
                          height={0}
                          className="aspect-square rounded max-w-16 w-16 h-16 object-cover"
                          src="/breakfast.jpeg"
                          alt=""
                        />
                        <h3 className="text-base font-semibold">
                          title title title
                        </h3>
                      </div>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
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
      <header className="bg-white/80 backdrop-blur-2xl backdrop-filter shadow-sm sticky top-0 z-40 border-b border-b-slate-100">
        <div className="container flex md:flex-col gap-8 justify-between md:justify-center flex-wrap items-center py-6">
          <div className="flex md:hidden">
            <button onClick={openModal}>
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
