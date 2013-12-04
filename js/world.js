var World = function() {

	// variables used in init()
	var  camera, renderer, clock;
	var bgScene, bgCam;
	var fun;

	function init() {
		initBackground();
		window.scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
		camera.position.z = 50;
		camera.lookAt(scene.position);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000)
		clock = new THREE.Clock();

		document.body.appendChild(renderer.domElement);
	}

	function initBackground() {
		var bgMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(2, 2, 0),
			new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture("img/SavGreg3.jpg")
			})
		)
    bgMesh.scale.x = 0.5
    bgMesh.position.x -= 0.5

		// The bg plane shouldn't care about the z-buffer.
		bgMesh.material.depthTest = false;
		bgMesh.material.depthWrite = false;

		bgScene = new THREE.Scene();
		bgCam = new THREE.Camera()
		bgScene.add(bgCam);
		bgScene.add(bgMesh);
	}


	function animate() {
		requestAnimationFrame(animate);

		// Using a fixed time-step here to avoid pauses
		render(0.016);
	}

	function updateCamera() {
		var now = Date.now() * 0.0003;
    camera.position.x = Math.sin(now) * 1;
		camera.lookAt(scene.position);
	}

	function render(dt) {

		fun.tick(dt)
    fire.tick(dt)
		renderer.autoClear = false;
		renderer.clear();
		updateCamera();
		renderer.render(bgScene, bgCam);
		renderer.render(scene, camera);
	}



	init();
	fun = new Fun(scene);
  fire = new Fire(scene)


	setTimeout(animate, 0);

}


window.rnd = function(p1, p2) {
        var r = Math.random();
        if (Array.isArray(p1)) {
            return p1[Math.floor(r * p1.length)];
        }

        if (!(p1 === undefined)) {
            if (!(p2 === undefined)) {
                r = r * (p2 - p1) + p1;
            } else {
                r = r * 2 * p1 - p1;
            }
        }
        return r;
};