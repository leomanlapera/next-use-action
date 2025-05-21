"use client";

import { deleteTask } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Ellipsis, Trash } from "lucide-react";
import { startTransition, useActionState } from "react";

export default function DeleteBtn({ id }: { id: number }) {
  const [error, action, isPending] = useActionState(deleteTask, null);

  return (
    <div className="flex items-center gap-1">
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button
        size="icon"
        variant="ghost"
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            action(id);
          });
        }}
      >
        {isPending ? <Ellipsis /> : <Trash />}
      </Button>
    </div>
  );
}
