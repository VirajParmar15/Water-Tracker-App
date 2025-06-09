import React from "react";

export function Button({
  children,
  onClick,
  disabled = false,
  variant = "default",
  size = "md",
  className = "",
}) {
  const baseStyle = "font-semibold rounded-xl transition duration-200 shadow-sm";

  const variants = {
    default: "bg-blue-900 text-white hover:bg-blue-800",
    outline: "border border-gray-300 text-gray-800 bg-white hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "text-sm py-1.5 px-4",
    md: "text-md py-2 px-5",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}


