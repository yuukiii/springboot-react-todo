package co.devskills.springbootboilerplate.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private String email;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private Set<Todo> todoItems;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Todo> getTodoItems() {
        return todoItems;
    }

    public void setTodoItems(Set<Todo> todoItems) {
        this.todoItems = todoItems;
    }
}
