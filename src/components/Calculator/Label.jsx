/* eslint-disable react/prop-types */

export default function Label({ id, className, text }) {
  return (
    <label htmlFor={id ? id : undefined} className={`text-sm ${className}`}>
      {text}
    </label>
  );
}
