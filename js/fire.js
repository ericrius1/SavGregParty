var Fire = function(scene) {

  var scene = scene;
  var fireGroup, fireEmitterSav, fireEmitterGreg;
  var maxAge = 6
  var colorStartSav = new THREE.Color()
  var colorStartGreg = new THREE.Color()
  colorStartSav.setRGB(0.9, 0.4, 0.1)
  colorStartGreg.setRGB(.1, .4, .9)

  function init() {
    fireGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge,
      blending: THREE.AdditiveBlending
    });

    fireEmitterSav = new ShaderParticleEmitter({
      position: new THREE.Vector3(-17, 0, -1),
      velocity: new THREE.Vector3(-11, 11, 0),
      velocitySpread: new THREE.Vector3(2, 2, 2),
      acceleration: new THREE.Vector3(0, -1.5, 0),
      accelerationSpread: new THREE.Vector3(1.1, 1.1, 1.1),
      colorStart: colorStartSav,
      colorEnd: colorStartSav,
      size: 1,
      sizeEnd: 3,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });

     fireEmitterGreg = new ShaderParticleEmitter({
      position: new THREE.Vector3(-49, 2, -1),
      velocity: new THREE.Vector3(11, 11, 0),
      velocitySpread: new THREE.Vector3(2, 2, 2),
      acceleration: new THREE.Vector3(0, -1.8, 0),
      accelerationSpread: new THREE.Vector3(1.1, 1.1, 1.1),
      colorStart: colorStartGreg,
      colorEnd: colorStartGreg,
      size: 1,
      sizeEnd: 3,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 6000
    });
    fireGroup.addEmitter(fireEmitterSav);
    fireGroup.addEmitter(fireEmitterGreg);
    scene.add(fireGroup.mesh);
      
  }

  var tick = function(dt){
    fireGroup && fireGroup.tick(dt);
  }
  init()
  this.tick = tick;
}

