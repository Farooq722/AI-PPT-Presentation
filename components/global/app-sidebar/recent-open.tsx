import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Project } from "@prisma/client";
import React from "react";

type Props = {
  recentProjects: Project[];
};

const RecentOpened = ({ recentProjects }: Props) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recent Opened</SidebarGroupLabel>
      {recentProjects.length > 0 && (
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={"testing"}
              // className={`hover:bg-primary-100`}
            >
              <Button
                variant={"link"}
                className={`text-xs items-center justify-start cursor-pointer`}
              >
                <span>Click</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      )}
    </SidebarGroup>
  );
};

export default RecentOpened;
