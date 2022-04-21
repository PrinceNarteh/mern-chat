import React, { ChangeEvent, FormEvent, useState } from "react";

interface IState {
  [key: string]: any;
}

const useForm = (initialState: IState, callback: () => void) => {
  const [values, setValues] = useState<IState>(initialState);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    onChangeHandler,
    onSubmitHandler,
  };
};

export default useForm;
