package co.devskills.springbootboilerplate.service;

import co.devskills.springbootboilerplate.model.Todo;
import co.devskills.springbootboilerplate.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;


    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Iterable<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo getTodo(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    public Todo updateTodo(Long id, Todo newTodo) {
        return todoRepository.findById(id).map(todo -> {
            todo.setDescription(newTodo.getDescription());
            todo.setDueDate(newTodo.getDueDate());
            todo.setPriority(newTodo.getPriority());
            return todoRepository.save(todo);
        }).orElseGet(() -> {
            newTodo.setId(id);
            return todoRepository.save(newTodo);
        });
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}

