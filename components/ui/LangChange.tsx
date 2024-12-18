import Cookies from 'js-cookie';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';

interface IProps {
  setIsMenuOpen?: (value: boolean) => void;
}

const LangChange: FC<IProps> = ({ setIsMenuOpen }) => {
  const router = useRouter();
  const path = usePathname();
  const setLocale = (locale: string) => {
    Cookies.set('locale', locale, { path: '/' });
    router.push(path);
    router.refresh();
  };

  const locale = useLocale();

  useEffect(() => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [locale, router, setIsMenuOpen]);

  return (
    <>
      {locale === 'ar' ? (
        <button
          className="text-base flex items-center gap-1"
          onClick={() => setLocale('en')}
        >
          english
          <AiOutlineGlobal className="text-2xl" />
        </button>
      ) : (
        <button
          className="text-base flex items-center gap-1"
          onClick={() => setLocale('ar')}
        >
          العربية
          <AiOutlineGlobal className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default LangChange;
