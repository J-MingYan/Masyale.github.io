// 菜單選項效果
let box2 = document.querySelectorAll('.btn-text-custom-b0d6f0');
box2.forEach(element => {
  element.addEventListener('click',function(e){
    e.preventDefault();
    box2.forEach(act=>act.classList.remove('active'));

    this.classList.add('active');
  });
});

// 使用建構韓式調用bs方法
let offcanvasExample = document.getElementById('offcanvasExample');
let bsoffcanvasExample = new bootstrap.Offcanvas(offcanvasExample ,{
  toggle:false      
})
let offcanvasRightLabel = document.getElementById('offcanvasRightLabel');
offcanvasRightLabel.addEventListener('click', function(e){
  e.preventDefault();
  bsoffcanvasExample.toggle();
})

// 購物車加入按鈕效果
const btnOutlineInfo = document.querySelectorAll('.btn-text-outline-info');
for(let i = 0; i < btnOutlineInfo.length; i++){
  btnOutlineInfo[i].addEventListener('click', function(e){
    e.preventDefault();
    btnOutlineInfo[i].classList.add('active');
    setTimeout(() =>{
      btnOutlineInfo[i].classList.remove('active');
    }, 2500);
  })
}

// 菜單選項 切換 效果
const all = document.getElementById('all');

const saLad = document.getElementById('saLad');
const saLad_switch = document.querySelectorAll('.saLad_switch');

const appeTlzer = document.getElementById('appeTlzer');
const appeTlzer_switch = document.querySelectorAll('.appeTlzer_switch');

const soUp = document.getElementById('soUp');
const soUp_switch = document.querySelectorAll('.soUp_switch');


const malnCourse = document.getElementById('malnCourse');
const malnCourse_switch = document.querySelectorAll('.malnCourse_switch');


const dessErt = document.getElementById('dessErt');
const dessErt_switch = document.querySelectorAll('.dessErt_switch');


const beveRage = document.getElementById('beveRage');
const beveRage_switch = document.querySelectorAll('.beveRage_switch');

all.addEventListener('click', function(e){
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.target.classList);
  // console.log(e.target.classList.contains('btn'));
  // console.log(e.target.closest( "a" ).id);
  saLad_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});

saLad.addEventListener('click', function(e){
  e.preventDefault();
  saLad_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});

appeTlzer.addEventListener('click', function(e){
  e.preventDefault();
  saLad_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});

soUp.addEventListener('click', function(e){
  e.preventDefault();
  saLad_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});

malnCourse.addEventListener('click', function(e){
  e.preventDefault();
  saLad_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});

dessErt.addEventListener('click', function(e){
  e.preventDefault();
  saLad_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});

beveRage.addEventListener('click', function(e){
  e.preventDefault();
  saLad_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  appeTlzer_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  soUp_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  malnCourse_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  dessErt_switch.forEach(function(item,index){
    item.classList.remove('d-block');
    item.classList.add('d-none');
  });
  beveRage_switch.forEach(function(item,index){
    item.classList.add('d-block');
    item.classList.remove('d-none');
  });
  //回到頂部
  window.scrollTo({top: 450, behavior: 'smooth'});
});


