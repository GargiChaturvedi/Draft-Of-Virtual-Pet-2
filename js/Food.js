class Food {
    constructor() {
        this.milkImage = loadImage("Images/Milk.png");
        this.foodStock = 0;
        this.lastFed = 0;
        this.feedPetButton;
        this.addFoodButton;
        /*
        this.name = "";
        this.nameInput = createInput("Write your dog's name here!");
        this.nameButton = createButton("Name dog!");
        this.nameInput.position(0, 20);
        this.nameButton.position(0, 60);
        */
    }

    getFoodStock() {
        var foodRef = database.ref('Food');
        foodRef.on("value", function(data) {
            this.foodStock = data.val();
        });
    }
     
    /*

    getName() {
        var nameRef = database.ref('Name');
        nameRef.on("value", function(data) {
            this.name = data.val();
        });
    }

    namingDog() {
        this.nameButton.mousePressed(()=>{
            this.name = this.nameInput.value;
            this.nameInput.hide();
            this.nameButton.hide();
        })
    }

    updatingName() {
        database.ref('/').update({
            Name: this.name
        });
    }
    */
    
    updateFoodStock() {
        database.ref('/').update({
            Food: this.foodStock
        });
        console.log("hello");
    }
    

    deductFood() {
        database.ref('/').update({
            Food: this.foodStock--
        });
        dog.changeAnimation("happyDog", happyDog);
    }

    addFood() {
        console.log("Hi");
        database.ref('/').update({
            Food: this.foodStock + 1 
        });
        dog.changeAnimation("sadDog", sadDog);
    }

    display() {
        var x = 80, y = 100;
        console.log(this.foodStock);
        imageMode(CENTER);
        image(this.milkImage, 720, 220, 70, 70);
        if(this.foodStock != 0) {
            for(var i = 0; i < this.foodStock; i++) {
                if(i % 10 === 0) {
                    x = 80;
                    y += 50;
                }
                image(this.milkImage, x, y, 50, 50);
                x += 30;
            }
        }
    }

    button() {
        this.feedPetButton = createButton("Feed dog");
        this.feedPetButton.position(350, 0);
    }
}