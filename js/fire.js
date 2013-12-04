var Fire = function(scene) {

  var scene = scene;
  var fireGroup, fireEmitter;
  var maxAge = 6
  var colorStart = new THREE.Color(), colorEnd = new THREE.Color()
  colorStart.setRGB(0.9, 0.4, 0.1)

  function init() {
    fireGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge,
      blending: THREE.AdditiveBlending
    });

    fireEmitter = new ShaderParticleEmitter({
      position: new THREE.Vector3(-17, 0, -1),
      velocity: new THREE.Vector3(-6, 13, 10),
      velocitySpread: new THREE.Vector3(2, 2, 2),
      accelerationSpread: new THREE.Vector3(1.4, 1.4, 3.4),


      colorStart: colorStart,
      colorSpread: new THREE.Vector3(.2, 0.2, 0.2),
      colorEnd: colorStart,
      size: 1,
      sizeEnd: 3,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 9000
    });
    fireGroup.addEmitter(fireEmitter);
       setTimeout(function(){
      scene.add(fireGroup.mesh);
      
    }, 3000)
  }

  var tick = function(dt){
    fireGroup && fireGroup.tick(dt);
  }
  init()
  this.tick = tick;
}

