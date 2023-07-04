import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class OverlapSection {
    constructor(payload) {
        this.elements = payload.elements;
        this.overlayEnd = payload.overlayEnd ? payload.overlayEnd : "bottom";

        this.init();
    }

    init() {
        let panels = gsap.utils.toArray(this.elements);

        console.log(panels);
        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                end: `${this.overlayEnd} top`,
                pin: i === panels.length - 1 ? false : true,
                pinSpacing: false,
            });
        });
    }
}

export default OverlapSection;
