/* eslint-disable react/prop-types */

import WrapperDiv from "../Calculator/WrapperDiv";
import H2 from "../UI/H2";
import P from "../UI/P";

export default function Result({ repayments }) {
  // Receive repayments as a prop
  return (
    <div>
      <H2 className="text-xl text-white font-bold mb-1 lg:mb-8">Your Results</H2>
      <P className="text-gray-400 text-sm lg:text-[15px] lg:mb-10">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &#8220;calculate repayments
        &#8220; again.
      </P>
      <WrapperDiv className="bg-slate-950 mt-4 p-4 lg:p-6 space-y-2 lg:space-y-4 rounded-md border-t-4 border-t-yellow-400">
        <P className="text-gray-400">Your monthly repayments</P>
        <P className="text-yellow-400 text-2xl font-bold">
          ${repayments.monthlyRepayment}
        </P>
        <hr />
        <P className="text-gray-400">Total you will pay over the term</P>
        <P className="text-white text-lg font-bold">
          ${repayments.totalRepayment}
        </P>
      </WrapperDiv>
    </div>
  );
}
