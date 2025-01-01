const map = new WeakMap();
const DISTANCE = 100;

const ob = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const animation = map.get(entry.target);
            animation.play();
            observer.unobserve(entry.target);
        }
    }
});

function isBelowViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top - DISTANCE >= window.innerHeight;
}

export default {
    mounted(el) {
        if (!isBelowViewport(el)) {
            return;
        }
        const animation = el.animate([
            {
                transform: `translateY(${DISTANCE}px)`,
                opacity: 0.5
            },
            {
                transform: 'translateY(0)',
                opacity: 1
            }
        ],
            {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            }
        );
        animation.pause();
        ob.observe(el);
        map.set(el, animation);
    },
    unmounted(el) {
        ob.unobserve(el);
    }
};