# 什么是 IFC 及理解？

## 1.IFC 含义

- IFC(inline Formating Context)叫做“内联格式化上下文”
- 内部的元素从包含块的顶部开始，从左至右（默认）排列成一行形成的一个矩形盒子叫做 **line box**；

## 2.如何触发 IFC？

> 块级元素中仅包含内联级别元素

## 3.IFC 布局规则

- **子元素水平方向横向排列，并且垂直方向起点为元素顶部：** 在 IFC 中，行内元素会从左到右水平排列，并且它们的垂直对齐起点位于元素的顶部。
- **子元素只会计算横向样式空间【padding、border、margin】，垂直方向样式空间不会被计算**：在 IFC 中，只有水平方向的样式空间（如内边距、边框、外边距）会被计算，而垂直方向的这些样式不会影响元素的布局。
- **在垂直方向上，子元素会以不同形式来对齐（vertical-align）**：IFC 中的行内元素可以通过`vertical-align`属性在垂直方向上以不同的方式对齐，如基线对齐、顶部对齐、中间对齐等。
- **能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）**：每一行中的行内元素会被包含在一个矩形区域内，该区域称为行框。行框的宽度由包含块和其中的浮动元素来决定。
- **IFC 中的`line box`一般左右边贴紧其包含块，但 float 元素会优先排列**：一般情况下，行框的左右边界会紧贴着包含块的左右边界，但浮动元素可能会导致行框的宽度被浮动元素占据。
- **IFC 中的`line box`高度由 CSS 行高计算规则来确定，同个`IFC`下的多个`line box`高度可能会不同**：每个行框的高度由 CSS 的行高计算规则决定，这可以包括字体大小、行高属性等。同一个 IFC 下的多个行框的高度可能会因内容不同而不同。
- **当 `inline boxes`的总宽度少于包含它们的`line box`时，其水平渲染规则由 `text-align` 属性值来决定**：如果一行上的行内元素总宽度小于行框的宽度，那么`text-align`属性可以用于控制这些行内元素在行框内的水平对齐方式，如左对齐、右对齐、居中对齐等。
- **当一个`inline box`超过父元素的宽度时**，它会被分割成多个`boxes`，这些`boxes`分布在多个`line box`中。

## 4.IFC 的作用

- 当一个块要在环境中水平居中时，设置其为`inline-block`则会在外层产生 IFC，通过`text-align`则可以使其水平居中。
```html
<style>
  .parent {
    width: 300px;
    height: 300px;
    background: green;
    text-align: center;
  }
  .child {
    width: 100px;
    height: 100px;
    background: pink;
    display: inline-block;
  }
</style>
<div class="parent">
  <div class="child"></div>
</div>
```
    
- 创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其`vertical-align:middle`，其他行内元素则可以在此父元素下垂直居中。
    
``` html 
<style>
  .icon {
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }
  i {
    line-height: 100px;
    font-size: 40px;
    vertical-align: middle;
  }
</style>
<div class="icon">
  <i>🍵</i>
  <span>hello</span>
</div>
```