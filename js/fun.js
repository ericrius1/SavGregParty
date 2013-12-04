var Fun = function() {

  var funGroup, funEmitter;
  var maxAge = 10
  var colorStart = new THREE.Color(), colorEnd = new THREE.Color()
  colorStart.setRGB(.9, .1, .9)



  function init() {
    funGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/dino.png'),
      maxAge: maxAge,
      blending: THREE.AdditiveBlending
    });

    funEmitter = new ShaderParticleEmitter({
      position: new THREE.Vector3(0, -80, -1),
      positionSpread: new THREE.Vector3(200, 10, 100),
      velocitySpread: new THREE.Vector3(0, 2, 0),

      acceleration: new THREE.Vector3(0, 1, 0),
      accelerationSpread: new THREE.Vector3(Math.random() * 2, .001 * Math.random() * 0.05, Math.random() * 2),


      colorStart: colorStart,
      colorSpread: new THREE.Vector3(.2, .2, .2),
      size: 15,
      sizeEnd: 10,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 1000
    });
    funGroup.addEmitter(funEmitter);
    setTimeout(function(){
      scene.add(funGroup.mesh);
      
    }, 1000)

  }

  var tick = function(dt){
    funGroup && funGroup.tick(dt);
  }
  init()
  this.tick = tick;
}
