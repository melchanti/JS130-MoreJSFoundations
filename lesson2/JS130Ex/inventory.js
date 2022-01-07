let item = {
  init(itemName, category, quantity) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.skuCode = (this.itemName.slice(0,3) + this.category.slice(0,2)).toUpperCase();

    return this;
  },
};

let ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    if (this.validateItem(itemName, category, quantity)) {
      let newObj = Object.create(item).init(itemName, category, quantity);
      this.items.push(newObj);
      return newObj;
    } else {
      return {notValid: true};
    }
  },

  update(sku, obj) {
    this.items.forEach(item => {
      if (item.skuCode === sku) {
        Object.keys(obj).forEach(property => {
          item[property] = obj[property];
        });
      }
    });
  },

  delete(sku) {
    let length = this.items.length;
    for (let index = 0; index < length; index += 1) {
      if (!this.items[index]) break;

      if (this.items[index].skuCode === sku) {
        this.items.splice(index,1);
      }
    }
  },

  inStock() {
    return this.items.filter(item => {
      return item.quantity > 0;
    });
  },

  itemsInCategory(category) {
    return this.items.filter(item => {
      return item.category === category;
    })
  },

  validateMinimum5Char(name) {
    if (name) {
      return name.match(/[^ ]/g).length >= 5;
    } else {
      return false;
    }
  },

  validateOneWord(name) {
    return name.match(/ ./g) === null;
  },

  validateName(name) {
    return this.validateMinimum5Char(name);
  },

  validateCategory(name) {
    return this.validateMinimum5Char(name) && this.validateOneWord(name);
  },

  validateItem(itemName, category, quantity) {
    if (this.validateName(itemName) && this.validateCategory(category) &&
      quantity !== undefined) {
      return true;
    } else {
      return false;
    }
  }
};

let ReportManager = {
  init(obj) {
    this.items = obj.items;
    return this;
  },

  createReporter(sku) {
    let items = this.items;
    return {
      itemInfo: function() {
        items.forEach(item => {
          if (item.skuCode === sku) {
            Object.keys(item).forEach(key => {
              console.log(`${key}: ${item[key]}`);
            });
          }
        });
      },
    };
  },

  reportInStock: function() {
    let itemsInStock = this.items.filter(item => item.quantity > 0);
    let itemNames = itemsInStock.map (item => item.itemName);

    console.log (itemNames.join(', '));
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
//console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
