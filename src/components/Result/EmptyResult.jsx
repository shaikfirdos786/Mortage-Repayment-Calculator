import emptyLogo from "../../assets/illustration-empty.svg";
import H2 from "../UI/H2";
import P from "../UI/P";

export default function EmptyResult() {
  return (
    <div className="flex items-center justify-center flex-col text-center h-full">
      <img src={emptyLogo} alt="Calculator Logo" className="w-1/2 sm:w-1/3 md:w-1/2" />
      <H2 className="text-xl text-white font-bold mb-2">Results shown here</H2>
      <P className="text-gray-400 text-sm">
        Complete the form and click &#8220;calculate repayments&#8220; to see
        what your monthly repayments would be.
      </P>
    </div>
  );
}
