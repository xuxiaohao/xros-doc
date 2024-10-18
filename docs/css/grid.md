# 什么是网格布局？
- `Flex` 布局主要用于创建一维布局，即在一个方向上排列元素，通常是水平或垂直排列。
- `Grid` 布局用于创建二维布局，允许在水平和垂直方向上同时控制元素的位置和大小。
- `Flex` 布局适用于一维的、相对简单的布局，而 `Grid` 布局适用于更复杂的二维布局。兼容性方面 `Grid` 布局不如 `flex`，而且学习成本相对较高。

## 1.Grid 布局主要的概念

- Grid 容器：Grid 布局的父元素被称为 Grid 容器。它通过设置` display: grid;`来启用 Grid 布局。
- Grid 项目：Grid 容器内的直接子元素被称为 Grid 项目。

### 2.Grid 容器属性
网格行：Grid 容器中的水平划分线形成了网格行。使用 `grid-template-rows` 属性定义网格行的大小
网格列：Grid 容器中的垂直划分线形成了网格列。使用 `grid-template-columns` 属性定义网格列的大小。

### 2.1 按行和列进行划分
![grid-1](/images/grid/1.png)
``` html
<style>
  .grid-container {
    width: 30vw;
    height: 20vh;
    display: grid;
    /* 没有显式定义的网格的行，列，将自动创建。*/
    /* 
        grid-template-rows: none;
        grid-template-columns: none; 
    */
    /* 1).3行，每行高50px */
    grid-template-rows: 50px 50px 50px;

    /* 2).3行，每行高50px简写*/
    /* grid-template-rows: repeat(3, 50px); */

    /* 3).每列宽100px，可以自动填充 */
    grid-template-columns: repeat(auto-fill, 100px);
  }
  .grid-item {
    border: 1px solid red;
    background: yellow;
    margin: -1px;
  }
</style>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```

也可以按照份数来划分

`fr`分数单位，用于自动分配剩余空间 `fraction`
![grid-2](/images/grid/2.png)

```html
<style>
  .grid-container {
    width: 50vw;
    height: 20vh;
    display: grid;

    /* 1.分成4个一份 */
    /* grid-template-columns: repeat(4, 1fr); */

    /* 2.分成1 : 2 : 1 */
    grid-template-columns: 1fr 2fr 1fr;

    /* 3.限制最小和最大值 */
    grid-template-columns: 1fr minmax(300px, 2fr) 1fr;

    /* 4.左右固定，中间自适应*/
    grid-template-columns: 100px auto 100px;
  }
</style>
```

### 2.2 格与格之间的间距

- `column-gap`：用于设置网格列之间的间距。
- `row-gap`：用于设置网格行之间的间距。
> 用于 Grid 容器上，用于控制网格列和网格行之间的空白间隔。

![grid-3](/images/grid/3.png)

```css
.grid-container {
  width: 50vw;
  height: 40vh;
  display: grid;

  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  /* 列间距 */
  column-gap: 20px;
  /* 行间距 */
  row-gap: 20px;
}
```

### 2.3 Grid 项目的放置顺序

- `row`：默认值。项目会按照从左到右、从上到下的顺序自动放置，先填充完一行再继续下一行。
- `column`：项目会按照从上到下、从左到右的顺序自动放置，先填充完一列再继续下一列，以此类推。

![grid-4](/images/grid/4.png)

``` html
<style>
  .grid-container {
    width: 50vw;
    height: 40vh;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    /* 按照列方式排列 */
    grid-auto-flow: column;
  }
</style>
```

### 2.4 Grid 排列方式

- `justify-items` 和 `align-items` 是用于控制 Grid 布局中网格项目对齐方式的属性

![grid-5](/images/grid/5.png)

``` css
.grid-container {
  width: 50vw;
  height: 80vh;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  grid-auto-flow: column;

  /* 每个网格的居中方式 start | end | center | stretch */
  justify-items: center;
  align-items: center;

  /* 容器的简写 */
  /* place-items: center center; */
}
```

- `justify-content` 和 `align-content` 是用于控制 Grid 布局中网格容器的对齐方式的属性
    ![grid-6](/images/grid/7.png)

``` css
.grid-container {
  width: 50vw;
  height: 80vh;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  grid-auto-flow: column;

  /* 每个网格的居中方式 start | end | center | stretch | space-around | space-between | space-evenly */
  justify-content: space-evenly;
  align-content: center;
}
```

## 3.Grid 项目
- `grid-column-start` | `grid-column-end`
- `grid-row-start` | `grid-row-end`
> 用于指定一个项目在网格中的位置和跨越的行列数。这些属性通常用于定义网格项目的起始和结束位置。

### 3.1 根据网格线摆放元素

![grid-7](/images/grid/7.png)
``` css
<style>
  .grid-container {
    width: 50vw;
    height: 80vh;
    display: grid;
    /* grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr); */
    grid-template-rows: [x1] 1fr [x2] 1fr [x3] 1fr [x4] 1fr [x5];
    grid-template-columns: [y1] 1fr [y2] 1fr [y3] 1fr [y4] 1fr [y5];
  }
  .grid-item {
    border: 1px solid red;
    background: yellow;
    margin: -1px;
    grid-column-start: y2; /* 从第2列开始 */
    grid-column-end: y4; /* 到第4列结束 */
    grid-row-start: x1; /* 从第1行开始 */
    grid-row-end: x3; /* 到第3行结束 */
  }
</style>
```

### 3.2 区域area简写

``` css
<style>
  .grid-container {
    width: 50vw;
    height: 80vh;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-item {
    border: 1px solid red;
    background: yellow;
    margin: -1px;
    /* 复杂写法 */
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;

    /* 简写 */
    grid-column: 2/4;
    grid-row: 1/3;

    /* 直接描述区域 */
    grid-area: 1/2/3/4;
  }
</style>
<div class="grid-container">
  <div class="grid-item">1</div>
</div>
```

### 3.3 Grid项对齐方式
![grid-8](/images/grid/8.png)

``` css
.grid-item {
  border: 1px solid red;
  background: yellow;
  margin: -1px;
  /* 复杂写法 */
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 100px;
  height: 100px;
  grid-column: 2/4;
  grid-row: 1/3;
  grid-area: 1/2/3/4;
  /* 元素自己居中 */
  /* 
      align-self: center;
      justify-self: center; 
  */
  /* 元素自己居中简写 */
  place-self: center center;
}
```