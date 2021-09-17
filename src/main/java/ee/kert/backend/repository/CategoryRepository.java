package ee.kert.backend.repository;

import ee.kert.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//muudatus
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
