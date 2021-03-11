class Game{
    constructor(){

    }

    play(){

        gunManObject = new GunMan();
        gunManObject.display();

        enemyObject = new Enemy();
        enemyObject.spawnEnemy();

        enemyObject.spawnEnemy2();

        fireObject = new Fire();
        
    }


}