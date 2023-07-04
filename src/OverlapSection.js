import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class OverlapSection {
    constructor(payload) {
        this.elements = payload.elements;
        this.scrollStart = payload.scrollStart ? payload.scrollStart : "top";

        this.init();
    }

    init() {
        let panels = gsap.utils.toArray(this.elements);

        console.log(panels)
        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: `top ${this.scrollStart}`,
                // end: "bottom center",
                pin: i === panels.length -1 ? false : true,                 
                pinSpacing: false,
                // pinType: "transform",
                // snap: false,
            });
        });
    }
}

export default OverlapSection;
