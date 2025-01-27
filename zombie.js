AFrame.registerComponent('zombie-fest',{

    init:function(){
        var posX = -50;
        var posY = -3;
        var posZ = -150;
        for(var i=1; i<=3; i++){
            var id='zomb${i}';
            var position = { x:posX, y : posY, z: posZ};
            posX += 30;
            this.zombieSpawn(id, position);

        }
    },

    zombieSpawn:function(id,position){
        var environmentE1 = document.querySelector('a-scene');
        var zombE1 = document.createElement('a-entity');
        zombE1.setAttribute('id',id);
        zombE1.setAttribute('position',position);
        zombE1.setAttribute('scale','10 10 10')
        zombE1.setAttribute('gltf-model','#zombie')
        zombE1.setAttribute('animation-mixer',{clip: 'Walk'})
        zombE1.setAttribute('animation',{property: 'position',to:'-10 0 1000', easing:'linear',loop:'true',dur:'150000'})
        environmentE1.appendChild(zombE1)
    },
})