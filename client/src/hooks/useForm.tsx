import React, { ChangeEvent, FormEvent, useState } from "react";

interface IState {
  [key: string]: any;
}

const useForm = (initialState: IState, callback: () => void) => {
  const [values, setValues] = useState<IState>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};

export default useForm;
