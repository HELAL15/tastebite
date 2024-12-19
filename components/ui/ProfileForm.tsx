'use client';

import React from 'react';
import FormControl from '@/components/ui/FormControl';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';

const ProfileForm = () => {
  const initialValues = {
    email: '',
    password: '',
    account_type: 'user'
  };

  const validationSchema = object({
    email: string().email('Invalid email format').required('Email is required'),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    account_type: string().required('Account type is required')
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form className=" grid md:grid-cols-2 gap-4 mt-8">
            {/* Email Field */}
            <FormControl
              name="name"
              type="text"
              placeholder="enter your full name"
            />

            {/* Email Field */}
            <FormControl name="email" type="email" />

            {/* Password Field */}
            <FormControl name="password" type="password" />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="md:col-span-2 w-fit mt-4 px-4 py-2 bg-primary/90 hover:bg-primary text-white rounded disabled:bg-slate-500 disabled:cursor-not-allowed "
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
