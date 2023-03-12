import React, { useState } from "react";
import {useForm} from "react-hook-form"
import { useForm as useFormSpree } from "@formspree/react";

function MembershipForm() {
  const [formSpreeState, sendToFormSpree] = useFormSpree("useFormSpree");
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
  name: "",
  breed: "",
  age: null,
  },
});
const onSubmit = (data) => {
   sendToFormSpree(data);
   formSpreeState.succeeded;
   
   setTimeout(() => {
     formSpreeState.succeeded;
   }, 2000);
 };
const handleClick = () => reset();
}

const { name } = register('name'); 
        

