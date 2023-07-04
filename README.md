# overlap-section

The `overlap-section` allows you to create Sections Overlappings on HTML elements by specifying configuration options such as the elements to animate, animation duration, number formatting, and scroll trigger settings.

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
            elements: document.querySelectorAll(".example-1"), //required -> the elements that will be translated
            scrollStart: "center", //scroll trigger start position -> "top" / "center" / "bottom" / "X%"" / "Xpx"
        });
    }
}

export default Index;
new Index();
```

## HTML attributes

• `data-counter-duration (optional):` If the element has a data-counter-duration attribute, it overrides the default animation duration with the value specified in the attribute. **The duration hierarchy is: default value (2 seconds) < duration config value (determined in JS class parameters) < data-counter-duration (determined as a HTML attribute)**

```html
<section class="example-1" data-counter-duration="5">20.000</section>

```

## JS Options

• `elements (required):` represents **the elements that will be animated**. It is expected to be an array of DOM elements, but it can be just one element. **It's the only required option**.

• `scrollStart (optional):` the scroll trigger start position. **The default value is "80%"**. Allowed values: "top" / "center" / "bottom" / "X%"" / "Xpx".