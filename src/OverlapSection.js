import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import JSUTIL from "@andresclua/jsutil";
gsap.registerPlugin(ScrollTrigger);

class OverlapSection {
    constructor(payload) {
        this.DOM = {
            elements: [...payload.elements],
        };

        this.overlap = payload.overlap ? payload.overlap : "100%";

        this.jsUtil = new JSUTIL();

        this.panels = gsap.utils.toArray(this.DOM.elements);

        this.scrollTriggers = [];

        this.init();
    }

    init() {
        this.panels.forEach((panel, i) => {
            this.jsUtil.addStyle(panel, "position", "relative");

            this.scrollTriggers[i] = ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                end: `${this.overlap} top`,
                pin: i === this.panels.length - 1 ? false : true,
                pinSpacing: false,
            });
        });
    }

    destroy() {
        this.scrollTriggers.forEach((element) => {
            element.kill();
        });
    }
}

export default OverlapSection;
