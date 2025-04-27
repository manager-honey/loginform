"use client";
import Link from "next/link";
//Local imports:
import { InputField } from "../components/InputField";
import { SocialBtn } from "../components/SocialBtn";

export default function Login() {
  const platforms = [
    "google",
    "microsoft",
    "facebook",
    "linkedin",
    "twitter",
    "github",
  ];
  return (
    <main className="grid place-content-center min-h-screen">
      <form className="bg-white w-fit flex flex-col gap-5 rounded-xl shadow-lg px-15 py-5">
        <legend className="text-center font-extrabold text-2xl">Login</legend>
        <InputField
          color="black"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type={"email"}
          id={"email"}
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
          id={"password"}
          name={"password"}
          label={"Password"}
          placeholder={"Type your password"}
        />
        <Link
          className="text-sm font-semibold  w-fit self-end hover:text-gray-500 hover:underline"
          href={""}
        >
          Forgot password?
        </Link>
        <button className="bg-linear-to-r from-cyan-400 to-fuchsia-400 px-20 text-white font-bold p-1 rounded-full cursor-pointer shadow-sm hover:from-cyan-500 hover:to-fuchsia-500">
          LOGIN
        </button>
        <div>
          <small className="text-center block">Follow us on:</small>
          <SocialBtn platforms={platforms} />
        </div>
        <Link
          className=" font-bold self-center hover:text-gray-500 hover:underline"
          href={""}
        >
          SIGN UP
        </Link>
      </form>
    </main>
  );
}