// 新增購物車所需資訊
const data = [
  {
    img: './images/img-menu/CaesarSalad.jpg', Meals: '凱薩沙拉', money: 320, id: 0,
    type: '沙拉', quantity: 1,
    text: '這道沙拉主要材料是羅蔓生菜，醬汁則是以蛋、帕馬起司、橄欖油、醋、大蒜、鯷魚和英國醬油醋（Worcestershire Sauce）等調製。 爽脆多汁的生菜淋上此醬汁讓消費者大為驚豔，從此以此主廚命名的凱薩沙拉成為不朽經典，也凸顯醬汁之於沙拉的關鍵影響力。',
  },
  {
    img: './images/img-menu/YogurtSalad.jpg', Meals: '綜合季節鮮果優格沙拉', money: 200, id: 1,
    type: '沙拉', quantity: 1,
    text: '一道充滿季節風味的沙拉，結合當季最新鮮的水果，搭配酥脆的馬鈴薯、紅蘿蔔，再加上原味椰果、玉米的多重口感，淋上原味優格，醇厚滿足。 每一口都是時令的饗宴，輕盈不油膩，帶您享受季節的味覺盛宴。',
  },
  {
    img: './images/img-menu/fries.jpg', Meals: '酥炸薯條佐松露醬', money: 180, id: 2,
    type: '開胃菜', quantity: 1,
    text: '馬鈴薯製作，先在醋和香檳中浸泡，再用純鵝油炸過兩次，讓薯條外酥內軟，以松露鹽及松露油調味，放上切成細片的松露之後，可佐以拌有松露的乳酪白醬品嚐。',
  },
  {
    img: './images/img-menu/ShrimpCakes.jpg', Meals: '酥炸鮮蝦魚餅', money: 280, id: 3,
    type: '開胃菜', quantity: 1,
    text: '鮮蝦魚漿炸得酥脆爽口，搭配酸甜塔塔醬，是最合拍的開胃菜。',
  },
  {
    img: './images/img-menu/Stir-friedWild mushroomsAnd shrimpPlate.jpg', Meals: '蒜香辣炒野菇鮮蝦盤', money: 260, id: 4,
    type: '開胃菜', quantity: 1,
    text: '蝦含豐富的蛋白質、透抽含豐富的礦物質、菇類含有高蛋白，與香味濃香的蒜油結合在料理中，將原有海鮮腥味去除，並將甘甜鮮味的肉質釋放出來，是料理上更不可或缺的蒜油。',
  },
  {
    img: './images/img-menu/tomato puree.jpg', Meals: '蕃茄濃湯', money: 120, id: 5,
    type: '湯品', quantity: 1,
    text: '皆因蕃茄健康價值高，除了可抗氧化外，還能抗癌，而且也非常百搭。其中一以蕃茄濃湯最受大眾歡迎，因其易整又好味，沒有添加茄膏，而且天然健康又好味。',
  },
  {
    img: './images/img-menu/corn soup.jpg', Meals: '玉米濃湯', money: 120, id: 6,
    type: '湯品', quantity: 1,
    text: '綿密、濃醇又散發奶香的玉米濃湯料理，可是大人小孩都愛的經典美味  ，不僅能帶給你滿滿的飽足感，還能與各式餐點完美搭配，可說是百搭又能吃出幸福滋味的湯品。',
  },
  {
    img: './images/img-menu/Chargrilled Ribeye Steak.jpg', Meals: '炭烤美國肋眼牛排', money: 980, id: 7,
    type: '主菜', quantity: 1,
    text: '肋眼(RibEye)： 肋眼心+肋眼上蓋、老饕牛肉的雙重口感部位，沿著脊骨兩側所附著的肉塊便是肋眼，這部位運動量較小，肉質嫩、脂肪多且夾帶著少量筋，嚼勁佳，容易呈現霜降狀態。',
  },
  {
    img: './images/img-menu/Grilled Prime Tender Shoulder Steak.jpg', Meals: '煎烤美國頂級嫩肩牛排', money: 880, id: 8,
    type: '主菜', quantity: 1,
    text: '美國頂級嫩肩沙朗牛排取自牛肩胛部位，橫切面切開的牛排猶如雪花般的油花分佈是最明顯的特徵。',
  },
  {
    img: './images/img-menu/Grilled Chicken Steak.jpg', Meals: '風香料 烤雞', money: 680, id: 9,
    type: '主菜', quantity: 1,
    text: '通常的配菜有肉汁馬鈴薯泥，番薯，蔓越莓果醬，甜玉米以及各種蔬菜。由於火雞在台灣的取得相對較難，為了讓大家能輕鬆、簡單的享受感恩節的氣氛，我們選擇以取得容易的全雞取代火雞。至於雞裡面的stuffing與配菜，除了我們所介紹的之外，也可以自由選擇替換，無需拘泥。重點是，以雞本身最天然的油脂與調味料融合，來烹煮蔬菜，創造出最天然的美味！',
  },
  {
    img: './images/img-menu/Pan-fried salmon fillet with creamy white sauce.jpg', Meals: '奶香白醬香煎鮭魚排', money: 680, id: 10,
    type: '主菜', quantity: 1,
    text: '奶香白醬香煎鮭魚排，肥美厚實的鮭魚，綿密細緻且富含脂肪，煎烤過後仍保有其豐沛的肉汁，佐以酸豆鯷魚白醬，鹹、酸、甜、奶香，彼此交疊出豐沛的味覺層次，濃郁而溫順的口感在舌尖綻放，搭配四季豆、小番茄、馬鈴薯等蔬菜，健康又美味。',
  },
  {
    img: './images/img-menu/Grilled Pork Ribs with Japanese Style BBQ Sauce.jpg', Meals: '和風BBQ醬烤豬肋排', money: 320, id: 11,
    type: '主菜', quantity: 1,
    text: '多種中藥材滷製及照燒醬汁調理，經過繁複工法製成的炭烤豬肋排，肉質多汁軟嫩，在燒烤肉品過程中，甜香入味的正統烤豬肋排；精選肋排部位並以獨家醬汁醃製，誘人的色澤，甜鹹交錯的精華肉汁，讓人允指回味。',
  },
  {
    img: './images/img-menu/Apple Tart.jpg', Meals: '香草慕斯蘋果派', money: 160, id: 12,
    type: '甜點', quantity: 1,
    text: '塔皮遵循傳統法式派皮的作法，一口咬下，酥脆美味，內餡祕訣是利用糖水煮成焦糖牛奶，再倒入大量新鮮蘋果熬製，最後與肉桂、檸檬、香草，調和出一個完美的比例，再搭配上新鮮蘋果，反覆烘烤，才能呈現的一道經典美味之作!',
  },
  {
    img: './images/img-menu/cheesecake.jpg', Meals: '乳酪蛋糕', money: 160, id: 13,
    type: '甜點', quantity: 1,
    text: '乳酪蛋糕又稱為起司蛋糕（Cheese Cake），乳酪起司蛋糕的種類非常多，一般來說可分為輕乳酪與重乳酪，顧名思義，乳酪起司差別比較中，兩者最大的差別在於其乳酪的含量，重乳酪起司蛋糕的乳酪含量較多，因此風味多半較輕乳酪來得更加濃郁；在口感上，有別於輕乳酪蛋糕的蓬鬆、軟嫩，重乳酪蛋糕較為綿密、紮實。',
  },
  {
    img: './images/img-menu/chocolate cake.jpg', Meals: '香濃巧克力蛋糕', money: 160, id: 14,
    type: '甜點', quantity: 1,
    text: '入口即化的膏狀口感，蛋白霜製成的蛋糕體讓它吃來較鬆，但又有奶油與巧克力的濃郁加入，口感上不厚重但味道濃郁。巧克力材料佔一半以上，所以口感完全取決於巧克力的品質。',
  },
  {
    img: './images/img-menu/Grilled Crispy Caramel Pudding.jpg', Meals: '香烤脆皮焦糖布丁', money: 160, id: 15,
    type: '甜點', quantity: 1,
    text: '細細琢磨過的特色風味！如果你對布丁的印象還停留在小時候記憶中的統一雞蛋布丁，那你更應該品嘗看看手作布丁多層次的迷人香氣，從綿密的布丁到細細熬煮的焦糖，都是讓人打從心底療癒心情的甜點！',
  },
  {
    img: './images/img-menu/Americano.jpg', Meals: '美式咖啡(冰/熱)', money: 80, id: 16,
    type: '飲品', quantity: 1,
    text: '美式咖啡則是一種將濃縮咖啡與熱水混合的飲品。 這種咖啡的製作方法比較簡單，通常是由咖啡機在製作濃縮咖啡時，自動加入熱水以稀釋濃縮咖啡而成。 這樣做的目的是為了降低咖啡的濃度，使其更接近於普通的咖啡飲品，同時保留一定的咖啡豆風味，但相對於黑咖啡而言，美式咖啡的口感會更加淡雅和清爽。',
  },
  {
    img: './images/img-menu/latte.jpg', Meals: '拿鐵咖啡(冰/熱)', money: 100, id: 17,
    type: '飲品', quantity: 1,
    text: '沖泡時使用濃縮咖啡與發泡牛奶（以下統稱「奶泡」），薄薄一層奶泡厚度約為2mm 左右即可。 用咖啡機沖煮出30c.c.的濃縮咖啡後，把牛奶裝入鋼杯裡並使用咖啡機上的牛奶發泡器打發，記得要把奶泡打得均勻細緻，牛奶的溫度可以依照個人喜好調整。',
  },
  {
    img: './images/img-menu/green tea.jpg', Meals: '綠茶(冰/熱)', money: 60, id: 18,
    type: '飲品', quantity: 1,
    text: '綠茶是茶葉一種，為不發酵茶，是世界上產量最多、最受歡迎的茶類。其製作過程分為採摘、殺青、揉捻、乾燥，製成的茶葉相較其它茶品較為翠綠，也保有茶葉原始的成份及味道。綠茶滋味鮮爽，不僅好喝，也被視為對身體有益的飲品。',
  },
  {
    img: './images/img-menu/black tea.jpg', Meals: '紅茶(冰/熱)', money: 60, id: 19,
    type: '飲品', quantity: 1,
    text: '紅茶中的多酚類化合物可以幫助降低血液中的壞膽固醇（LDL），改善血管功能，降低高血壓的風險。 促進消化：紅茶含有一些天然的物質，如單寧酸，可以促進消化系統的正常運作，減輕消化不良和腸道問題。 提神醒腦：紅茶中的咖啡因能夠提神醒腦，增加警覺性和注意力。',
  },
];

