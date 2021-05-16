/* Chat */

const chat = new PANOLENS.Infospot(500, '../assets/img/chat.png');
chat.position.set(5000, 20, 5000);
chat.addEventListener("click", async () => {
    chat.focus(2000);
    await new Promise(r => setTimeout(r, 500));
    animateContainer('.overlay');
});

const chat2 = new PANOLENS.Infospot(587 , '../assets/img/chat2.png');
chat2.position.set(-5000, 2500, 5000);
chat2.addEventListener("click",  async () => {
    chat2.focus(2000);
    await new Promise(r => setTimeout(r, 500));
    animateContainer('.overlay');
});

const chat3 = new PANOLENS.Infospot(500 , '../assets/img/chat3.png');
chat3.position.set(0, 0, -5000);
chat3.addEventListener("click", async () => {
    chat3.focus(2000);
    await new Promise(r => setTimeout(r, 500));
    animateContainer('.overlay');
});

/* Reception */

const reception = new PANOLENS.Infospot(500, '../assets/img/reception.png');
reception.position.set(-5500, 20, 5000);
reception.addEventListener("click", async () => {
    reception.focus(2000);
    await new Promise(r => setTimeout(r, 500));
    animateContainer('.overlay');
});
