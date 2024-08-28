/* eslint-disable react/prop-types */

import CustomInputGroup from "./CustomInputGroup";
import Input from "./Input";
import Label from "./Label";
import WrapperDiv from "./WrapperDiv";
import icon from "../../assets/icon-calculator.svg";
import Button from "../UI/Button";

export default function InputForm({
  formData,
  onChange,
  errors,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Label
        id="amount"
        className="text-gray-600 font-bold"
        text="Mortgage Amount"
      />
      <CustomInputGroup
        id="amount"
        name="amount"
        type="text"
        placeholder="Amount"
        spanText="$"
        spanClasses="border-r-0 rounded-l-md"
        inputClasses="pl-11 pr-2 py-2"
        onChange={onChange}
        value={formData.amount}
        hasError={errors.amount}
      />

      <div className="lg:flex lg:space-x-4">
        <div>
          <Label
            id="term"
            className="text-gray-600 font-bold"
            text="Mortgage Term"
          />
          <CustomInputGroup
            id="term"
            name="term"
            type="text"
            placeholder="Term"
            spanText="years"
            spanClasses="right-0 border-l-0 rounded-r-md"
            inputClasses="px-3 py-2"
            onChange={onChange}
            value={formData.term}
            hasError={errors.term}
          />
        </div>

        <div>
          <Label
            id="interest"
            className="text-gray-600 font-bold"
            text="Interest Rate"
          />
          <CustomInputGroup
            id="interest"
            name="interest"
            type="text"
            placeholder="Rate"
            spanText="%"
            spanClasses="right-0 border-l-0 rounded-r-md"
            inputClasses="px-3 py-2"
            onChange={onChange}
            value={formData.interest}
            hasError={errors.interest}
          />
        </div>
      </div>

      <Label className="text-gray-600 font-bold" text="Mortgage Type" />
      <WrapperDiv className="flex flex-col mt-2 space-y-1">
        <WrapperDiv className="flex items-center">
          <Input
            type="radio"
            name="mortgageType"
            id="repayment"
            className="hidden"
            value="repayment"
            checked={formData.mortgageType === "repayment"}
            onChange={onChange}
          />
          <Label
            id="repayment"
            className="custom-radio cursor-pointer py-2"
            text="Repayment"
          />
        </WrapperDiv>
        <WrapperDiv className="flex items-center">
          <Input
            type="radio"
            name="mortgageType"
            id="interest-only"
            className="hidden"
            value="interest-only"
            checked={formData.mortgageType === "interest-only"}
            onChange={onChange}
          />
          <Label
            id="interest-only"
            className="custom-radio cursor-pointer py-2"
            text="Interest Only"
          />
        </WrapperDiv>
        <Button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-custom-focus text-black text-sm font-bold rounded-3xl hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 lg:w-4/5"
        >
          <img src={icon} alt="icon" className="inline-block mr-2" />
          Calculate Repayments
        </Button>
      </WrapperDiv>
    </form>
  );
}
