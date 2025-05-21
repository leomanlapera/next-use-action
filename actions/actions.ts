"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTask(_prevState: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const content = formData.get("content") as string;
    await prisma.task.create({ data: { content } });
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }

  revalidatePath("/tasks");
}

export async function deleteTask(_prevState: unknown, id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    await prisma.task.delete({ where: { id } });
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }

  revalidatePath("/tasks");
}
