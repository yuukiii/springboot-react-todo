export interface Todo {
    id: number;
    description: string;
    status: string;
    dueDate: string;
    priority: string;
    user: User;
}

export interface User {
    id: number;
    name: string;
    email: string;
    todos: Todo[];
}
