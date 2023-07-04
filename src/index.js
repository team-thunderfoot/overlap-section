import OverlapSection from "./OverlapSection";

class Page {
    constructor() {
        this.init();
    }
    init() {
        new OverlapSection({
            elements: document.querySelectorAll(".js--overlap"),
            overlayEnd: "40%"
        });
    }
}
export default Page;
new Page();
