import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from 'react-icons/sl';
import FooterLinks from '../ui/FooterLinks';

const footerLinks = [
  {
    id: 0,
    title: 'Tastebite',
    links: [
      { id: 0, href: '/about', title: 'About' },
      { id: 1, href: '/contact', title: 'Contact' },
      { id: 2, href: '/careers', title: 'Careers' },
      { id: 3, href: '/feedback', title: 'Feedback' },
    ],
  },
  {
    id: 1,
    title: 'legal',
    links: [
      { id: 0, href: '/terms', title: 'terms' },
      { id: 1, href: '/conditions', title: 'conditions' },
      { id: 2, href: '/cookies', title: 'cookies' },
      { id: 3, href: '/copyright', title: 'Feedback' },
    ],
  },
  {
    id: 2,
    title: 'follow',
    links: [
      { id: 0, href: '/facebook', title: 'facebook' },
      { id: 1, href: '/twitter', title: 'twitter' },
      { id: 2, href: '/instagram', title: 'instagram' },
      { id: 3, href: '/youtube', title: 'youtube' },
    ],
  },
];

/**
 * ==> Component
 */
const Footer = ({}) => {
  return (
    <>
      <footer className=" bg-secondary-200/30 py-6 pt-10">
        <div className="container">
          <div className="flex items-cetner justify-between flex-wrap gap-4">
            <div className="space-y-3 w-full lg:max-w-[400px]">
              <Link href={'/'} className="block w-fit">
                <Image
                  src={'/logo.png'}
                  alt="website logo"
                  className="object-contain"
                  width={150}
                  height={50}
                  sizes="100vh"
                />
              </Link>
              <p className="text-base font-medium text-secondary-100">
                Tastebite is your go-to site for mouthwatering recipes across
                cuisines and occasions. Explore easy, detailed recipes with
                step-by-step instructions, ingredient lists, and cooking tips
                that ensure great results every time. Discover new flavors and
                elevate your cooking with Tastebite!
              </p>
            </div>
            {footerLinks.map((link) => (
              <FooterLinks
                key={link.id}
                title={link.title}
                links={link.links}
              />
            ))}
          </div>
        </div>
        <div className="container mt-6 pt-6 flex gap-6 flex-wrap-reverse items-center justify-center md:justify-between border-t border-t-slate-200 ">
          <p className="text-lg">&copy; 2024 Tastebite - all rights reserved</p>
          <div className="icons flex items-center gap-6">
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-secondary-200 duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialFacebook />
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-secondary-200 duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialTwitter />
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-secondary-200 duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialInstagram />
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className="text-base font-bold w-8 h-8 rounded-full bg-secondary-200 duration-300 hover:bg-primary hover:text-white grid place-items-center"
            >
              <SlSocialYoutube />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
