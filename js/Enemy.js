class Enemy{
    constructor(){

    }

    spawnEnemy() {
        var randomFrame = Math.round(random(50, 200));
        if (frameCount % randomFrame === 0) {
          enemy = createSprite(displayWidth, displayHeight-230, 20, 20);
          enemy.collide(invisibleRoad);
          enemy.velocityX = -4;
          enemy.scale = .45;
          enemy.addAnimation("enemy_running", enemyAnimation)
          enemyGroup.add(enemy);
          enemy.lifetime = 250;
          enemyCount++;
          console.log("enemy count" + enemyGroup.length);
      
          var fire = createSprite(enemy.x - 40, enemy.y - 30);
          fire.addImage(enemyBulletImage);
          //fire.debug=true;
          fire.setCollider("circle",0,0,20);
          fire.scale = 0.15;
          fire.velocityX = -8;
          fire.lifetime = 130;
          enemyFireGroup.add(fire);
        }
    }

    spawnEnemy2() {
      var randomFrame = Math.round(random(250, 400));
      if (frameCount % randomFrame === 0) {
        enemy2 = createSprite(displayWidth, displayHeight-230, 20, 20);
        enemy2.collide(invisibleRoad);
        enemy2.velocityX = -11;
        enemy2.scale = 0.25;
        enemy2.addAnimation("enemy2_running", enemy2Animation);
        enemy2Group.add(enemy2);
        enemy2.lifetime = 90;
    
        var fire = createSprite(enemy2.x - 40, enemy2.y - 30);
        fire.addImage(enemyBulletImage);
        fire.scale = 0.15;
        fire.setCollider("circle",0,0,20);
        fire.velocityX = -15;
        fire.lifetime = 103;
        enemyFireGroup.add(fire);
      }
    }
}