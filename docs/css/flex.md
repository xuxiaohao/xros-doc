# 什么是弹性布局？

## 1.什么是弹性布局？解决了什么问题？

>弹性布局，也称为弹性盒子布局（Flexible Box Layout）或 Flex 布局，是一种用于网页布局的 CSS 布局模型。它的主要目的是为了更方便地对容器中的子元素进行排列，以适应不同屏幕大小和设备的变化。

解决问题：传统的浮动（`float`）布局中，要将多个元素水平放在一行时，需要考虑各个元素的宽度、内边距（`padding`）、边框（`border`）、外边距（`margin`）等属性。这些属性的计算和管理变得相当复杂。
## 2.弹性布局主要的概念和属性

容器（Container）：容器是一个包含一组子元素的元素。在弹性布局中，容器的属性和规则会影响子元素的排列方式。
弹性项（Flex Item）：弹性项是容器中的子元素，它们根据容器的属性来进行排列。
主轴和交叉轴：每个弹性容器都有一个主轴和一个交叉轴。主轴通常是容器的水平方向或垂直方向，而交叉轴则是与主轴垂直的方向。（子元素排列的轴叫主轴，默认情况主轴从左到右水平的）

## 3.容器的属性

- `display` 属性 (使用弹性布局，都要先让元素变为弹性布局的容器)
  - 如果希望弹性布局的父元素独占布局一行，就要设置元素的 `display` 属性为 `flex`
  - 如果希望弹性布局的父元素显示为行内元素的特征，与其它元素在同一行，就要设置元素的 `display` 属性为 `inline-flex`
- 转化为弹性布局，需要将容器设置 `display:flex` / `display:inline-flex`
- `flex-direction` 属性 (更改主轴的方向)
    ![flex-1](/images/flex/flex-1.png)
- `flex-wrap` 属性 （弹性项是否换行）
    ![flex-2](/images/flex/flex-2.png)
- `flex-flow` 属性 （`flex-direction` + `flex-wrap` 简写）
- `justify-content` 属性（主轴上的对其方式）
    ![flex-3](/images/flex/flex-3.png)
- `align-items` 属性（交叉轴上的对其方式）
    ![flex-4](/images/flex/flex-4.png)

## 4.弹性项属性
>除了可以对容器设置属性外，还可以对弹性项设置属性。
- `order` 属性（定义弹性项的排序顺序，为整数数字，无需单位，默认值为 0，越小越靠近起点）

  ``` html
  <div class="c1">
    <div class="box" style="order: 1">1</div>
    <div class="box" style="order: 3">2</div>
    <div class="box" style="order: 0">3</div>
  </div>
  ```
  ![flex-5](/images/flex/flex-5.png)
- `flex-grow` 属性 (定义弹性项的放大比例，值为数字，无需单位，默认值不放大，取值越大占据空间越多)
  ![flex-6](/images/flex/flex-6.png)  
- `flex-shrink` 属性 (如果容器空间不足，弹性项可以缩小，定义弹性项的缩小比例，默认值 1， 空间不足则等比例缩小，改为 0，表示不缩小
    ![flex-7](/images/flex/flex-7.png) 
- `algin-self` 属性 (定义某一个弹性项在交叉轴上的对齐方式)
    ![flex-8](/images/flex/flex-8.png)