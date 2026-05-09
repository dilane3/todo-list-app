import { Button } from "@/components/common/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog"
import { Field, FieldGroup } from "@/components/common/ui/field"
import { Input } from "@/components/common/ui/input"
import { Label } from "@/components/common/ui/label"
import { useTodoStore } from "@/store/todos"
import { ReactNode, useState } from "react"

type Props = {
  children: ReactNode;
}

export function CreateTodoModal({ children }: Props) {
  const { add: addTodo } = useTodoStore();

  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title === "") return;

    addTodo(title);
    setTitle("");
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogDescription>
              Add new tasks
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} id="title" name="title" placeholder="Name your task" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild disabled={title === ""}>
              <Button type="submit" onClick={handleAddTodo} disabled={title === ""}>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
