/* eslint-disable react/prop-types */

import WrapperDiv from "../Calculator/WrapperDiv";

export default function ResultContainer({ children }) {
  return (
    <WrapperDiv className="bg-slate-900 w-full px-4 py-6 lg:p-8 md:w-1/2 md:rounded-r-md md:rounded-bl-3xl lg:rounded-r-xl lg:rounded-bl-[48px]">
      {children}
    </WrapperDiv>
  );
}
