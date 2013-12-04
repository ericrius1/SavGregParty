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
      velocity: new THREE.Vector3(-6, 13, 0),
      velocitySpread: new THREE.Vector3(2, 2, 2),
      accelerationSpread: new THREE.Vector3(1.4, 1.4, 3.4),
      colorStart: colorStartSav,
      colorSpread: new THREE.Vector3(.2, 0.2, 0.2),
      colorEnd: colorStartSav,
      size: 1,
      sizeEnd: 3,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 9000
    });

     fireEmitterGreg = new ShaderParticleEmitter({
      position: new THREE.Vector3(-49, 5, -1),
      velocity: new THREE.Vector3(17, 13, 0),
      velocitySpread: new THREE.Vector3(2, 2, 2),
      accelerationSpread: new THREE.Vector3(1.4, 1.4, 3.4),
      colorStart: colorStartGreg,
      colorSpread: new THREE.Vector3(.2, 0.2, 0.2),
      colorEnd: colorStartGreg,
      size: 1,
      sizeEnd: 3,
      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 9000
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

