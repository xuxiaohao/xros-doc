# 如何实现三列布局
> 左右定宽，中间自适应

## 1. 利用浮动实现
```html
<style>
  .left,
  .right {
    width: 200px;
    background: red;
    height: 100px;
  }
  .left {
    float: left;
  }
  /* 预留出左右浮动的大小 */
  .center {
    float: left;
    background: green;
    height: 200px;
    width: calc(100% - 400px);
  }
  .right {
    float: left;
  }
</style>
<div class="container">
  <div class="left"></div>
  <div class="center"></div>
  <div class="right"></div>
</div>
```
## 2. 利用浮动 + BFC
``` html 
<style>
  .left,
  .right {
    width: 200px;
    background: red;
    height: 100px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  /* 利用bfc */
  .center {
    background: green;
    height: 200px;
    overflow: hidden;
  }
</style>
<div class="container">
  <!-- 左浮动元素会尽量靠近容器的左侧边缘，右浮动元素会尽量靠近容器的右侧边缘 -->
  <div class="left"></div>
  <div class="right"></div>
  <!-- 剩余的空间留给center，给center创建BFC，不进入left和right -->
  <div class="center"></div>
</div>
```
## 3. 圣杯布局

圣杯布局要求三列都被包装在一个容器内，中央列在 HTML 文档中首先出现（重要的东西放在文档流前面可以优先渲染），使用相对定位和负边距来进行实现。如果中央列不在首位，可能会导致搜索引擎不正确地解析网页，从而影响 SEO。

```html
<style>
  .left,
  .right {
    width: 200px;
    background: red;
    height: 200px;
  }
  .center {
    width: 100%;
    height: 400px;
    background: green;
  }
  .left {
    background: yellow;
  }
  /* 第一步 全部浮动（原则在一行） */
  .left,
  .right,
  .center {
    float: left;
  }

  /* 第二步 留出左右两边距离*/
  .container {
    padding: 0 200px;
  }
  /* 第三步 
        - 左边移动到center的最左边，并且相对自已向左移动
        - center占满了，我就将right移动进去,并且相对自己在移出来
    */
  .left {
    margin-left: -100%;
    position: relative;
    left: -200px;
  }
  .right {
    margin-left: -200px;
    position: relative;
    right: -200px;
  }
</style>
<div class="container">
  <div class="center"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```
## 4. 双飞翼布局
类似于圣杯布局。与圣杯布局不同，双飞翼布局通过使用浮动来实现，而不是相对定位和负边距。 双飞翼布局相对来说比较简单，理解和实现起来更加容易。

```html
<style>
  .left,
  .right {
    width: 200px;
    background: red;
    height: 200px;
  }
  .center {
    width: 100%;
    height: 400px;
    background: pink;
  }
  .left {
    background: yellow;
  }
  /* 第一步 全部浮动（原则在一行） */
  .left,
  .right,
  .center {
    float: left;
  }

  /* 第二步 
        - 左边移动到center的最左边
        - center占满了，我就将right移动进去
    */
  .left {
    margin-left: -100%;
  }
  .right {
    margin-left: -200px;
  }

  /* 第三步 给内部盒子增加外边距*/
  .center-inner {
    background: green;
    height: 400px;
    margin: 0 200px;
  }
</style>
<div class="container">
  <div class="center">
    <div class="center-inner"></div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```
## 5. flex布局
``` css
.container{
  display:flex;
  align-items: stretch;
}
.center{
  flex:1
}
```