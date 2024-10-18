# 居中问题
> 已知宽高实现盒子的水平垂直居中，宽高不定实现盒子水平垂直居中。

## 1.如何水平居中？
- 子元素是行内元素 **text-align:center**
- 子元素是块元素且宽度已经设定
    - 1).给子元素添加**margin:0 auto**；*width 不要是 100%*
    - 2).子元素相对父元素绝对定位
      ``` html
      <style>
        .parent {
          background: red;
          position: relative;
        }
        .child {
          background: green;
          width: 200px;
          height: 200px;
          position: absolute;
          left: 50%;
          /* margin-left: -100px;  已知宽度 */
          transform: translate(-50%);
        }
      </style>
      <div class="parent">
        <div class="child"></div>
      </div>
      ``` 
    - 3) 弹性布局
      ```html
      <style>
        .parent {
          background: red;
          display: flex;
          justify-content: center;
        }
        .child {
          background: green;
          width: 200px;
          height: 200px;
        }
      </style>
      <div class="parent">
        <div class="child"></div>
      </div>
      ``` 
    - 4).也可以将子元素转化成`inline-block` 父元素使用`text-align:center`居中。

## 2.如何垂直居中？
- 子元素是行内元素，高度由内容撑开
    - 1).单行，设定元素的`line-height`为父容器高度
    - 2).多行，通过给父元素设置`display:table-cell;vertical-align: middle;`
        
        ```html
        <style>
          .parent {
            height: 300px;
            width: 300px;
            background: green;
            display: table-cell;
            vertical-align: middle;
          }
        </style>
        <div class="parent">
          <span>我很帅</span>
          <span>我很帅</span>
          <span>我很帅</span>
        </div>
        ```
        
- 子元素是块元素，但是子元素没有高度设定
    
    ```html
    <style>
      .parent {
        height: 300px;
        width: 300px;
        background: green;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .child {
        width: 100px;
        background: red;
      }
    </style>
    <div class="parent">
      <div class="child">儿子</div>
    </div>
    ```
    
- 子元素相对父元素绝对定位
    
    ```html
    <style>
      .parent {
        height: 300px;
        width: 300px;
        background: green;
        position: relative;
      }
      .child {
        width: 100px;
        height: 100px;
        background: #fff;
        /* 方案1:
        position: absolute;
        top: 50%;
        margin-top: -50px; */
    
        /* 方案2:
        position: absolute;
        top: 50%;
        transform: translateY(-50%); */
    
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    </style>
    <div class="parent">
      <div class="child"></div>
    </div>
    ```