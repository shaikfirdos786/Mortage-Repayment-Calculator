/* eslint-disable react/prop-types */

import Input from "./Input";
import WrapperDiv from "./WrapperDiv";

export default function CustomInputGroup({
  id,
  name,
  placeholder,
  type = "text",
  spanClasses,
  spanText,
  inputClasses,
  onChange,
  value,
  hasError,
}) {
  return (
    <>
      <WrapperDiv className="relative mb-3 mt-2 group">
        <span
          className={`absolute inset-y-0 flex items-center px-3 py-2 text-gray-600 text-sm font-bold border ${spanClasses} ${
            hasError
              ? "bg-red-500 border-red-500"
              : "bg-gray-200 border-gray-300 group-focus-within:bg-custom-focus group-focus-within:border-custom-focus"
          }`}
        >
          {spanText}
        </span>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`w-full rounded-md outline-none text-sm font-bold ${
            hasError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-custom-focus"
          } ${inputClasses}`}
          style={{ borderWidth: "1px" }} // Ensures the border is visible
        />
      </WrapperDiv>
      {hasError && (
        <p className="text-red-500 text-xs mt-1">This field is required.</p>
      )}
    </>
  );
}
