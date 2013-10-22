var World = function() {

	// variables used in init()
	var scene, camera, renderer, stats, stats2, clock;
	var bgScene, bgCam;

	function init() {
		initBackground();
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
		camera.position.z = 50;
		camera.lookAt(scene.position);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000);

		stats = new Stats();
		clock = new THREE.Clock();

		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0';

		document.body.appendChild(renderer.domElement);
		document.body.appendChild(stats.domElement);
	}

	function initBackground() {
		var bgMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(2, 2, 0),
			new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture("img/path.jpg")
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
		stats.update();
	}

	function updateCamera() {
		var now = Date.now() * 0.0003;
		//camera.position.x = Math.sin(now) * 30;
		//camera.position.z = Math.cos(now) * 10;
		camera.lookAt(scene.position);
	}

	function render(dt) {
		body.tick(dt);
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
	}, false);

	init();
	var body = new Body(scene);
	body.initParticles();

	setTimeout(animate, 0);

}