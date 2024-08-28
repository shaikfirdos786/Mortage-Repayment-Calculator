/* eslint-disable react/prop-types */

import Button from "../UI/Button";
import H2 from "../UI/H2";

export default function Header({Reset}) {
  return (
    <header className="md:flex md:justify-between w-full">
      <H2 className="font-bold text-xl">Mortgage Calculator</H2>
      <Button className="mt-2 mb-4 text-gray-500 underline text-sm font-semibold cursor-pointer" onClick={Reset}>
        Clear All
      </Button>
    </header>
  );
}
