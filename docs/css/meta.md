# Meta标签的viewport属性

```html
<meta
  name="viewport"
  content="width=device-width,
  user-scalable=no,
  initial-scale=1.0,
  maximum-scale=1.0,
  minimum-scale=1.0"
/>
```
- width=device-width：
    - 告诉浏览器视口的宽度应该等于设备的屏幕宽度。这样可以确保网页内容适应设备屏幕的宽度，不会出现水平滚动条。
- user-scalable=no：
    - 控制用户是否可以通过手势来缩放网页。当设置为 no 时，用户将无法使用手势缩放网页，通常用于禁用用户对网页的缩放。
- initial-scale=1.0：
    - 指定了初始的缩放级别。1.0 表示网页会以正常比例显示，不会进行初始缩放。
- maximum-scale=1.0：
    - 规定了用户可以将网页缩放到的最大级别。如果设置为 1.0，则用户不能放大网页。
- minimum-scale=1.0：
    - 这个属性规定了用户可以将网页缩放到的最小级别。如果设置为 1.0，则用户不能缩小网页。