// 跑馬燈跳轉用資料
const Marquee_contentMenu = [
  {
    img: './images/img-menu/YogurtSalad.jpg', Meals: '綜合季節鮮果優格沙拉', money: 200, id: 1,
    type: '沙拉', quantity: 1,
    text: '一道充滿季節風味的沙拉，結合當季最新鮮的水果，搭配酥脆的馬鈴薯、紅蘿蔔，再加上原味椰果、玉米的多重口感，淋上原味優格，醇厚滿足。 每一口都是時令的饗宴，輕盈不油膩，帶您享受季節的味覺盛宴。',
  },
  {
    img: './images/img-menu/Stir-friedWild mushroomsAnd shrimpPlate.jpg', Meals: '蒜香辣炒野菇鮮蝦盤', money: 260, id: 4,
    type: '開胃菜', quantity: 1,
    text: '蝦含豐富的蛋白質、透抽含豐富的礦物質、菇類含有高蛋白，與香味濃香的蒜油結合在料理中，將原有海鮮腥味去除，並將甘甜鮮味的肉質釋放出來，是料理上更不可或缺的蒜油。',
  },
  {
    img: './images/img-menu/Chargrilled Ribeye Steak.jpg', Meals: '炭烤美國肋眼牛排', money: 980, id: 7,
    type: '主菜', quantity: 1,
    text: '肋眼(RibEye)： 肋眼心+肋眼上蓋、老饕牛肉的雙重口感部位，沿著脊骨兩側所附著的肉塊便是肋眼，這部位運動量較小，肉質嫩、脂肪多且夾帶著少量筋，嚼勁佳，容易呈現霜降狀態。',
  },
  {
    img: './images/img-menu/Grilled Chicken Steak.jpg', Meals: '風香料烤雞', money: 680, id: 9,
    type: '主菜', quantity: 1,
    text: '通常的配菜有肉汁馬鈴薯泥，番薯，蔓越莓果醬，甜玉米以及各種蔬菜。由於火雞在台灣的取得相對較難，為了讓大家能輕鬆、簡單的享受感恩節的氣氛，我們選擇以取得容易的全雞取代火雞。至於雞裡面的stuffing與配菜，除了我們所介紹的之外，也可以自由選擇替換，無需拘泥。重點是，以雞本身最天然的油脂與調味料融合，來烹煮蔬菜，創造出最天然的美味！',
  },
  {
    img: './images/img-menu/Pan-fried salmon fillet with creamy white sauce.jpg', Meals: '奶香白醬香煎鮭魚排', money: 680, id: 10,
    type: '主菜', quantity: 1,
    text: '奶香白醬香煎鮭魚排，肥美厚實的鮭魚，綿密細緻且富含脂肪，煎烤過後仍保有其豐沛的肉汁，佐以酸豆鯷魚白醬，鹹、酸、甜、奶香，彼此交疊出豐沛的味覺層次，濃郁而溫順的口感在舌尖綻放，搭配四季豆、小番茄、馬鈴薯等蔬菜，健康又美味。',
  },

  {
    img: './images/img-menu/Grilled Crispy Caramel Pudding.jpg', Meals: '香烤脆皮焦糖布丁', money: 160, id: 15,
    type: '甜點', quantity: 1,
    text: '細細琢磨過的特色風味！如果你對布丁的印象還停留在小時候記憶中的統一雞蛋布丁，那你更應該品嘗看看手作布丁多層次的迷人香氣，從綿密的布丁到細細熬煮的焦糖，都是讓人打從心底療癒心情的甜點！',
  },
];

// 另存購買資訊陣列
let shoppingCart = [];
// 另存購買資訊陣列後過濾
let shoppingCart2 = [];
// let shoppingCart3 = [];

