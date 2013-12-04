var Fun = function() {

  var funGroup, funEmitter;
  var maxAge = 13
  var colorStart = new THREE.Color(), colorEnd = new THREE.Color()
  colorStart.setRGB(.9, .4, .1)



  function init() {
    funGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/dino.png'),
      maxAge: maxAge,
      blending: THREE.AdditiveBlending
    });

    funEmitter = new ShaderParticleEmitter({
      position: new THREE.Vector3(0, -51, -1),
      positionSpread: new THREE.Vector3(250, 10, 20),
      velocity: new THREE.Vector3(0, 1, 0),
      acceleration: new THREE.Vector3(0, 1.1, 0),
      accelerationSpread: new THREE.Vector3(2, .2, .2),


      colorStart: colorStart,
      colorSpread: new THREE.Vector3(.3, .3, .3),
      opacityStart: 0.8,
      opacityEnd: 0.2,
 

      particlesPerSecond: 700
    });
    funGroup.addEmitter(funEmitter);
    scene.add(funGroup.mesh);
      

  }

  var tick = function(dt){
    funGroup && funGroup.tick(dt);
  }
  init()
  this.tick = tick;
}

