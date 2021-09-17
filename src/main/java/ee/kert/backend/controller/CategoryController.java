package ee.kert.backend.controller;

import ee.kert.backend.model.Category;
import ee.kert.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
//muudatus

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getItems(){
        return categoryService.getCategories();
    };

    @PostMapping("categories")
    public String postItem(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "returnib " + category.getName();
    }
}
