import Cookies from 'js-cookie';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';

const LangChange = () => {
  const router = useRouter();
  const path = usePathname();
  const setLocale = (locale: string) => {
    Cookies.set('locale', locale, { path: '/' });
    router.push(path);
    router.refresh();
  };

  const locale = useLocale();
  return (
    <>
      {locale === 'ar' ? (
        <button
          className="flex items-center gap-1"
          onClick={() => setLocale('en')}
        >
          en
          <AiOutlineGlobal className="text-xl" />
        </button>
      ) : (
        <button
          className="flex items-center gap-1"
          onClick={() => setLocale('ar')}
        >
          العربية
          <AiOutlineGlobal className="text-xl" />
        </button>
      )}
    </>
  );
};

export default LangChange;
