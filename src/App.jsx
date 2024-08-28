import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import ResultContainer from "./components/Result/ResultContainer";
import Result from "./components/Result/Result"; // Import the Result component
import { mortageCalculator } from "./util/calculator";
import EmptyResult from "./components/Result/EmptyResult";

export default function App() {
  const [formData, setFormData] = useState({
    amount: "",
    term: "",
    interest: "",
    mortgageType: "repayment",
  });

  const [repayments, setRepayments] = useState({
    monthlyRepayment: 0,
    totalRepayment: 0,
  });

  const [errors, setErrors] = useState({
    amount: false,
    term: false,
    interest: false,
  });

  const [hasResults, setHasResults] = useState(false); // Add state for result display

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Reset the error for the field if it's filled
    if (value) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      amount: formData.amount.trim() === "",
      term: formData.term.trim() === "",
      interest: formData.interest.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      const { monthlyRepayment, totalRepayment } = mortageCalculator(formData);

      setRepayments({
        monthlyRepayment: monthlyRepayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2),
      });

      setHasResults(true); // Set hasResults to true when results are available
    }
  };

  const handleReset = () => {
    setFormData({
      amount: "",
      term: "",
      interest: "",
      mortgageType: "repayment",
    });

    setHasResults(false)
  };

  return (
    <div className="md:items-center md:justify-center flex min-h-screen lg:h-4/5">
      <div className="flex flex-col md:flex-row w-screen bg-white h-full md:w-4/5 md:rounded-md lg:w-[90%] xl:w-3/5">
        <Calculator
          formData={formData}
          onChange={handleChange}
          errors={errors}
          handleSubmit={handleSubmit}
          onReset={handleReset}
        />
        <ResultContainer>
          {hasResults ? (
            <Result repayments={repayments} /> // Display Result component
          ) : (
            <EmptyResult /> // Display ResultContainer component
          )}
        </ResultContainer>
      </div>
    </div>
  );
}
