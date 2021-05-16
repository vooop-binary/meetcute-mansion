const container = document.querySelector('.panolens-container'); // Root container for panorama

/* Panoramas */
const panoramaMain = new PANOLENS.ImagePanorama('../assets/panoramas/outside-beach.jpg');
const panoramaLounge = new PANOLENS.ImagePanorama('../assets/panoramas/lounge.jpg');
const panoramaReception = new PANOLENS.ImagePanorama('../assets/panoramas/reception.jpg');

/* Viewer */
const viewer = new PANOLENS.Viewer({
    container: container, // Parent container
    controlBar: false, // Hide the control bar
    horizontalView: true,
    autoHideInfospot: false, // Never hide infospots
    cameraFov: 75, // Camera field of view
});


panoramaMain.addEventListener('load', function () {
    if (viewer.getControl().getAzimuthalAngle() == 0) {
        viewer.getControl().rotateLeft(THREE.Math.degToRad(160));
        viewer.getControl().update();
    }
});

panoramaMain.add(chat)
panoramaMain.add(chat2)
panoramaMain.add(chat3)
panoramaMain.add(reception)

panoramaLounge.addEventListener("load", async () => {
    viewer.getControl().rotateLeft(THREE.Math.degToRad(160));
    viewer.getControl().update();
    await new Promise(r => setTimeout(r, 1000));
    animateLounge();
});

panoramaMain.onEnter()

panoramaMain.link(panoramaLounge, new THREE.Vector3(0, 0, 5000), 600, '../assets/img/lounge.png')

/* View the Panoramas - Order matters */
viewer.add(panoramaMain);
viewer.add(panoramaReception);
viewer.add(panoramaLounge);