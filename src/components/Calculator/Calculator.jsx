/* eslint-disable react/prop-types */

import Header from "./Header";
import InputForm from "./InputForm";
import "./Calculator.css";

export default function Calculator({
  formData,
  onChange,
  errors,
  handleSubmit,
  onReset,
}) {
  return (
    <>
      <div className="h-3/4 p-4 md:w-1/2 lg:p-8 xl">
        <Header Reset={onReset} />
        <InputForm
          formData={formData}
          onChange={onChange}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
