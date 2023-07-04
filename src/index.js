import OverlapSection from "./OverlapSection";

class Page {
    constructor() {
        this.init();
    }
    init() {
        new OverlapSection({
            elements: document.querySelectorAll(".example-1"),
            scrollStart: "center",
        });
    }
}
export default Page;
new Page();
