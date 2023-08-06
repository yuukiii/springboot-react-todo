package co.devskills.springbootboilerplate.controller;

import co.devskills.springbootboilerplate.model.User;
import co.devskills.springbootboilerplate.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);


    @Autowired
    UserService userService;



    @PostMapping("/")
    public User createUser(@RequestBody User user) {
        log.info("user id: " + user.getId() + " user name: " + user.getName());
        return userService.createUser(user);
    }

    @GetMapping("/")
    public Iterable<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User newUser) {
        return userService.updateUser(id, newUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/search")
    public Set<User> findUsersByTodoDescription(@RequestParam String description) {

        return userService.findUsersByTodoDescription(description);
    }
}
