import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class OverlapSection {
    constructor(payload) {
        this.elements = payload.elements;
        this.overlap = payload.overlap ? payload.overlap : "100%";

        this.init();
    }

    init() {
        let panels = gsap.utils.toArray(this.elements);

        console.log(panels);
        panels.forEach((panel, i) => {

            panel.style.position = "relative";

            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                end: `${this.overlap} top`,
                pin: i === panels.length - 1 ? false : true,
                pinSpacing: false,
            });
        });
    }
}

export default OverlapSection;
