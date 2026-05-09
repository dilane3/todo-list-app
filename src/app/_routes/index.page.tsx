import { Button } from '@/components/common/ui/button';
import { CreateTodoModal } from '@/components/molecules/create-todo-modal';
import { TodoItem } from '@/components/molecules/todo';
import { useTodoStore } from '@/store/todos';
import { Plus } from 'lucide-react';
import { PageComponent } from 'rasengan';

const Page: PageComponent = () => {
  const { todos } = useTodoStore();

  return (
    <section className="w-full h-full bg-white flex flex-col items-center py-8 px-5 md:px-12 xl:px-48 mx-auto font-urbanist relative">
      <div className='w-full max-w-xl border border-border h-[80%] min-h-[600px] rounded-lg p-4'>
        <div className='w-full flex items-center justify-between border-b-[2px] border-border py-2'>
          <div className=''>
            <h1 className='font-black text-3xl'>Today's Tasks</h1>
            <span className='space-y-2 text-foreground/70'>Samedi, 09 Mai 2026</span>
          </div>

          <div>
            <CreateTodoModal>
              <Button>
                <Plus />
                <span>New Task</span>
              </Button>
            </CreateTodoModal>
          </div>
        </div>


        <div className='flex flex-col gap-4 mt-4'>
          {
            todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

Page.metadata = {
  title: 'Home Page',
  description: 'Home page'
};

export default Page;
