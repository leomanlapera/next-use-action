"use client";

import { createTask } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

export default function Form() {
  const [error, action, isPending] = useActionState(createTask, null);

  return (
    <form action={action} className="space-y-2">
      <div className="flex gap-2">
        <Input placeholder="New task" name="content" required />
        <Button disabled={isPending} type="submit">
          Submit
        </Button>
      </div>

      {isPending && <p className="text-sm">Loading...</p>}
      {error && <p className="text-destructive text-sm">{error}</p>}
    </form>
  );
}
