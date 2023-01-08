import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token") as string);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Home Page</h1>
      <h1 className="text-center text-blue-900 text-3xl">This is Token</h1>
      <h1 className="text-center">{token}</h1>
    </>
  );
}
