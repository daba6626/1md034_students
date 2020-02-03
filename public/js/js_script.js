function menuItem(name, beefType, ingredients, sauce, imgPath, kcal) {
    this.name = name;
    this.beefType = beefType;
    this.ingredients = ingredients;
    this.sauce = sauce;
    this.imgPath = imgPath;
    this.kcal = kcal;
    
}

function nameAndKcal(burger) {

    return burger.name + " " + burger.kcal + " " + "kcal";
        
}

let TheMightyBurger = new menuItem("The Mighty Burger", "Vegan Beef", "Lettuce, tomato, pickles and red onion", "Our own fantastic burger sauce", "https://s.yimg.com/ny/api/res/1.2/juOdnB3oVmo_.H22UBEf0A--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/8b8533099e0ab53dee69547cc17e8be4", 490);

let TheOriginalBurger = new menuItem("The Original Burger", "Original Beef", "Double Lettuce, tomato, and double cheese", "Our own fantastic burger sauce", "http://demo.enpek.com/html-templates/foodmood/assets/images/product/themetidy-paira-framework-food-mood-responsive-html-template-product-4.png", 550);

let TheChickenator = new menuItem("The Chickenator", "Fried Chicken Fillet", "Lettuce and mayo", "Our own fantastic burger sauce", "http://demo.enpek.com/html-templates/foodmood/assets/images/product/themetidy-paira-framework-food-mood-responsive-html-template-product-2.png", 700);

let ItBurger = new menuItem("The IT-Burger", "Original beef", "Lettuce, mayo, nachos, tomato, melted cheese and pickled onion", "Without sauce", "https://d3awvtnmmsvyot.cloudfront.net/api/file/YQCUwt0mRamwTaG66pld/convert?fit=max&w=1450&quality=60&cache=true&rotate=exif&compress=true", 1250);

let DVBurger = new menuItem("The DV-Burger", "Vegan beef", "Red pickled onion, Garlic", "Our own fantastic burger sauce!", "https://media-cdn.tripadvisor.com/media/photo-s/10/63/f9/03/yuk-cheap-and-nasty-burger.jpg", 1890);