// 總金額 和 加總
let totalPrice = document.getElementById('totalPrice');
let total = 0;

// banner 背景圖
const banner = document.getElementById('banner');

//購物車裡的標籤
const shoppingCart_title = document.getElementById('shoppingCart_title');
const shoppingCart_link = document.getElementById('shoppingCart_link');

//購物車裡的內容
const shoppingCart_content = document.getElementById('shoppingCart_content');

//購物車裡的 兩個按鈕
const shoppingCart_account = document.getElementById('shoppingCart_account');

//購物車裡的刪除功能
const LIST = document.querySelector('.LIST');

//購物車裡的數量
const NuM = document.getElementById('NuM');
let total2 = 0;

const asas = document.getElementById('asas');

// 購物車裡面渲染
function renderShoppingcart(){
  // console.log(Object.keys(shoppingCart).length);

  if(Object.keys(shoppingCart2).length >= 1){
    let str = ``;
    for (let i = 0; i < shoppingCart2.length; i++) {
      str+=`
      <div class="col-4 mb-2">
        <img src="${shoppingCart2[i].img}" alt="..." class="img-fluid object-fit-cover w-100" style="height: 100px;">
      </div>
      <div class="col-4 text-center">
        <p>${shoppingCart2[i].Meals}</p>
        <small class="text-secondary"> x ${shoppingCart2[i].quantity}</small>
      </div>
      <div class="col-3">
        <small class="text-secondary"> NT$ ${shoppingCart2[i].money}</small>
      </div>
      <div class="col-1 px-0 mb-0">
        <button type="button" class="btn  shadow-none  border-0 p-0 delete" data-id="${i}">
          <i class="bi bi-trash-fill text-danger fs-3"></i>
        </button>
      </div>
      `;
    }
    shoppingCart_content.innerHTML = str;
    totalPrice.textContent = total;
  }else{
    // console.log('購物車是空的，所以渲染不出東西');
    let str = ``
    shoppingCart_content.innerHTML = str;
    totalPrice.textContent = total;
  }
}

//新增購物車按鈕事件
const addBtn = document.querySelectorAll('.addBtn');
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', function(e){
    e.preventDefault();

    //對購物車裡的標籤 d-none
    shoppingCart_title.classList.add('d-none');
    shoppingCart_link.classList.add('d-none');
    shoppingCart_account.classList.remove('d-none');
    
    let obj = {};
    obj.img = data[i].img;
    obj.Meals = data[i].Meals;
    obj.money = data[i].money;
    obj.id = data[i].id;
    obj.type = data[i].type;
    obj.quantity = data[i].quantity;
    shoppingCart.push(obj)

    // 過濾
    filter();
    // 再次渲染
    renderShoppingcart();
    // 視窗
    Swal.fire({
      title: "購物成功",
      text: "已加入購物車",
      icon: "success",
      // 確認
      showConfirmButton: false,
      confirmButtonColor:"#9ccee7",
      confirmButtonText:"確定刪除",
      // 取消
      showCancelButton: false,
      cancelButtonColor:"#fe7f7f",
      cancelButtonText:"取消",
      // 自動關閉
      timer: 1000,
    });
  });
};

//觸發後過濾
function filter(){
  //重複篩選掉
  shoppingCart = Array.from(new Set(shoppingCart.map((item) => JSON.stringify(item))))
  .map((item) => JSON.parse(item));
  shoppingCart2 = Array.from(new Set(shoppingCart.map((item) => JSON.stringify(item))))
  .map((item) => JSON.parse(item));

  // console.log(shoppingCart2);

  // //對購物車裡的購買數量
  total2 = shoppingCart2.length;
  NuM.innerHTML = total2;

  // //購買成功加錢
  shoppingCart2.forEach(function(item){
    total = 0;
    for (let i = 0; i < shoppingCart2.length; i++) {
      total += shoppingCart2[i].money;        
    }
  });
  totalPrice.textContent = total;
}

// 購物車裡的刪除功能
LIST.addEventListener('click', function(e){
  // console.log(e.target.closest("button").classList.contains( "delete" ));
  // console.log( e.target.closest( "button" ).getAttribute('data-id'));
  // console.log( e.target.closest( "button" ).dataset.id);
  // console.log(e.target.getAttribute('class') !== 'delete')
  
  if(e.target.classList.contains( "bi" )){
    let i = e.target.closest( "button" ).dataset.id;

    //刪除後扣錢
    total -= shoppingCart2[i].money;
    totalPrice.textContent = total;

    //對購物車裡的購買數量
    total2 -= 1;
    NuM.innerHTML = total2;


    //刪除陣列裡的資料
    shoppingCart.splice(i,1);
    shoppingCart2.splice(i,1);

    //觸發購物車事件
    stLey();

    // 觸發 BillPlease_content_rendering 渲染
    BillPlease_content_rendering();

    // 視窗
    Swal.fire({
      title: "移除成功",
      text: "購物車移除",
      icon: "success",
      color: "black",
      // 確認
      showConfirmButton: false,
      confirmButtonColor:"#9ccee7",
      confirmButtonText:"確定刪除",
      // 取消
      showCancelButton: false,
      cancelButtonColor:"#fe7f7f",
      cancelButtonText:"取消",
      // 自動關閉
      timer: 1000,
    });

    // 檢查購物車列表事件
    if(Object.keys(shoppingCart2).length === 0) {
      checkCartList1.classList.add('d-none');
      checkCartList2.classList.remove('d-none');
    }else if(Object.keys(shoppingCart2).length >= 0){
      checkCartList1.classList.remove('d-none');
    }
  }else{
    // console.log('沒點擊倒');
    return;
  }

});

