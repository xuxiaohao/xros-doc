# 盒模型

``` html
<div class="content"></div>
<style>
  .content {
    background: red;
    width: 500px;
    height: 500px;
    border: 10px solid yellow;
    border-top: 50px;
    padding: 50px 40px 30px 20px;
    margin: 50px 40px 30px 20px;
  }
</style>
```
- box-sizing: content-box（内容框模型）

```
宽度 = width(500px) + padding-left(20px) + padding-right(40px) + border-left(10px) + border-right(10px) = 580px
高度 = height(500px) + padding-top(50px) + padding-bottom(30px) + border-top(不生效) + border-bottom(10px) = 590px
```

- box-sizing: border-box（边框框模型）

```

宽度 = witdh(500px)
高度 = height(500px)
```