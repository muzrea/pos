/**
 * Created by muzrea on 17-7-12.
 */
var barcodeArr = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
]
    var item = [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
var uniquebarcode = new Array();
function unique(barcodeArr){
    for(var i = 0; i < barcodeArr.length; i++){
        if (uniquebarcode.indexOf(barcodeArr[i]) == -1)
            uniquebarcode.push(barcodeArr[i]);
    }
    return uniquebarcode;
}
var requiredItem = new Array();
function findItem(uniquebarcode,item){
    for(var i=0;i<uniquebarcode.length;i++){
        requiredItem[i] = new Array();
        if(uniquebarcode[i] == item[i].barcode){
            requiredItem[i].push(item[i].barcode);
            requiredItem[i][1] = item[i].name;
            requiredItem[i][2] = item[i].unit;
            requiredItem[i][3] = item[i].price;
        }
    }
    return requiredItem;
}
var count = [0];
function countItems(barcodeArr){
    var j = 0;
    var ba = barcodeArr.toString();
    for(var i = 0; i < barcodeArr.length; i++){
        if(barcodeArr[i] != barcodeArr[i+1]){
            count[j] = ba.indexOf(barcodeArr[i]);
            j++;
        }
    }
    return count;
}
console.log(count[1]);
var countItem = new Array();
function addCountItem(count){

    var j = 0;
    for(var i = 0; i < count.length; i++){
        countItem[i] = new Array();
        countItem[i][0] = count[j];
    }
    return countItem;
}
function countCost(countItem,item){
    for(var i = 0; i < countItem.length; i++){
        countItem[i] = new Array();
        countItem[i][2] = countItem[i][1]*item[i].price;
    }
    return countItem;
}
var totalCost = 0;
function countTotalCost(countItem){

    for(var i = 0; i < countItem.length; i++){
        totalCost += countItem[i][2];
    }
    return totalCost;
}
unique(barcodeArr);
findItem(uniquebarcode,item);
countItems(barcodeArr);
addCountItem(count);
countCost(countItem,item);
countTotalCost(countItem);


console.log("***"+"没钱赚商店"+"***");
for(var m=0;m<requiredItem.length;m++) {
    console.log("名称 " + requiredItem[m][1] + "， 数量 " + countItem[m][1] + requiredItem[m][2] + "， 单价 " + requiredItem[m][3] + "， 小计 " + countItem[m][2]);
}
console.log("--------------------------------");
console.log("总计 "+totalCost);
console.log("********************************");