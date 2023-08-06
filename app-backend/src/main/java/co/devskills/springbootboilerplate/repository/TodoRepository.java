package co.devskills.springbootboilerplate.repository;

import co.devskills.springbootboilerplate.model.Todo;
import co.devskills.springbootboilerplate.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Set;


@Repository
@Component
public interface TodoRepository extends CrudRepository<Todo, Long> {
    Set<Todo> findByDescriptionContaining(String description);
}
