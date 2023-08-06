package co.devskills.springbootboilerplate.service;


import co.devskills.springbootboilerplate.model.Todo;
import co.devskills.springbootboilerplate.model.User;
import co.devskills.springbootboilerplate.repository.TodoRepository;
import co.devskills.springbootboilerplate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TodoRepository todoRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, User newUser) {
        return userRepository.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseGet(() -> {
            newUser.setId(id);
            return userRepository.save(newUser);
        });
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Set<User> findUsersByTodoDescription(String description) {
        Set<Todo> setOfTodos = todoRepository.findByDescriptionContaining(description);
        Set<User> userSet = new HashSet<>();
        for( Todo todo : setOfTodos){
            userSet.add( todo.getUser()) ;
        }
        return userSet;
    }

    public Set<User> findUsersByTodoPriority(String priority) {
        return userRepository.findByTodoItems_PriorityContaining(priority);
    }
}
