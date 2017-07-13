'use strict';
var item = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005',
    'ITEM000005-2',
];
function countItems(item){
  var goods = new Array();
  for(var i in item){
    for(var j in item){
      if(item[i]=item[j]){
        goods[i] = new Object();
        goods[i].count=0;
        goods[i].count++;
        item.slice(i-1,1);
      }else{
          goods[i].barcode =item[i];
      }
    }
  }
  return goods;
}
countItems(item);//计算商品数量
function addItems(goods,goods_info){
  for(i in goods){
    for(j in goods_info){
      if(goods[i].barcode == goods_info[j].barcode){
          goods[i].name = goods_info[j].name;
          goods[i].unit = goods_info[j].unit;
          goods[i].price = goods_info[j].price;
      }
    }
  }
  return goods;
}//补全商品信息
function count(goods){
  for(i in goods){
    var num = goods[i].barcode.include('-');
    if(num){
      goods[i].count= parseFloat(goods[i].barcode.slice(10,goods[i].barcode.length));
      goods[i].toFixed(2);
    }
  }
  return goods;
}
var buy = loadPromotions();
function promotions(buy,goods){
    for(i in goods){
        goods[i].bargin = 0;
        for(j in buy){
            if (goods[i].barcode == buy.barcode[j] && goods[i].count>2) {
                goods[i].count--;
                goods[i].bargin=1;
            }
        }
    }
    for(i in goods){
        goods[i].cost = goods[i].price*goods[i].count;
    }
    return goods

}//计算小计
function countSave(){
    var save = 0;
    for(i in goods){
        if(good[i].bargin=1){
            save += goods[i].price;
        }
    }
    return save;
}//计算节省金额
function countTotalCost(goods){
    var totalCost = 0;
    for(i in goods){
        totalCost += goods[i].cost;
    }
    return totalCost;
}//计算总计
console.log("***<没钱赚商店>收据***");
for(i in goods) {
    console.log("名称 " + goods[i].name + "， 数量 " + goods[i].count + "， 单价 " +goods[i].price + "， 小计 " + goods[i].cost;
}
console.log("--------------------------------");
console.log("总计 "+totalCost);
console.log("节省 "+save);
console.log("********************************");
