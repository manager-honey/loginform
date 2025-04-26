"use client";
//Local imports:
import { InputField } from "../components/InputField";

export default function Login() {
  return (
    <form>
      <InputField
        color="blue"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type={"email"}
        id={"1"}
        name={"email"}
        label={"Username"}
        placeholder={"Type your username"}
      />
      <InputField
        color="blue"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type={"password"}
        id={"2"}
        name={"password"}
        label={"Password"}
        placeholder={"Type your password"}
      />
    </form>
  );
}
