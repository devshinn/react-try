import { Radio } from "@/components";
import React, { useEffect } from "react";
import { useLayoutEffect, useState } from "react";

const Page = () => {
  const [value, setValue] = useState("two");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="flex flex-col items-center">
      <Radio.Group setState={setValue} state={value}>
        <Radio.Button value={"one"}>아녕 여러분 one</Radio.Button>
        <Radio.Button value={"two"}>아녕 여러분 two</Radio.Button>
        <Radio.Button value={"three"}>아녕 여러분 three</Radio.Button>
        {/* <Radio. /> */}
      </Radio.Group>
      <h1 className="bold text-4xl text-blue-600">{value}</h1>
    </div>
  );
};
export default Page;
