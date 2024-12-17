'use client';
import { ErrorMessage, FastField } from 'formik';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

interface IProps {
  name?: 'string' | 'email' | 'password';
  type?: 'email' | 'password' | 'text' | 'file';
}

const FormControl: FC<IProps> = ({ name = '', type }) => {
  const t = useTranslations();
  return (
    <div className="form-control flex flex-col gap-1 ">
      <label className="text-black/60" htmlFor={name}>
        {t(name)}:
      </label>
      <FastField
        type={type}
        name={name}
        id={name}
        placeholder="Enter your email"
        className="p-2 border-gray-300 rounded 
        outline-none border border-transparent
        focus:border-primary duration-300"
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default FormControl;
