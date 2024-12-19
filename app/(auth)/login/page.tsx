'use client';

import FormControl from '@/components/ui/FormControl';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

interface IProps {
  account_type: string | undefined;
  email: string | undefined;
  password: string | undefined;
  message?: string | undefined;
  data?:
    | {
        token: string | undefined;
        name?: string | string;
        account_type?: string;
        email?: string;
        id?: string;
        status?: string;
        photo_profile?: string;
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
    account_type: 'user'
  };

  const validationSchema = object({
    email: string().email('Invalid email format').required('Email is required'),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    account_type: string().required('Account type is required')
  });

  const lang = Cookies.get('locale') || 'en';

  const { mutate } = useMutation<IProps, Error, IProps>({
    mutationFn: async (newSetting) => {
      const response = await fetch(
        'https://backend.smartvision4p.com/ecommerce-multivendor/public/api/user/login',
        {
          method: 'POST',
          body: JSON.stringify(newSetting),
          headers: {
            'Content-Type': 'application/json',
            lang: lang
          }
        }
      );
      return response.json();
    },
    onSuccess: (responseData) => {
      const { token, account_type, email, id, name, photo_profile, status } =
        responseData?.data || {};
      const userData = {
        type: account_type,
        email: email,
        id: id,
        name: name,
        avatar: photo_profile,
        status: status
      };
      if (token) {
        Cookies.set('tastebitetoken', token, { path: '/' });
        Cookies.set('userData', JSON.stringify(userData), { path: '/' });
      }
      toast.success(responseData?.message || 'Login successful');
    },
    onError: (err) => {
      console.error('Error:', err.message);
      alert('Login failed. Please try again.');
    }
  });

  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';

  return (
    <section>
      <div className="container grid place-items-center">
        <div className="w-full max-w-xl bg-primary-200 rounded p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              mutate(values, {
                onSettled: () => {
                  setSubmitting(false);
                  resetForm();
                  router.push(redirectTo);
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="mt-4 px-4 py-2 bg-primary/90 hover:bg-primary text-white rounded disabled:bg-slate-500 disabled:cursor-not-allowed "
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Page;
