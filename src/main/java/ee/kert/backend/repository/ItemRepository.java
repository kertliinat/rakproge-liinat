package ee.kert.backend.repository;

import ee.kert.backend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//muudatus
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
