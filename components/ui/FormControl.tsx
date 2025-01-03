'use client';
import { ErrorMessage, FastField } from 'formik';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

interface IProps {
  name?: string;
  type?: 'email' | 'password' | 'text' | 'file';
  placeholder?: string;
  label?: string;
  cx?: string;
}

const FormControl: FC<IProps> = ({
  name = '',
  type,
  placeholder = 'this is placeholder',
  label = '',
  cx = ''
}) => {
  const t = useTranslations();
  return (
    <div className="form-control flex flex-col gap-1 flex-grow ">
      {label && (
        <label className="text-black/60" htmlFor={name}>
          {t(name)}:
        </label>
      )}
      <FastField
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`p-2 w-full  border-gray-300 rounded 
        outline-none border border-transparent
        focus:border-primary duration-300
        ${cx}
        `}
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default FormControl;
