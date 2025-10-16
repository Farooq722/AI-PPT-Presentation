import { onAuthenticateUser } from "@/actions/user";
import AppSideBar from "@/components/global/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("/sign-in");
  }
  return <SidebarProvider>
    <AppSideBar></AppSideBar>
  </SidebarProvider>
};

export default layout;
