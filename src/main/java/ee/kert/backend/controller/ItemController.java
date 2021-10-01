package ee.kert.backend.controller;

import ee.kert.backend.model.Item;
import ee.kert.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//muudatus
@RestController
@CrossOrigin (origins = "http://localhost:3000")

    public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    };

    @PostMapping("items")
    public String postItem(@RequestBody Item item){
        itemService.saveItem(item);
        return "returnib " + item.getName();
    }
}
