'use client'
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * ==> props interface
 */
interface IProps {
  children: React.ReactNode;
}

/**
 * ==> Component
 */
const ToastProvider: FC<IProps> = ({ children }) => {
  return (
    <>
    {children}
    <ToastContainer />
    </>
  );
}

export default ToastProvider;