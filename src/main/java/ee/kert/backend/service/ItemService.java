package ee.kert.backend.service;

import ee.kert.backend.model.Item;
import ee.kert.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    public List<Item> getItems(){
        return itemRepository.findAll();
    };
    @Autowired
    ItemRepository itemRepository;

    public void saveItem(Item item) {
        itemRepository.save(item);
    }
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public void editItem(Item item){
        itemRepository.save(item);
    }
    public Item getOneItem(Long id) throws Exception{
        if(itemRepository.findById(id).isPresent()){
            return itemRepository.findById(id).get();
        }
        throw new Exception();
    }
}
