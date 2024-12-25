'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LogoutHandler = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('tastebitetoken');
    Cookies.remove('userData');
    router.push('/');
    toast.success('Logout successfully');
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="text-base md:text-lg flex items-center gap-1 font-semibold"
      >
        <MdOutlineLogout className="text-xl md:text-2xl" />
        logout
      </button>
    </>
  );
};

export default LogoutHandler;