// 觸發購物車事件
function stLey(){
  if(Object.keys(shoppingCart2).length >= 1){
    // console.log(shoppingCart2,'查看移除後還有哪幾筆資料');        
    renderShoppingcart()
  }
  if(Object.keys(shoppingCart2).length === 0){
    let str = ``;      
    str+=``;

    shoppingCart_content.innerHTML = str;
    shoppingCart_title.classList.remove('d-none');
    shoppingCart_link.classList.remove('d-none');
    shoppingCart_account.classList.add('d-none');
  }
};







// 菜單選項
const menuoPtions = document.getElementById('menuoPtions');

// 菜單介紹
const menuIntroduction = document.getElementById('menuIntroduction');

// Menu link 資訊
const MenuLinkInformation = document.getElementById('MenuLinkInformation');

// Menu link 資訊裡面 要放入的內容
const MenuLinkInformation_content = document.getElementById('MenuLinkInformation_content');

// Menu link 的全部商品
const allProducts = document.querySelector('.allProducts');

// Menu link 資訊裡面的 加入購物按鈕
const addMenuLink = document.getElementById('addMenuLink');

// 跑馬燈裡面 要放入的內容
// const Marquee_content = document.getElementById('Marquee_content');

// 跑馬燈裡面 點擊更換資料
const Marquee_contentJump = document.querySelectorAll('.Marquee_contentJump');



// Menu link 資訊 點擊效果
const  menuLink = document.querySelectorAll('.menuLink');
for(let i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener('click', function(e){
    e.preventDefault();
    menuoPtions.classList.add('d-none');
    menuIntroduction.classList.add('d-none');
    MenuLinkInformation.classList.remove('d-none');

    //回到頂部
    window.scrollTo({top: 0, behavior: 'smooth'});
    // 觸發 Menu link 資訊裡面內容
    aaaaaa(i);
  })
}
//啟動 swiPer2
Restart();

//觸發 Menu link 資訊裡面內容
function aaaaaa(i){
  let str = ``;
  str+= `
    <div class="row">
      <div class="col-md-6">
        <img src="${data[i].img}" alt="..." class="img-fluid object-fit-cover w-100" style="height: 450px">
      </div>
      <div class="col-md-6 pt-3 pt-md-0">
        <h2 class="fw-bold mb-3 text-info border-bottom border-5 border-info">${data[i].Meals}</h2>
        <div class="p-3">
          <p class="fs-5">
            ${data[i].text}
          </p>
        </div>
        <button type="button" class="btn btn-outline-success w-50 ms-auto d-block" data-id="${data[i].id}" id="addMenuLink">加入購物車</button>
      </div>
    </div>
  `;
  MenuLinkInformation_content.innerHTML = str;
};


