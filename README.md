# 改造更友善的滿版輪播 fillpage-carousel
起源
- 於有天看到了[悠遊付的宣傳網頁](https://easywallet.easycard.com.tw/?utm_source=easywallet&utm_medium=deeplink&utm_campaign=deeplink)，發現換頁的方式不會觸發瀏覽器更新，切換體驗上滿有效果的。
- 撇該每個頁面的動畫可用CSS3處理之外，有沒有可能用[Bootstrap5的Carousel](https://getbootstrap.com/docs/5.2/components/carousel/)來完成呢?
- 同時符合網頁無障礙，讓鍵盤和滑鼠滾輪也方便操作。
- 因應CSP專案越來越多，不使用jQuery...內聯樣式或語法的方式。

於是用完成了這個簡易版的Demo，也許也可給需要的人參考看看:P