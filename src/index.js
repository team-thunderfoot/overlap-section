import OverlapSection from "./OverlapSection";

class Page {
    constructor() {
        this.init();
    }
    init() {
        new OverlapSection({
            elements: document.querySelectorAll("section"),
        });
    }
}
export default Page;
new Page();
