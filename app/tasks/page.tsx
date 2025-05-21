import prisma from "@/lib/prisma";
import Form from "./_components/form";
import DeleteBtn from "./_components/delete-btn";

export default async function TasksPage() {
  const tasks = await prisma.task.findMany();

  return (
    <main className="max-w-md mx-auto px-8 py-16">
      <h1 className="text-xl font-bold mb-4">My Tasks</h1>
      <ul className="mb-8 list-disc list-inside space-y-1">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border-b flex justify-between items-center py-1"
          >
            {task.content} <DeleteBtn id={task.id} />
          </li>
        ))}
      </ul>
      <Form />
    </main>
  );
}
