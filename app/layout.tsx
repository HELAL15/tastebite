import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NextTopLoader from 'nextjs-toploader';
import ToastProvider from '@/providers/ToastProvider';

export const metadata: Metadata = {
  title: 'Tastebite - Food Recipe',
  description:
    'Tastebite is your ultimate food recipe destination, offering a wide range of delicious and easy-to-follow recipes for every taste and occasion. From quick meals to gourmet dishes, Tastebite brings together culinary inspiration with detailed step-by-step instructions, ingredient lists, and cooking tips to make every dish a success. Discover your next favorite recipe today and elevate your home cooking with Tastebite!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#ff642f" height={4} showSpinner={false} />
        <Header />
        <main>
          <ToastProvider>{children}</ToastProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
