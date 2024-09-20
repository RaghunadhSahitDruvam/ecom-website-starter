import React from "react";
import Link from "next/link";
const LinkComponent = ({
  href,
  text,
  textClassName,
  underLineClassName,
}: {
  href: string;
  text: string;
  textClassName: string;
  underLineClassName: string;
}) => {
  return (
    <div>
      <Link
        href={href}
        className={`text-sm font-medium ${textClassName}  group transition duration-300`}
      >
        {text}{" "}
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${underLineClassName}`}
        ></span>
      </Link>
    </div>
  );
};

export default LinkComponent;
