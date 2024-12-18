'use client';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

/**
 * ==> props interface
 */
interface IProps {
  title: string;
}

/**
 * ==> Component
 */
const SecTitle: FC<IProps> = ({ title }) => {
  const t = useTranslations('secTitle');
  return (
    <>
      <h3 className="text-2xl font-bold mb-6 md:mb-10">{t(title)}</h3>
    </>
  );
};

export default SecTitle;
