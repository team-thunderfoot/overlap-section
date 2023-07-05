import OverlapSection from "./OverlapSection";

class Page {
    constructor() {
        this.init();
    }
    init() {
        new OverlapSection({
            elements: document.querySelectorAll(".js--overlap"),
            overlap: "100%"
        });
    }
}
export default Page;
new Page();
