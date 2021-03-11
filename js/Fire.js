class Fire{
    constructor(){

    }

    gunManFiring(){
        if (frameCount % 5 === 0) {
            var bullet = createSprite(gunMan.x + 60, gunMan.y - 17);
            bullet.velocityX = 6;
            bullet.scale = 0.15;
            bullet.lifetime = 134;
            bullet.addImage(bulletImage);
            bulletGroup.add(bullet);
            firing_sound.play();
        }

        for(var i=0; i<enemyGroup.length;i++){
            if (bulletGroup.isTouching(enemyGroup.get(i))) {
                console.log("Enemy "+ enemyGroup.get(i)); 
                enemyGroup.get(i).destroy();
                bulletGroup.destroyEach();
            }
        }

        for(var i=0; i<enemy2Group.length;i++){
            if (bulletGroup.isTouching(enemy2Group.get(i))) {
                console.log("Enemy2"+ enemy2Group.get(i)); 
                enemy2Group.get(i).destroy();
                bulletGroup.destroyEach();
            }
        }
        
            
           
        
    }
}