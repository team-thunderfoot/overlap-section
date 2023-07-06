import OverlapSection from "../OverlapSection";


class ExampleOne {
    constructor() {
        this.init();
    }
    init() {
        const overlapExample = new OverlapSection({
            elements: document.querySelectorAll(".example-1 .js--overlap"),
            overlap: "80%"
        });
    }
}
export default ExampleOne;
new ExampleOne();
