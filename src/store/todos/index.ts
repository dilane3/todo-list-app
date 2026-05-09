import { createStore as create, middleware } from '@rasenganjs/kurama';

export interface Todo {
	id: number;
	title: string;
	status: "todo" | "done";
	createdAt: Date;
}
 
type State = {
	// state
  todos: Todo[],

	// actions
	add: (title: string) => void;
	remove: (id: number) => void;
	updateStatus: (id: number, status: "todo" | "done") => void
};
 
export const useTodoStore = create<State>(
	middleware.persist({
		name: "todos",
		storage: "local"
	})((set, get) => ({
  todos: [],

	// actions
	add(title) {
		const state = get();

		// Create task
		const todo = {
			id: Date.now(),
			title,
			status: "todo",
			createdAt: new Date()
		} satisfies Todo;

		set({ todos: [...state.todos, todo] });
	},

	remove(id) {
		const state = get();

		// Delete task
		const updated = [...state.todos].filter((todo) => todo.id !== id);

		set({ todos: updated });
	},

	updateStatus(id, status) {
		const state = get();
		const todos = [...state.todos];

		const index = todos.findIndex((todo) => todo.id === id);

		// Update status
		if (index !== -1) {
			todos[index].status = status;

			set({ todos });
		}
	},
})));