function animateContainer(className) {
    gsap.fromTo(className, { zIndex: 0, translateY: "100%" }, { zIndex: 9, translateY: "0%" });
}

function animateLounge() {
    animateContainer('.lounge');
}

function animateChat() {
    animateContainer('.chat');
}

function animateReception() {
    animateContainer('.reception');
}

function closeOverlay(className) {
    gsap.fromTo(className, { zIndex: 9, translateY: "0%" }, { zIndex: 0, translateY: "100%" });
}

async function closeLounge() {
    gsap.fromTo('.lounge', { zIndex: 9, translateY: "0%" }, { zIndex: 0, translateY: "100%" });
    await new Promise(r => setTimeout(r, 1000));
    window.location.href = "index.html";
}
