"use client";
//Local imports:
import { InputField } from "../components/InputField";
import { SocialBtn } from "../components/SocialBtn";

export default function Login() {
  return (
    <form>
      <InputField
        color="black"
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
        color="black"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type={"password"}
        id={"2"}
        name={"password"}
        label={"Password"}
        placeholder={"Type your password"}
      />

      <button className="bg-linear-to-r from-cyan-400 to-fuchsia-400 px-20 text-white font-bold p-1 rounded-full cursor-pointer shadow-sm hover:from-cyan-500 hover:to-fuchsia-500">
        LOGIN
      </button>
      <SocialBtn platforms={['google', 'microsoft', 'facebook', 'linkedin', 'twitter', 'github',]}/>
    </form>
  );
}
