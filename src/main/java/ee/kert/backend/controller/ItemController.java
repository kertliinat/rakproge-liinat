package ee.kert.backend.controller;

import ee.kert.backend.model.Item;
import ee.kert.backend.service.ItemService;
import io.swagger.annotations.ApiOperation;
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
    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @ApiOperation("API otspunt eseme muutmiseks, alati saata kaasa ID")
    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }
}