// 跑馬燈裡面 點擊更換資料
for (let i = 0; i < Marquee_contentJump.length; i++) {
  Marquee_contentJump[i].addEventListener('click',function(e){
    e.preventDefault();
    let str = ``;
    str+= `
      <div class="row">
        <div class="col-md-6">
          <img src="${Marquee_contentMenu[i].img}" alt="..." class="img-fluid object-fit-cover w-100" style="height: 450px">
        </div>
        <div class="col-md-6 pt-3 pt-md-0">
          <h2 class="fw-bold mb-3 text-info border-bottom border-5 border-info">${Marquee_contentMenu[i].Meals}</h2>
          <div class="p-3">
            <p class="fs-5">
              ${Marquee_contentMenu[i].text}
            </p>
          </div>
          <button type="button" class="btn btn-outline-success w-50 ms-auto d-block" data-id="${Marquee_contentMenu[i].id}"  id="addMenuLink">加入購物車</button>
        </div>
      </div>
    `;
    MenuLinkInformation_content.innerHTML = str;
    //回到頂部
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

// Menu link 的全部商品
allProducts.addEventListener('click', function(e){
  e.preventDefault();

  menuoPtions.classList.remove('d-none');
  menuIntroduction.classList.remove('d-none');
  MenuLinkInformation.classList.add('d-none');

  //重新啟動 swiPer2
  Restart();
});

// Menu link 資訊裡監聽
MenuLinkInformation.addEventListener('click', function(e){
  e.preventDefault();
  // console.log(e.target.closest('button').dataset.id === data[id].id);
  if(!e.target.closest('button')){  
    // console.log('沒點到按鈕 !!!');
    return;
  }else if(e.target.closest('button')){
    // console.log('有點到按鈕 ~~~~~');
    let id = parseInt(e.target.closest('button').dataset.id);

    shoppingCart_title.classList.add('d-none');
    shoppingCart_link.classList.add('d-none');
    shoppingCart_account.classList.remove('d-none');

    let obj = {};
    obj.img = data[id].img;
    obj.Meals = data[id].Meals;
    obj.money = data[id].money;
    obj.id = data[id].id;   
    obj.type = data[id].type;
    obj.quantity = data[id].quantity;   
    shoppingCart.push(obj)      
    filter();//過濾
    renderShoppingcart();//再次渲染

    // 視窗
    Swal.fire({
      title: "購物成功",
      text: "已加入購物車",
      icon: "success",
      // 確認
      showConfirmButton: false,
      confirmButtonColor:"#9ccee7",
      confirmButtonText:"確定刪除",
      // 取消
      showCancelButton: false,
      cancelButtonColor:"#fe7f7f",
      cancelButtonText:"取消",
      // 自動關閉
      timer: 1000,
    });
  }
});










// 購物車裡的 前往結賬結賬 按鈕
const goBillPlease = document.getElementById('goBillPlease');

// 購物車裡的 繼續購物 按鈕
const continueShopping = document.getElementById('continueShopping');

// 前往結賬 BillPlease
const BillPlease = document.getElementById('BillPlease');

// offcanvas 控制事件
const offcanvas = document.querySelector('.offcanvas');

// BillPlease_content 渲染
const BillPlease_content = document.getElementById('BillPlease_content');

// BillPlease_content 總價錢
const BillPlease_content_totalPrice = document.getElementById('BillPlease_content_totalPrice');

// 檢查購物車列表1
const checkCartList1 = document.getElementById('checkCartList1');

// 檢查購物車列表2
const checkCartList2 = document.getElementById('checkCartList2');

// 清空購物車
const allDelete = document.getElementById('allDelete');

// 前往結賬的 填寫表單按鈕事件
const gofillOrder = document.getElementById('gofillOrder');


//購物車裡的 繼續購物 按鈕事件
continueShopping.addEventListener('click', function(e){
  e.preventDefault();
  //回到頂部
  window.scrollTo({top: 0, behavior: 'smooth'});
  banner.classList.remove('d-none');
  menuoPtions.classList.remove('d-none');
  menuIntroduction.classList.remove('d-none');
  MenuLinkInformation.classList.add('d-none');
  BillPlease.classList.add('d-none');
  // 檢查購物車列表事件
  checkCartList1.classList.remove('d-none');
  checkCartList2.classList.add('d-none');
  // 關閉填寫表單頁
  fillOrder.classList.add('d-none');
  // 關閉確認付款資訊頁
  ConfirmPaymentInformation.classList.add('d-none');
  //重新啟動 swiPer2
  Restart();
});

//購物車裡的 前往結賬 按鈕事件
goBillPlease.addEventListener('click', function(e){
  e.preventDefault();
  //回到頂部
  window.scrollTo({top: 0, behavior: 'smooth'});
  offcanvas.classList.toggle('show');
  banner.classList.add('d-none');
  menuoPtions.classList.add('d-none');
  menuIntroduction.classList.add('d-none');
  MenuLinkInformation.classList.add('d-none');
  ConfirmPaymentInformation.classList.add('d-none');
  BillPlease.classList.remove('d-none');
  // 檢查購物車列表事件
  checkCartList2.classList.add('d-none');
  // 關閉填寫表單頁
  fillOrder.classList.add('d-none'); 

  //回到頂部
  window.scrollTo({top: 0, behavior: 'smooth'});
  // 觸發渲染
  BillPlease_content_rendering();
  //重新啟動 swiPer2
  Restart();
  // // 複製
  // shoppingCart3 = JSON.parse(JSON.stringify(shoppingCart2));
});

// 觸發渲染
function BillPlease_content_rendering(){
  if(Object.keys(shoppingCart2).length >= 1){
    let str = ``;
    for (let i = 0; i < shoppingCart2.length; i++) {
      str+=`
      <tr>
        <td>
          <div class="row align-items-center g-1">
            <div class="col-6 d-none d-md-block">
              <img src="${shoppingCart[i].img}" alt="..." class="img-fluid object-fit-cover w-100" style="height: 150px;">
            </div>
            <div class="col-12 col-md-6">
              <p>${shoppingCart[i].Meals}</p>
              <span>${shoppingCart[i].money}</span>
            </div>
          </div>
        </td>
        <td>
          <div class="d-flex justify-content-center">
            <div class="input-group text-center" style="max-width: 160px;">
              <button type="button" class="btn text-info fs-4 px-1 px-md-3" data-reduce="${i}">
                -
              </button>
              <input type="number" class="form-control text-center w-25 px-1 px-md-2" value="${shoppingCart2[i].quantity}">
              <button type="button" class="btn text-info fs-4 px-1 px-md-3" data-add="${i}"> 
                +
              </button>
            </div>
          </div>
        </td>
        <td>
          NT$ <span>${shoppingCart2[i].money}</span>
        </td>
        <td>
          <button type="button" class="btn border-0 p-0" data-id="${i}">
            <i class="bi bi-trash-fill text-danger fs-2"></i>
          </button>
        </td>
      </tr>
      `;
    }
    // 渲染
    BillPlease_content.innerHTML = str;
    // 渲染價錢
    BillPlease_content_totalPrice.innerHTML = total;
  }else if(Object.keys(shoppingCart2).length === 0){
    let str = ``;      
    str+=``;

    // 渲染
    BillPlease_content.innerHTML = str;
    // 渲染價錢
    BillPlease_content_totalPrice.innerHTML = total;
  }
};

// 前往 結帳監聽 BillPlease
BillPlease.addEventListener('click', function(e){
  // e.preventDefault();
  if(e.target.closest('button')){
    // console.log('點到嚕');
    // console.log(e.target.closest('button').id === 'allDelete');
    // console.log(e.target.closest('button').dataset);
    // console.log(e.target.closest('button').dataset.reDuce);
    // console.log(e.target.closest('button').dataset.add);

    if(e.target.closest('button').dataset.reduce){
      // 結帳監聽 BillPlease 的加減數量
      // console.log('dataset.reduce減減');
      let i = (parseInt(e.target.closest('button').dataset.reduce));
      let I = shoppingCart2[i].id;
      let a = 0;
      if(shoppingCart2[i].quantity === 1){
        // 視窗
        Swal.fire({
          title: "最低數量",
          text: "數量不能小於１",
          // 確認
          showConfirmButton: false,
          // 取消
          showCancelButton: false,
          // 自動關閉
          timer: 1000,
        });
        return;
      }else if(shoppingCart2[i].quantity >= 1){
        a++
        shoppingCart2[i].quantity -= a;
        total -= data[I].money;
        shoppingCart2[i].money -= data[I].money;

        BillPlease_content_rendering();
        renderShoppingcart();
      }        
    }else if(e.target.closest('button').dataset.add){
      // 結帳監聽 BillPlease 的加減數量
      let i = (parseInt(e.target.closest('button').dataset.add));
      let I = shoppingCart2[i].id;
      let a = 0;
      a++
      shoppingCart2[i].quantity += a;
      total += data[I].money;
      shoppingCart2[i].money += data[I].money;
      
      BillPlease_content_rendering();
      renderShoppingcart();
    }else if(e.target.closest('button').dataset.id){
      // console.log('dataset.id刪除');

      let i = (parseInt(e.target.closest('button').dataset.id));
      // 刪除後扣除所有錢錢
      total -= shoppingCart2[i].money;
      // 清除陣列資料
      shoppingCart.splice(i,1);
      shoppingCart2.splice(i,1);
      
      // //對購物車裡的購買數量
      total2 = shoppingCart2.length;
      NuM.innerHTML = total2;
      
      BillPlease_content_rendering();
      renderShoppingcart();
      if(Object.keys(shoppingCart2).length === 0){
        // console.log('購物車內沒有商品，趕快去逛逛吧!');
        // 檢查購物車列表事件
        checkCartList1.classList.add('d-none');
        checkCartList2.classList.remove('d-none');
        // 對購物車裡的標籤 d-none
        shoppingCart_title.classList.remove('d-none');
        shoppingCart_link.classList.remove('d-none');
        shoppingCart_account.classList.add('d-none');
        return;
      }else{
        // 檢查購物車列表事件
        checkCartList1.classList.remove('d-none');
        checkCartList2.classList.add('d-none');
      }
    }else if(e.target.closest('button').id === 'allDelete'){
      // console.log('購物車全部清空');
      // 視窗
      Swal.fire({
        title: "購物車全部清空",
        text: "是否確認全部清空",
        icon: "question",
        // 確認
        showConfirmButton: true,
        confirmButtonColor:"#9ccee7",
        confirmButtonText:"確定刪除",
        // 取消
        showCancelButton: true,
        cancelButtonColor:"#fe7f7f",
        cancelButtonText:"取消",
      }).then((result) => {
        if(result.isConfirmed){
          // 視窗
          Swal.fire({
            title: "購物車全部清空",
            text: "已全部清空",
            icon: "success",
            // 確認
            showConfirmButton: false,
            // 取消
            showCancelButton: false,
            // 自動關閉
            timer: 1000,
          });
          // 刪除陣列所有資料
          while (shoppingCart.length,shoppingCart2.length) {
            shoppingCart.pop();
            shoppingCart2.pop();
          };
          // 檢查購物車列表事件
          checkCartList1.classList.add('d-none');
          checkCartList2.classList.remove('d-none');
          // 刪除後扣除所有錢錢
          total = 0;
          // 對購物車裡的標籤 d-none
          shoppingCart_title.classList.remove('d-none');
          shoppingCart_link.classList.remove('d-none');
          shoppingCart_account.classList.add('d-none');
          // //對購物車裡的購買數量
          total2 = shoppingCart2.length;
          NuM.innerHTML = total2;
          // 渲染
          BillPlease_content_rendering();
          renderShoppingcart();              
        }else{
          Swal.fire({
            title: "取消刪除",
            text: "已取消",
            icon: "success",
            // 確認
            showConfirmButton: true,
            confirmButtonColor:"#9ccee7",
            confirmButtonText:"我要取消",
          })
        }
      })
    }else if(e.target.closest('button').id === 'gofillOrder'){
      if(Object.keys(shoppingCart2).length >= 1){
        BillPlease.classList.add('d-none');
        fillOrder.classList.remove('d-none');
        // 關閉 購物車列表事件
        shoppingCart_title.classList.remove('d-none');
        shoppingCart_link.classList.remove('d-none');
        shoppingCart_content.classList.add('d-none');
        shoppingCart_account.classList.add('d-none');
        //對購物車裡的購買數量
        NuM.textContent = 0;     
        //回到頂部
        window.scrollTo({top: 0, behavior: 'smooth'});         
      }else{
        // 視窗
        Swal.fire({
          title: "購物車是空的",
          text: "無法填寫表單",
          // 確認
          showConfirmButton: false,
          // 取消
          showCancelButton: false,
          // 自動關閉
          timer: 1000,
        });
        return;
      }
    }
  }else if(!e.target.closest('button')){
    // console.log('沒點到');
    return;
  }
});

// swiPer2 產品跑馬燈
function Restart(){
  let swiPer2 = new Swiper(".swiPer2", {
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 5000,
    // slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 100,
      },
      1440: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });
};





//填寫訂單
const fillOrder = document.getElementById('fillOrder');
// 姓名欄位
const customerName = document.getElementById('customerName');
// 電話欄位
const customerPhone = document.getElementById('customerPhone');
// 用餐日期
const mealDate  = document.getElementById('mealDate');
// 用餐時間
const diningTime  = document.getElementById('diningTime');
// 訂位人數欄位
const NumberOfCustomers = document.getElementById('NumberOfCustomers');
// 備註欄位
const customerMessage = document.getElementById('customerMessage');
// 送出按鈕
const btnSubmit = document.getElementById('btnSubmit');

// 確認付款資訊
const ConfirmPaymentInformation = document.getElementById('ConfirmPaymentInformation');

// 付款資訊 商品 渲染
const paymentInformationRendering1 = document.getElementById('paymentInformationRendering1');

// 付款資訊 資料 渲染
const paymentInformationRendering2 = document.getElementById('paymentInformationRendering2');

// 付款總金額
const paymentAmount = document.getElementById('paymentAmount');

// banner2 背景圖 完成訂單
const banner2 = document.getElementById('banner2');

// 客戶資料
let CustomerInformation = [];



// 送出按鈕
btnSubmit.addEventListener('click', function(e){
  let formName = customerName.value.trim().replace(/\s*/g,"");
  let formPhone = customerPhone.value.trim().replace(/\s*/g,"");
  let formDate = mealDate.value;
  let formTime = diningTime.value;
  let formCustomers = NumberOfCustomers.value;
  let formMessage = customerMessage.value.trim().replace(/\s*/g,"");
  
  // 電話表達式
  let LET = /^09[0-9]{8}$/;

  if(formName === '' || formPhone === '' || formCustomers === '' || formTime === ''){
    // console.log('請輸入正確，請勿留空');
    // 視窗
    Swal.fire({
      title: "格式錯誤",
      text: "請輸入正確，請勿留空",
      icon: "info",
      // 確認
      showConfirmButton: false,
      // 取消
      showCancelButton: false,
      // 自動關閉
      timer: 1500,
    });
    return;
  }else if(formPhone.length <= 9){
    // console.log('不足十碼');
    // 視窗
    Swal.fire({
      title: "格式錯誤",
      text: "號碼不足十碼",
      icon: "info",
      // 確認
      showConfirmButton: false,
      // 取消
      showCancelButton: false,
      // 自動關閉
      timer: 1500,
    });
    return;
  }else if(formPhone.length > 10){
    // console.log('超過十碼');
    // 視窗
    Swal.fire({
      title: "格式錯誤",
      text: "號碼超過十碼",
      icon: "info",
      // 確認
      showConfirmButton: false,
      // 取消
      showCancelButton: false,
      // 自動關閉
      timer: 1500,
    });
    return;
  }else if(!LET.test(formPhone)){
    // console.log('電話開頭必須為09');
    // 視窗
    Swal.fire({
      title: "格式錯誤",
      text: "電話開頭必須為09",
      icon: "info",
      // 確認
      showConfirmButton: false,
      // 取消
      showCancelButton: false,
      // 自動關閉
      timer: 1500,
    });
    return;
  };
  // console.log('繼續吧');
  let obj = {};
  obj.Name = formName;
  obj.Phone = formPhone;
  obj.Date = formDate;
  obj.Time = formTime;
  obj.Customers = formCustomers;
  obj.Message = formMessage;
  CustomerInformation.push(obj);
  customerName.value = '';
  customerPhone.value = '';
  diningTime.value = '';
  NumberOfCustomers.value = '';
  customerMessage.value = '';

  fillOrder.classList.add('d-none');
  ConfirmPaymentInformation.classList.remove('d-none');
  //回到頂部
  window.scrollTo({top: 0, behavior: 'smooth'});
  // 付款資訊 商品 資料 渲染
  paymentInformationRendering_1();
  paymentInformationRendering_2();
  // 關閉 購物車列表事件
  shoppingCart_title.classList.remove('d-none');
  shoppingCart_link.classList.remove('d-none');
  shoppingCart_content.classList.add('d-none');
  shoppingCart_account.classList.add('d-none');
  //對購物車裡的購買數量
  NuM.textContent = 0;
});

// 付款資訊 商品 渲染
function paymentInformationRendering_1(){
  let str = ``;

  for (let i = 0; i < shoppingCart2.length; i++) {
    str+=`
    <div class="row g-0 rounded-3 mb-2" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;">
      <div class="col-6 p-2">
        <img src="${shoppingCart2[i].img}" alt="..." class="img-fluid object-fit-cover rounded-3 w-100" style="height: 200px;">
      </div>
      <div class="col-6 d-flex align-items-center">
        <div class="p-3">                  
          <h4>${shoppingCart2[i].Meals}</h4>
          <p class="fs-5">數量: <span>${shoppingCart2[i].quantity}</span></p>
          <p class="fs-5">總價: NT$ <span>${shoppingCart2[i].money}</span></p>
        </div>
      </div>
    </div>
    `;
  }
  paymentInformationRendering1.innerHTML = str;
  paymentAmount.textContent = total;
};

// 付款資訊 資料 渲染
function paymentInformationRendering_2(){
  for (let i = 0; i < CustomerInformation.length; i++) {
    let str = ``;
    str+=`
      <form class="row shadow" style="border-top: 5px solid #b0d6f0; border-bottom: 8px solid #b0d6f0;">
        <div class="col-12 mt-3">
          <label for="customerName" class="form-label">姓名</label>
          <input type="text" class="form-control" placeholder="請輸入姓名" name="姓名" value="${CustomerInformation[i].Name}" disabled>
        </div>
        <div class="col-12 mt-3">
          <label for="customerPhone" class="form-label">電話</label>
          <input type="tel" class="form-control" placeholder="請輸入電話" name="電話" value="${CustomerInformation[i].Phone}" disabled>
        </div>
        <div class="col-md-5 mt-3">
          <label for="mealDate" class="form-label">日期</label>
          <input type="date" class="form-control" name="日期" value="${CustomerInformation[i].Date}" disabled>
        </div>
        <div class="col-md-7 mt-3">
          <label for="diningTime" class="form-label">用餐時間</label>
          <select class="form-select" id="diningTime" name="用餐時間" disabled>
            <option selected value="">${CustomerInformation[i].Time}</option>
          </select>
        </div>
        <div class="col-12 mt-3">
          <label for="NumberOfCustomers" class="form-label">訂位人數</label>
          <select class="form-select" id="NumberOfCustomers" name="人數" disabled>
            <option selected value="">${CustomerInformation[i].Customers}</option>
          </select>
        </div>
        <div class="col-12 my-3">
          <label for="customerMessage" class="form-label">備註</label>
          <textarea class="form-control" placeholder="${CustomerInformation[i].Message}" cols="30" rows="5" name="Remarks" value="" disabled></textarea>
        </div>
      </form>
    `;
    paymentInformationRendering2.innerHTML = str;
  }
};




// 完成訂購按鈕
const completeOrder = document.getElementById('completeOrder');
completeOrder.addEventListener('click', function(e){
  // 確認付款資訊
  ConfirmPaymentInformation.classList.add('d-none');
  // banner2 完成訂單
  banner2.classList.remove('d-none');
  //回到頂部
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// let numbers = data.sort(function(a, b) {
//  return 0.5 - Math.random();
// });
// // 每次執行排序後的結果都會不一樣
// // [250, 10, 80, 1, 500, 101, 50, 300]
// console.log(numbers);