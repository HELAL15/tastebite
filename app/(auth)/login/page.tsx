'use client';

import FormControl from '@/components/ui/FormControl';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Link from 'next/link';

interface IProps {
  role: string | undefined;
  email: string | undefined;
  password: string | undefined;
  message?: string | undefined;
  userData?:
    | {
        token: string | undefined;
        name?: string | string;
        role?: string;
        email?: string;
        id?: string;
        status?: string;
        avatar?: string;
      }
    | undefined;
}
/**
 * ==> Component
 */
const Page = () => {
  const initialValues = {
    email: '',
    password: '',
    role: 'user'
  };

  const validationSchema = object({
    email: string().email('Invalid email format').required('Email is required'),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    role: string().required('Account type is required')
  });

  const lang = Cookies.get('locale') || 'en';
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';
  const { mutate } = useMutation<IProps, Error, IProps>({
    mutationFn: async (newSetting) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(newSetting),
        headers: {
          'Content-Type': 'application/json',
          lang: lang
        }
      });
      return response.json();
    },
    onSuccess: (responseData) => {
      console.log('responseData:', responseData);

      const { token, role, email, id, name, avatar, status } =
        responseData?.userData || {};
      const userData = {
        role: role,
        email: email,
        id: id,
        name: name,
        avatar: avatar,
        status: status
      };
      if (token) {
        Cookies.set('tastebitetoken', token, { path: '/' });
        Cookies.set('userData', JSON.stringify(userData), { path: '/' });
      }
      toast.success(responseData?.message || 'Login successful');
      router.push(redirectTo);
    },
    onError: (err) => {
      console.error('Error:', err.message);
      alert('Login failed. Please try again.');
    }
  });

  return (
    <section className="">
      <div className="container grid place-items-center">
        <div className="w-full max-w-xl bg-primary-200 rounded p-3 md:p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              mutate(values, {
                onSettled: () => {
                  setSubmitting(false);
                  resetForm();
                }
              });
            }}
          >
            {({ isValid, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Email Field */}
                <FormControl name="email" type="email" />

                {/* Password Field */}
                <FormControl name="password" type="password" />
                <div className="flex items-center gap-1">
                  <p>already have an account?</p>
                  <Link className="text-primary underline" href={'register'}>
                    Register
                  </Link>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className=" px-4 py-2 bg-primary/90 hover:bg-primary text-white rounded disabled:bg-slate-500 disabled:cursor-not-allowed "
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  <Link
                    className="text-primary underline text-base"
                    href={'forget-password'}
                  >
                    forget password ?
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Page;
