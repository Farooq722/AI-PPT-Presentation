"use server";

import { client } from "@/lib/prisma";
import { onAuthenticateUser } from "./user";

const getAllProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }
    const allProjects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (allProjects.length === 0) {
      return { status: 404, msg: "No Project Found" };
    }

    return { status: 200, data: allProjects };
  } catch (error) {
    console.log("🔴 ERROR: ", error);
    return { status: 500 };
  }
};

export default getAllProjects;
