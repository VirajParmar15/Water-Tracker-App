import React from "react";

export function Button({
  children,
  onClick,
  disabled = false,
  variant = "default",
  size = "md",
  className = "",
}) {
  const baseStyle = "font-semibold rounded px-4 py-2 transition duration-200";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "text-sm py-1 px-3",
    md: "text-md py-2 px-4",
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
