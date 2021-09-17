package ee.kert.backend.service;

import ee.kert.backend.model.Category;
import ee.kert.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
//muudatus
@Service
public class CategoryService {

    public List<Category> getCategories(){
        return categoryRepository.findAll();
    };
    @Autowired
    CategoryRepository categoryRepository;

    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }
}
