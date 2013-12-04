var World = function() {

	// variables used in init()
	var scene, camera, renderer, clock;
	var bgScene, bgCam;
	var snow;

	function init() {
		initBackground();
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
		camera.position.z = 50;
		camera.lookAt(scene.position);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(826, 1102);
		renderer.setClearColor(0x000000);

		clock = new THREE.Clock();


		document.body.appendChild(renderer.domElement);

	}


	function initBackground() {
		var bgMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(2, 2, 0),
			new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture("img/SavGreg.jpg")
			})
		)

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

		snow.tick(dt)
		renderer.autoClear = false;
		renderer.clear();
		updateCamera();
		renderer.render(bgScene, bgCam);
		renderer.render(scene, camera);
	}

	window.addEventListener('resize', function() {
		var w = window.innerWidth,
			h = window.innerHeight;

		camera.aspect = w / h;
		camera.updateProjectionMatrix();


		renderer.setSize(w, h);
	},false);

	init();
	snow = new Snow(scene);


	setTimeout(animate, 0);

}