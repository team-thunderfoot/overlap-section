# overlap-section

The `overlap-section` allows you to create elements overlapping on HTML elements while scrollling, by specifying configuration options: the elements to animate, and the ammount of the element that will be covered by the overlapped element.

[Here's an example](https://team-thunderfoot.github.io/overlap-section/)

## Installation

```sh
npm install @teamthunderfoot/overlap-section
```

## Usage

```js
import OverlapSection from "@teamthunderfoot/overlap-section";

class Index {
    constructor() {
        this.init();
    }
    init() {
        new OverlapSection({
            elements: document.querySelectorAll(".js--overlap"), // required -> the elements that will be overlapped
            overlap: "50%", // the ammount of the element that will be covered by the overlapped element. 100% by default. Allowed values: "top" / "center" / "bottom" / "X%"" / "Xpx"
        });
    }
}

export default Index;
new Index();
```

## HTML example

**At least two elements need to exist**, selected by the `elements` class property. In this case, we have selected them using their class name (".js--overlap").

```html
<section class="js--overlap">
    <div>this is the section that will be overlapped by the next one</div>
</section>
<section class="js--overlap">
    <div>this is the section that will overlap the previous one</div>
</section>
```

## JS Options

• `elements (required):` represents **the elements that will be overlapped. At least two sibling elements need to exist**.

• `overlap (optional):` the ammount of the element that will be covered by the overlapped element. **100% by default**. Allowed values: "top" / "center" / "bottom" / "X%"" / "Xpx"
