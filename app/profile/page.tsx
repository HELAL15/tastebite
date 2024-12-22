import MainButton from '@/components/ui/Button';
import PageHeading from '@/components/ui/PageHeading';
import ProfileForm from '@/components/ui/ProfileForm';
import { MdOutlineLogout } from 'react-icons/md';

import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tastebite - profile'
};
/**
 * ==> Component
 */
const page = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4 pb-3 mb-6 md:mb-10 border-b border-b-secondary-200">
            <PageHeading border={false} title="profile" />
            <div className="flex items-center flex-wrap gap-8">
              <button className="text-lg flex items-center gap-1 font-semibold">
                <MdOutlineLogout className="text-xl md:text-2xl" />
                logout
              </button>
              <button className="text-lg text-primary font-semibold">
                delete account
              </button>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2 md:gap-4">
            <Image
              sizes="100"
              width={0}
              height={0}
              src="/header.png"
              alt="avatar"
              className="avatar rounded-full aspect-square w-24 h-24 object-cover"
            />
            <button className="btn primary-btn">
              <span className="content">change photo</span>
            </button>
          </div>
          <ProfileForm />
          <div className="mt-8 flex items-center flex-wrap gap-20">
            <p className="flex flex-col gap-2">
              <span className="text-xl font-bold">newsletter</span>
              <span>you are currently subscribed to our newsletter</span>
            </p>
            <MainButton title="unsubscribe" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
