import Head from "next/head";
import React from "react";
import { PropsLayout } from "./types";
import { Link } from "@chakra-ui/react";
import SideBar from "@components/Sidebar";
import Navbar from "@/components/Navbar";

const Layout = ({
  children,
  title = "Swyfe App",
  description = "Uma aplicação para gerenciamento de senhas",
  className = "app-screen",
}: PropsLayout) => { 
  return (
    <div className={(className.includes("app-screen")) ? className : "app-screen " + className }>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <SideBar/>
      <header className="app-header">
        <Navbar Logo={"Swyfe App"} />
        <div className="app-main-content">
          {children}
        </div>
      </header>
    </div>
  );
  }

export default Layout;
