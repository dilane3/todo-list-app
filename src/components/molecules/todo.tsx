import { Check, Trash } from "lucide-react";
import { Button } from "../common/ui/button";
import { Card, CardContent } from "../common/ui/card";
import { Todo, useTodoStore } from "@/store/todos";
import { cn } from "@/lib/utils";

type Props = {
    todo: Todo
}

export function TodoItem({ todo }: Props) {
    const { remove: removeTodo, updateStatus } = useTodoStore();

    return (
        <Card>
            <CardContent>
                <div className="flex justify-between items-center border-b border-border pb-2">
                    <h2 className={cn("text-xl font-bold", todo.status === "done" && "line-through")}>{todo.title}</h2>

                    {
                        todo.status === "todo" ? (
                            <Button 
                                size="icon" 
                                className="rounded-full bg-transparent hover:bg-[#f5f5f5] border-[2px] border-foreground/30 cursor-pointer"
                                onClick={() => updateStatus(todo.id, "done")}
                            ></Button>
                        ) : (
                            <Button 
                                size="icon" 
                                className="rounded-full bg-green-600 hover:bg-gree-600/70"
                                onClick={() => updateStatus(todo.id, "todo")}
                            >
                                <Check />
                            </Button>
                        )
                    }
                </div>
                <div className="flex justify-between items-center pt-2">
                    <p className="text-foreground/60 font-thin">{todo.createdAt.toLocaleString()}</p>

                    <Button className="bg-red-500 hover:bg-red-500/70" onClick={() => removeTodo(todo.id)}>
                        <Trash />
                        <span>Delete</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}