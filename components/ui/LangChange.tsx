import Cookies from 'js-cookie';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

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
        <button onClick={() => setLocale('en')}>lang en</button>
      ) : (
        <button onClick={() => setLocale('ar')}>lang ar</button>
      )}
    </>
  );
};

export default LangChange;
