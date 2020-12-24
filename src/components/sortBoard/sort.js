export default class Animate {
    constructor () {
        this._baseData
        this.htmlDOMData = []
      }
   
      init(bar) {
        // 初始化数据
        this._initArr()
   
        // 创建动画
        this._createAnimate(bar)
   
        // 新增事件
        this._addNewAnimate()
      }
   
      _initArr() {
        let data = [];
   
        for(let i = 0; i < 10; i++) {
          let _obj = {
            id: `id${i+1}`,
            name: `第${i+1}位`,
            count: parseInt(Math.random()*800)
          };
          data.push(_obj)
        }
        this._baseData = data;
      }
   
      _createAnimate(bar) {
        // 如果是第一次先创建DOM元素，不是就开始动画
        for(let i = 0; i < 5; i++) {
          if(i === 0) {
            this._firstCreate(bar);
          } else {
            setInterval(() => {
              this._beginAnimate(bar)
            }, i * 3000)
          }
        }
      }
   
      _firstCreate(bar) {
        this._first = false
        // let bar = document.querySelector('#list')
   
        this._baseData.sort((l, n) => n.count - l.count)
        this._baseData.forEach((_data, index) => {
          let li = this._createLiDom(_data, index)
          bar.appendChild(li)
          this.htmlDOMData.push({
            id: _data.id,
            el: li
          })
        })
      }
   
      // 随机生成bar背景颜色
      _createBgColor() {
        return `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`
      }
   
      // 创建单个bar元素
      _createLiDom(data, index) {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let count = document.createElement('span');
   
        name.classList.add('name');
        name.innerText = data.name;
   
        count.classList.add('count');
        count.innerText = data.count;
   
        li.style.opacity = 1;
        li.style.width = `${data.count}px`;
        li.style.background = this._createBgColor();
        li.style.transform = `translateY(${index*40}px)`;
   
        li.append(name, count);
        return li;
      }
   
      // 开始动画的函数
      _beginAnimate(bar) {
        // let bar = document.querySelector('#list');
        let newData = this._reoederBasedata(); // 重排数据
   
        newData.forEach((_l, i) => {
          this.htmlDOMData.some((n, k) => {
            if(_l.id === n.id) {
              n.el.style.width = `${_l.count}px`;
              n.el.style.transform = `translateY(${i*40}px)`;
              n.el.lastElementChild.innerText = _l.count;
            }
   
            if(n.isNew) {
              bar.appendChild(n.el)
              n.isNew = false;
            }
          })
        })
      }
   
      // 重新排序
      _reoederBasedata() {
        this._baseData.forEach(_d => {
          _d.count = parseInt(Math.random()*800);
        })
   
        return this._baseData.sort((l, n) => n.count - l.count);
      }
   
      // 添加新数据的动画
      _addNewAnimate() {
        let num = 0, timer = null;
   
        timer = setInterval(() => {
          num += 1;
          this._addNewData()
   
          if(num > 3) { // 新增到4个之后就清除定时器
            num = 0;
            clearInterval(timer);
          }
        }, 6000);
      }
   
      // 添加新数据
      _addNewData() {
        let len = this._baseData.length;
        let _new = {
          id: `id${len+1}`,
          name: `第${len+1}位`,
          count:  parseInt(Math.random() * 800)
        }
        let li = this._createLiDom(_new, len+1);
   
        this._baseData.push(_new);
        this.htmlDOMData.push({
          id: `id${len+1}`,
          el: li,
          isNew: true
        })
      }
}