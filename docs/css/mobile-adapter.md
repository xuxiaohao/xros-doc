# 移动端适配方案有哪些？

## 1.常见的移动端布局方式
- `Flexbox` 布局：适用于移动设备的自适应布局。它可以用于创建灵活的、自适应的网页布局，以适应不同屏幕尺寸和方向。
- Grid 布局：允许将页面划分为行和列，它可以用于在移动设备上创建复杂的网格布局。
- 流式布局（百分比布局）：流式布局使用相对单位（如百分比）来定义元素的宽度和间距，使页面内容能够在不同屏幕尺寸下自动调整。
- `vw/vh` 布局：使用 `vw` 和 `vh` 作为单位，可以实现相对于视窗尺寸的自适应布局，适用于移动设备。
- `rem` 布局：使用 `rem` 单位来定义元素的尺寸，可以实现相对于根元素的自适应布局，适合移动设备。
- 响应式布局（媒体查询）：媒体查询是一种基本的响应式设计技术，允许根据不同的屏幕尺寸和分辨率应用不同的 CSS 规则，以确保页面在移动设备上呈现良好。

## 2.适配方案

### 2.1 媒体查询
媒体查询是一种 CSS3 技术，用于根据设备特性和屏幕尺寸来应用不同的样式和布局。可在移动和 PC 设备上使用同一套代码，减少维护工作。但是需要处理多种设备和屏幕尺寸，可能导致复杂的样式表。

``` html
<link rel="stylesheet" media="(max-width: 500px)" href="mobile.css" />
<link rel="stylesheet" media="(min-width: 980px)" href="pc.css" />
```

``` css
@media screen and (max-width: 768px) {
  /* 在屏幕宽度小于或等于768px时应用的样式 */
}
@media screen and (orientation: landscape) {
  /* 当屏幕为横向时应用的样式 */
}
@media screen and (orientation: portrait) {
  /* 当屏幕为纵向时应用的样式 */
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* 在屏幕宽度在768px到1024px之间应用的样式 */
}
```

### 2.2 rem适配

`rem` 适配的核心思想是根据屏幕分辨率动态调整根元素的字体大小，以便实现 `px` 和 `rem` 之间的转换。设计师会按照设备像素（device pixel）为单位制作设计稿，并使用一个比例来将设计稿中的像素值转换为 `rem` 单位值。
**例如 px2rem 的使用**

- （假设设计稿 750 像素），设置的比例为 75 即会自动转化成 `10rem`
- （假设设计稿 375 像素），设置的比例为 37.5 即也会自动转化成 `10rem`

**设置 font-size 大小即可**

``` js
let docEl = document.documentElement;
function setRemUnit() {
  // 实际的宽度/10， 为1个rem的大小
  let rem = docEl.clientWidth / 10;
  docEl.style.fontSize = rem + "px";
}
setRemUnit();
window.addEventListener("resize", setRemUnit);
```


### 2.3 vm/vh 适配
`vm` 和 `vh` 是相对视口单位，用于响应式设计，可以根据视口的大小来调整元素的大小。与 `rem` 不同，它们不需要根字号的设置，而是直接基于视口大小进行计算。按照设计稿的尺寸，将 `px` 按比例计算转为 `vw` 和 `vh`。例如设计稿 为 `750px`，将其分成 100 份，每一份 7.5px (转化比例 7.5)

``` css
.box {
  width: 375px;
  height: 100px;
  font-size: 40px;
  line-height: 100px;
}
/* 转换后 */
.box {
  width: 50vw;
  height: 13.333333vw;
  font-size: 5.333333vw;
  line-height: 13.333333vw;
}
```

### 2.4 缩放比例
``` js
(function (designWidth) {
  const rootElement = document.documentElement;
  let viewportMeta = document.querySelector("meta[name=viewport]");

  if (!viewportMeta) {
    viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    document.head.appendChild(viewportMeta);
  }

  function setViewportContent() {
    const deviceWidth = rootElement.clientWidth;
    const scale = deviceWidth / designWidth;
    const viewportContent = `width=${deviceWidth}, initial-scale=${scale}, user-scalable=no`;

    viewportMeta.content = viewportContent;
  }

  setViewportContent();

  window.addEventListener("resize", setViewportContent);
})(750);
```