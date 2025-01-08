import React from "react";

const DropDown = ({
  id,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  title,
}) => {
  return (
    <div className="hover:border-amber-600 focus-within:border-primary p-2 max-w-[100%]">
      <label
        htmlFor={id}
        className="text-sm text-gray-500"
      >
        {title}
      </label>
      <select
        name={id}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:border-primary rounded-md p-2 text-sm w-full h-11 ${value === ""
            ? "bg-transparent"
            : "bg-white text-gray-900"
          }`}
        required={true}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="text-black text-sm"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
