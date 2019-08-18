const gameStart = {
    key: 'gameStart',
    preload: function () {
        this.load.image('bg1', 'images/bg/bg1.png');
        this.load.image('bg2', 'images/bg/bg2.png');
        this.load.image('bg3', 'images/bg/bg3.png');
        this.load.image('bg4', 'images/bg/bg4.png');
        this.load.image('footer', 'images/bg/footer.png');
        this.load.image('title', 'images/ui/txt-title.png');
        this.load.image('playBtn', 'images/ui/btn-press-start.png');
        this.load.image('logo', "images/ui/player-end.png");

        this.load.image('space1', "images/spaceman1.png");
        this.load.image('space2', "images/spaceman2.png");
        this.load.image('space3', "images/spaceman3.png");
        this.load.image('space4', "images/spaceman4.png");
        this.load.image('spacebg', "images/spacebg.png");

    },
    create: function () {
        this.spacebg = this.add.tileSprite(cw / 2, ch / 2, cw, ch, 'spacebg');
        const drag = 50;
        this.space1 = this.physics.add.sprite(cw / 2 - 200, ch / 2 - 200, 'space1');
        this.space1.setCollideWorldBounds(true); //角色邊界限制
        this.space1.setBounce(1); //設定彈跳值
        this.space1.setScale(scale); //設定顯示大小sprite.body.drag.set(50)
        this.space1.body.drag.set(drag);

        this.space2 = this.physics.add.sprite(cw / 2 - 200, ch / 2 + 200, 'space2');
        this.space2.setCollideWorldBounds(true); //角色邊界限制
        this.space2.setBounce(1); 
        this.space2.setScale(scale); 
        this.space2.body.drag.set(drag);

        this.space3 = this.physics.add.sprite(cw / 2 + 200, ch / 2 - 200, 'space3');
        this.space3.setCollideWorldBounds(true); //角色邊界限制
        this.space3.setBounce(1); 
        this.space3.setScale(scale); 
        this.space3.body.drag.set(drag);

        this.space4 = this.physics.add.sprite(cw / 2 + 200, ch / 2 + 200, 'space4');
        this.space4.setCollideWorldBounds(true); //角色邊界限制
        this.space4.setBounce(1); 
        this.space4.setScale(scale); 
        this.space4.body.drag.set(drag);

        this.physics.add.collider(this.space1, this.space2, collisionCallback);
        this.physics.add.collider(this.space1, this.space3, collisionCallback);
        this.physics.add.collider(this.space1, this.space4, collisionCallback);
        this.physics.add.collider(this.space2, this.space3, collisionCallback);
        this.physics.add.collider(this.space2, this.space4, collisionCallback);
        this.physics.add.collider(this.space3, this.space4, collisionCallback);

        function collisionCallback (obj1, obj2) {
            if (obj1.body.speed > obj2.body.speed)
            {
                obj1.setVelocityY(obj1.body.velocity.y*0.01);
                obj1.setVelocityX(obj1.body.velocity.x*0.01);
                obj2.setVelocityY(obj2.body.velocity.y*1.01);
                obj2.setVelocityX(obj2.body.velocity.x*1.01);
            }
            else
            {
                obj1.setVelocityY(obj1.body.velocity.y*1.01);
                obj1.setVelocityX(obj1.body.velocity.x*1.01);
                obj2.setVelocityY(obj2.body.velocity.y*0.01);
                obj2.setVelocityX(obj2.body.velocity.x*0.01);
            }
    
        }

        
        // this.space3 = this.add.sprite(cw / 2, ch / 2, 'space3');
        // this.space4 = this.add.sprite(cw / 2, ch / 2, 'space4');

    },

    update: function () {
        this.spacebg.tilePositionX += 1;
        // 啟動鍵盤事件
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.right.isDown) {
            this.space1.setVelocityX(500);
            // this.space1.setSize(100, 70, 0); //碰撞邊界
            this.space1.flipX = false;
        } else if (cursors.left.isDown) {
            this.space1.setVelocityX(-500);
            // this.space1.setSize(100, 70, 0); //碰撞邊界
            this.space1.flipX = true;
        } else if (cursors.up.isDown) {
            this.space1.setVelocityY(-500);
            // this.space1.setSize(100, 70, 0); //碰撞邊界
            this.space1.flipX = true;
        } else if (cursors.down.isDown) {
            this.space1.setVelocityY(500);
            // this.space1.setSize(100, 70, 0); //碰撞邊界
            this.space1.flipX = true;
        }
        else {
            // this.space1.setVelocityX(0);
            // this.space1.setVelocityY(0);
            // this.space1.setSize(110, 90, 0); //碰撞邊界
            this.space1.flipX = false;
        }

    }
}