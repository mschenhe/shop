// 引入mockjs
const Mock = require('mockjs');
var obj = {
  'aa': '11',
  'bb': '22',
  'cc': '33',
  'dd': '44'
};
var pics = {
  'P1': 'http://img61.ddimg.cn/2018/6/11/201806111545175891.jpg',
  'P2': 'http://img62.ddimg.cn/2018/6/11/2018061115311867597.jpg',
  'P3': 'http://img61.ddimg.cn/2018/6/11/201806111727326920.jpg',
  'P4': 'http://img63.ddimg.cn/2018/6/11/2018061115455743326.jpg',
  'P5': 'http://img62.ddimg.cn/2018/6/11/2018061115311867597.jpg'
};
// Mock响应模板
Mock.mock('http://test.com', {
  "user|1": [{
    'pic|3': pics,
    'list': [{
      'name': '礼品卡券',
      'list': [
          {
        'img': 'https://imgqn3.fruitday.com/images/product_pic/3877/1/1-270x270-3877-BXDY6KCU.jpg',
        'name': '欢乐时光水果礼篮',
        'price': '188.00/1份',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
          }, {
        'img': 'https://imgqn4.fruitday.com/images/product_pic/2114/1/1-270x270-2114-226C8S26.jpg',
        'name': '真心祝福水果篮',
        'price': '358.00/礼篮',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn1.fruitday.com/images/product_pic/2109/1/1-270x270-2109-SDK5WUW8.jpg',
        'name': '深情厚意水果礼篮',
        'price': '580.00/礼篮',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn3.fruitday.com/images/product_pic/430/1/1-270x270-430-9RBRWTU9.jpg',
        'name': '关怀备至礼盒',
        'price': '198.00/1盒',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn2.fruitday.com/images/product_pic/435/1/1-270x270-435-8829CP99.jpg',
        'name': '万事如意礼盒',
        'price': '198.00/1盒',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn2.fruitday.com/images/product_pic/3356/1/1-270x270-3356-T4P73D4B.jpg',
        'name': '与众不同礼盒',
        'price': '168.00/1盒',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }, {
      'name': '家庭量版',
      'list': [{
        'img': 'https://imgqn4.fruitday.com/images/product_pic/2169/1/1-270x270-2169-YR8PTW67.jpg',
        'name': '静宁富士苹果',
        'price': '59.80/2.5kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn1.fruitday.com/images/product_pic/3434/1/1-270x270-3434-HU23DTCC.jpg',
        'name': '阿根廷凤尾虾仁',
        'price': '49.80/250kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn1.fruitday.com/images/product_pic/2681/1/1-270x270-2681-P3TKD2R8.jpg',
        'name': '厄瓜多尔白虾',
        'price': '198.00/200g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn3.fruitday.com/images/product_pic/105/1/1-270x270-105-75CUX8FS.jpg',
        'name': '澳大利亚无籽红提',
        'price': '59.80/1kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn1.fruitday.com/images/product_pic/4069/1/1-270x270-4069-CSRFHUK6.jpg',
        'name': '禾煜和田贡枣',
        'price': '51.80/800g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }, {
      'name': '全球鲜果',
      'list': [{
        'img': 'https://imgqn4.fruitday.com/images/product_pic/5633/1/1-270x270-5633-5D17YSRH.jpg',
        'name': '澳洲初夏蜜桔',
        'price': '49.90/6个',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn3.fruitday.com/images/product_pic/2383/1/1-270x270-2383-UKTRW3W2.jpg',
        'name': '妃子笑荔枝',
        'price': '49.90/2kg+500g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn4.fruitday.com/images/product_pic/27/1/1-270x270-27-DRXW9AYR.jpg',
        'name': '海南小台农芒果',
        'price': '29.90/1kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn1.fruitday.com/images/product_pic/5/1/1-270x270-5-HRHCPAH9.jpg',
        'name': '越南红心火龙果（小）',
        'price': '29.90/1kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn1.fruitday.com/images/product_pic/19/1/1-270x270-19-YATB7835.jpg',
        'name': '进口香蕉',
        'price': '16.90/根',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }, {
      'name': '生鲜美食',
      'list': [{
        'img': 'https://imgqn3.fruitday.com/images/product_pic/2761/1/1-270x270-2761-RPCT61D9.jpg',
        'name': '厦门紫红茄',
        'price': '9.80/300g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn4.fruitday.com/images/product_pic/4844/1/1-270x270-4844-TFPS61UD.jpg',
        'name': '鲜活生态甲鱼',
        'price': '380.00/1-1.15kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn4.fruitday.com/images/product_pic/4844/1/1-270x270-4844-TFPS61UD.jpg',
        'name': '鲜活生态甲鱼',
        'price': '380.00/1-1.15kg',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn4.fruitday.com/images/product_pic/4252/1/1-270x270-4252-TRP2XKRF.jpg',
        'name': '澳洲草饲原切西冷牛排',
        'price': '39.90/110g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn2.fruitday.com/images/product_pic/293/1/1-270x270-293-K2TPBUPC.jpg',
        'name': '澳洲和牛眼肉牛排（M9级）',
        'price': '358.00/200g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn3.fruitday.com/images/product_pic/283/1/1-270x270-283-312H31Y2.jpg',
        'name': '金华芋艿',
        'price': '8.90/300g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn3.fruitday.com/images/product_pic/185/1/1-270x270-185-XDFCXH6K.jpg',
        'name': '阿根廷雪花鲳鱼',
        'price': '29.90/300-400g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'img': 'https://imgqn4.fruitday.com/images/product_pic/106/1/1-270x270-106-W65K5SA2.jpg',
        'name': '山东黄心大土豆 ',
        'price': '3.90/500g',
        'born':'海南海口',
        'critis':{
            'c1':'好吃',
            'c2':'不错',
            'c3':'很看好啊'
        },
        'crContent':{
          'name':'***仰望星空',
          'content':  '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }]
  }]

});
Mock.mock('http://regist.com', function (options) {
  console.log(options);
  return Mock.mock({
    'user|1': {
      'user': 123
    }
  })

});
Mock.mock('http://login.com',function(options){
    console.log(options);
    return Mock.mock({
        'user|1':{
            'user':123
        }
    })
})
/*"user|1-3": [{   // 随机生成1到3个数组元素
        'name': '@book',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    },{
        'gf': '@cname'
    }]*/
