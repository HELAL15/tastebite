import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NextTopLoader from 'nextjs-toploader';
import ToastProvider from '@/providers/ToastProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import QueryProvider from '@/providers/QueryProvider';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Tastebite - Food Recipe',
  description:
    'Tastebite is your ultimate food recipe destination, offering a wide range of delicious and easy-to-follow recipes for every taste and occasion. From quick meals to gourmet dishes, Tastebite brings together culinary inspiration with detailed step-by-step instructions, ingredient lists, and cooking tips to make every dish a success. Discover your next favorite recipe today and elevate your home cooking with Tastebite!'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <NextTopLoader color="#ff642f" height={4} showSpinner={false} />
            <Header />
            <main>
              <ToastProvider>{children}</ToastProvider>
            </main>
            <Footer />
            <ToastContainer />
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
