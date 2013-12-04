var Snow = function(scene) {

  var scene = scene;
  var funGroup, funEmitter;
  var maxAge = 10
  setTimeout(init, 2000)
  var colorStart = new THREE.Color(), colorEnd = new THREE.Color()
  colorStart.setRGB(Math.random(), Math.random(), Math.random())
  colorEnd.setRGB(Math.random(), Math.random(), Math.random())


  function init() {
    funGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge,
      blending: THREE.AdditiveBlending
    });

    funEmitter = new ShaderParticleEmitter({
      position: new THREE.Vector3(0, -50, -1),
      positionSpread: new THREE.Vector3(200, 10, 100),
      velocitySpread: new THREE.Vector3(0, 2, 0),

      acceleration: new THREE.Vector3(0, 1, 0),
      accelerationSpread: new THREE.Vector3(Math.random() * 2, .001 * Math.random() * 0.05, Math.random() * 2),


      colorStart: colorStart,
      colorSpread: new THREE.Vector3(.2, .2, .2),
      colorEnd: colorEnd,
      size: 3,
      sizeEnd: 2,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 500
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

