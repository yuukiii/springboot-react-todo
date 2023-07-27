package co.devskills.springbootboilerplate.repository;

import co.devskills.springbootboilerplate.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Set;


@Repository
@Component
public interface UserRepository extends CrudRepository<User, Long> {
    Set<User> findByTodoItems_DescriptionContaining(String description);
    Set<User> findByTodoItems_PriorityContaining(String priority);
}
