"use client";

import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import type { FC, ChangeEvent, JSX } from "react"; // <-- ADD THIS LINE
interface InputFieldProps {
  type: "text" | "email" | "password";
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  color?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  label,
  placeholder = "",
  onChange,
  readOnly = false,
  color = "#000",
}) => {
  const [isPassShown, setIsPassShown] = useState(false);

  const inputType = (inputType: string): string => {
    return inputType === "password"
      ? isPassShown
        ? "text"
        : "password"
      : inputType;
  };

  const icon = (inputType: string): JSX.Element | null => {
    if (inputType === "email") return <FaRegUser />;
    if (inputType === "password") return <FiLock />;
    return null; // <-- Always return null explicitly
  };

  const toggleEye = (): void => {
    setIsPassShown((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <label className="font-bold" style={{ color }} htmlFor={id}>
        {label}
      </label>
      <div>
        <div className="relative w-fit">
          {/* Right icon for password */}
          {type === "password" && (
            <div
              onClick={toggleEye}
              style={{ color }}
              className="absolute right-1 text-lg translate-y-1/2 bottom-1/2 cursor-pointer"
            >
              {isPassShown ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          )}
          {/* Left icon */}
          <div
            style={{ color }}
            className="text-lg absolute left-1 translate-y-1/2 bottom-1/2"
          >
            {icon(type)}
          </div>
          {/* Input field */}
          <input
            style={{ borderColor: color }}
            className="border-b-2 pl-7 p-1 focus-visible:outline-none"
            tabIndex={1}
            onChange={onChange}
            type={inputType(type)}
            id={id}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        </div>
      </div>
    </div>
  );
};
