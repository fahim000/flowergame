const flowerContainer = document.querySelector('.flower-container');
const numFlowers = 20;
const flowerTypes = ['flower1.png', 'flower2.png', 'flower3.png', 'flower4.png'];

function createFlowers() {
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 80}%`;
        flower.style.top = `${Math.random() * 80}%`;
        const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        flower.style.backgroundImage = `url('${flowerType}')`;
        flowerContainer.appendChild(flower);
    }
}

function moveFlowersAway(e) {
    const flowers = document.querySelectorAll('.flower');
    const touchEvent = e.type.startsWith('touch');
    const x = touchEvent ? e.touches[0].clientX : e.clientX;
    const y = touchEvent ? e.touches[0].clientY : e.clientY;

    flowers.forEach(flower => {
        const rect = flower.getBoundingClientRect();
        const distX = x - rect.left - rect.width / 2;
        const distY = y - rect.top - rect.height / 2;
        const distance = Math.sqrt(distX ** 2 + distY ** 2);
        const maxDistance = 150;

        if (distance < maxDistance) {
            flower.style.transform = `translate(${-distX / maxDistance * 100}px, ${-distY / maxDistance * 100}px)`;
        } else {
            flower.style.transform = `translate(0, 0)`;
        }
    });
}

createFlowers();

flowerContainer.addEventListener('mousemove', moveFlowersAway);
flowerContainer.addEventListener('touchmove', moveFlowersAway);