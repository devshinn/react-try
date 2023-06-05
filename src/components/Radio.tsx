import React from "react";
import { useState, useEffect } from "react";
interface RadioButtonProps {
  children: React.ReactNode;
  value: any;
  id?: string;
  name?: string;
  state?: any;
  setState?: React.Dispatch<any>;
}

const RadioButton = ({ value, children, ...props }: RadioButtonProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setState !== undefined && props.setState(e.currentTarget.value);
  };
  return (
    <div className="inline-block">
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={value}
        className="hidden peer"
        defaultChecked={value == props.state}
        onChange={onChange}
      />
      <label
        htmlFor={props.id}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 
				bg-white border border-gray-200 rounded-lg cursor-pointer 
				dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700
				peer-checked:border-blue-600 peer-checked:text-blue-600 dark:peer-checked:text-blue-500 "
      >
        <div className="block">
          <div className="w-full text-lg font-semibold">0-50 MB</div>
          <div className="w-full">{children}</div>
        </div>
      </label>
    </div>
  );
};

interface RadioGroupProps {
  children: React.ReactNode;
  state: any;
  setState: React.Dispatch<any>;
}
const RadioGroup = ({ children, state, setState }: RadioGroupProps) => {
  const [isWindow, setIsWindow] = useState(false);
  let name = Math.random().toString(36).substring(2, 12);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio: ", e.currentTarget.value);
    setState(e.currentTarget.value);
  };
  useEffect(() => {
    setIsWindow(true);
  }, []);
  if (!isWindow) return null;
  return (
    <div className="radio-group">
      {React.Children.map(children, (child) => {
        const id = Math.random().toString(36).substring(2, 12);
        return React.cloneElement(child as React.JSX.Element, {
          name: name,
          id: id,
          setState: setState,
          state: state,
        });
      })}
    </div>
  );
};

export const Radio = { Button: RadioButton, Group: RadioGroup };
