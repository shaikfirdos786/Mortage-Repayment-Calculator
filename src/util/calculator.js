export const mortageCalculator = (formData) => {
  let monthlyRepayment = 0;
  let totalRepayment = 0;

  const principal = parseFloat(formData.amount);
  const interestRate = parseFloat(formData.interest) / 100 / 12;
  const totalPayments = parseFloat(formData.term) * 12;

  if (formData.mortgageType === "repayment") {
    monthlyRepayment =
      (principal * interestRate * Math.pow(1 + interestRate, totalPayments)) /
      (Math.pow(1 + interestRate, totalPayments) - 1);

    totalRepayment = monthlyRepayment * totalPayments;
  } else if (formData.mortgageType === "interest-only") {
    monthlyRepayment = principal * interestRate;
    totalRepayment = monthlyRepayment * totalPayments;
  }

  return { monthlyRepayment, totalRepayment };
};
