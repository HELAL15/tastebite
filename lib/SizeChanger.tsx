'use client'

import { FC, useState } from "react";

/**
 * ==> props interface
 */
interface IProps {
  children?: React.ReactNode;
  cx?: string;
  count?: number;
}

/**
 * ==> Component
 */
const SizeChanger: FC<IProps> = ({ children, cx, count = 4 }) => {
  const [size, setSize] = useState("md:grid-cols-4");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSize(value);
  };

  return (
    <>
      <div className="size-changer flex items-center justify-center gap-6 mb-16">
        {Array.from({ length: count }, (_, index) => {
          const isChecked = size === `md:grid-cols-${index + 1}`;
          return (
            <label key={index} className="">
              <input
                type="radio"
                checked={isChecked}
                onChange={handleChange}
                name="size"
                value={`md:grid-cols-${index + 1}`}
                className="hidden"
              />
              <div
                className={`flex items-center gap-1 w-24 h-8 p-1 border ${
                  isChecked ? "border-primary" : "border-secondary-100"
                }`}
              >
                {Array.from({ length: index + 1 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-full w-full flex-grow ${
                      isChecked ? "bg-primary" : "bg-secondary-100"
                    }`}
                  ></span>
                ))}
              </div>
            </label>
          );
        })}
      </div>

      <div className={`grid ${cx} ${size} gap-6`}>{children}</div>
    </>
  );
};

export default SizeChanger;
