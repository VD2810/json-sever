


// function User(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getFullName = this.firstName + ' ' + this.lastName 
// }

// User.prototype.phone = '09876543'
// User.prototype.getPhone = function() {
//     return this.firstName;
// }

// var user1 = new User ('Hoa', 'Vu', 19);
// var user2 = new User ('Lan', 'Hong', 20);
// console.log(user1.getPhone());
// console.log(user2);

// user1.ava = 'good';
// user2.ava = 'ok';


// Ngày giờ

// var date = new Date()

// var year = date.getFullYear()
// var month = date.getMonth() + 1
// var day = date.getDay() + 1
// var hourse = date.getHours()
// var minutes = date.getMinutes()
// var seconds = date.getSeconds()
// var date = date.getDate()

// var fullTime = `${date}/${month}/${year} - ${hourse} : ${minutes} : ${seconds}`;

// console.log(fullTime);


// function run(number) {
//     if (number % 15 === 0) {
//         return 'f8'
//     }
//     else if (number % 3 === 0 ) {
//         return 'f'
//     } else if (number % 5 === 0 ) {
//         return 8
//     }  
// }
// var result = run(15);
// console.log(result)





// var date = 9;
// switch(date) {
//     case 2:
//     console.log('Today is monday');
//     break
//     case 4:
//     console.log('Today is wednesday');
//     break
//     case 5:
//     console.log('Today is thu 5');
//     break
//     case 6:
//     console.log('Today is friday');
//     break
//     default:
//         console.log ('khac')
// }

// Toán 3 ngôi ternary operator


// var prince = {
//     name: 'Javascript',
//     buy: 0,
// }

// var result = prince.buy > 0 ? `${prince.buy} Coin` : 'Free'
// console.log(result)


// var number = 1;
// console.log(number == 5 ? number : 'none');


// function run(a) {
//    var result = Number.isInteger(a) ? a : Math.floor(a); 
//    console.log(result);
// }

// run(4.9)

// var i = 1;
// for (; i <= 20;i++) {

//     console.log(i);
// }

// var testArray = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'API',
// ]

// var i = 0;
// while (i < 1000) {
//     i++;
//     console.log(i)
// }

// Vòng lặp do while

// var i = 0
// var card = false;

// do{
//     i++;
//     console.log('Nạp thẻ thành công lần ' + i);
//     if (card = false) {
//         console.log('Nạp thẻ thành công');
//         card = true;
//     }
// }
// while (card == false && i <= 3) {
//     if (!card == true) {
//         console.log('Nạp thẻ thất bại vui lòng thử lại \!');
//     }
// }


// break và continue

// for (var i = 0; i <= 10; i++) {
//     if (i%2 !== 0) {
//         continue
//     }
//     console.log(i);
// }

// Vòng lặp lồng vào vòng lặp

// var arrayTest = [
//     [1, '2'],
//     [4, '5'],
//     [6, '8'],
// ]

// for (var i = 0; i < arrayTest.length; i++) {
//     for (var iContinue = 0; iContinue < arrayTest[i].length; iContinue++) {
//         console.log(arrayTest[i][iContinue]);
//     }
// }



// for (var i = 0; i < 100; i *= 50) {
//     console.log(i)
// }

// Làm việc với mảng phần 2
// var testArray = [
//     {
//         id: 1,
//         name: 'Javascripts',
//         Coin: 0,
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         Coin: 0,
//     },
//     {
//         id: 1,
//         name: 'HTML',
//         Coin: 0,
//     },
//     {
//         id: 1,
//         name: 'CSS',
//         Coin: 0,
//     },
//     {
//         id: 1,
//         name: 'Javascripts',
//         Coin: 0,
//     },
//     {
//         id: 1,
//         name: 'Javascripts',
//         Coin: 0,
//     },
//     {
//         id: 1,
//         name: 'Javascripts',
//         Coin: 0,
//     },
//     {
//         id: 1,
//         name: 'Javascripts',
//         Coin: 0,
//     },
// ]

// // ForEach
// testArray.forEach(function(course,index) {
//     console.log(course.name)
// })


// // Every
// // phải có điều kiện nó mới run
// console.log(testArray.every(function(course,index) {
//     console.log(index)
//     return course.Coin == 0
// }))

// // Some
// // Some cũng giống như every nhưng every xét tất cả đủ điều kiện mới ra true,
// //còn Some chỉ cần 1 phần tủ đủ điều kiện có thể cho true
// console.log(testArray.some(function(course,index) {
//     return course.Coin =='PHP'
// }))


// // Find
// // Find cũng tựa như find nhưng find duyệt qua tất cả thấy 1 phần tủ đúng sẽ return true, còn 
// // find duyệt qua tất cả thấy 1 thằng đúng sẽ return ra phần tủ đó, có thể áp dụng cho tìm kiếm
// // Nếu kiểm không có nó sẽ trả về không xác định.
// console.log(testArray.find(function(course, index) {
//     return course.name === 'Javascripts';
// }))

//filter
// hoạt động rất giống find nhưng find thì cho ra kết quả đơn thôi. còn Filter có thể cho
// kết quả hợp lệ ví dụ khi filter và xét các phần tủ của mảng thì nó nhận thấy cái nào đúng
// se lập 1 danh sách đưa các kết quả đó vào, nó được ứng dụng cho tìm kiếm tên, số phone,....
// console.log(testArray.filter(function (course, index) {
//     return course.name === 'Javascripts'
// }))



// function checkPositiveNumbers(numbers) {
//    for (var i in numbers) {
//     if (numbers[i] >= 1) {
//         return true
//     } else {
//         return false
//     }
// }
// }

// var result = checkPositiveNumbersname([1, 2, 3]);
// console.log(result)


// bài tập every a
// function checkPositiveNumbers(numbers) {

//     var isTrue = numbers.every(function(number, index) {
//          return number > 0
//      })
//      return isTrue
//  }
//     var result = checkPositiveNumbers([1, 2, 3])
//     console.log(result)

// bài tập some
// function hasFreeCourses(courses) {
//     var courseFree = courses.some(function(free, index) {
//         return free.vnd === 0
//     })
//     return courseFree
// }

// var result = hasFreeCourses ([
//     {
//          name: 'Javascript', 
//          vnd: 1000000
//          },
//     {
//          name: 'PHP', 
//          vnd: 990000
//          },
//     {
//          name: 'HTML, CSS',
//          vnd: 0
//          }
// ])

// console.log (result)

// Bài tập Find
// Tìm thú có chỉ số attack bằng 150 và trả về thú đó trong hàm findAMonsterByAttack đã cho trước (Trả về thú đầu tiên tìm được)
//Trường hợp trong danh sách monsters không có thú phù hợp thì hàm findAMonsterByAttack trả về null

// function findAMonsterByAttack(monsters) {
//  var Ani = monsters.find(function(animal, index) {
//         return animal.attack === 150
//     })
//      return Ani === undefined ? null : Ani
// }

// var result = findAMonsterByAttack([
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180,
//     }])
//     console.log(result)


// reduce
// var numbers = [100, 400, 600 ,800 ,900, 200];
//    var totalNumber = numbers.reduce(function(naccu, nvalue) {
//       return naccu + nvalue
//    })
//    console.log(totalNumber)
// var deptArray = [1, 2, [3, 4], 5, 6, [7, 8]];
//      var flatArray = deptArray.reduce(function(accu, value) {
//         return accu.concat(value)

//      }, [])

//      console.log(flatArray)


//    function run(courses) {
//       var totalCoin = courses.reduce(function(accu, value) {
//         return accu + value.coin
//       }, 0)
//       return totalCoin
//   }

// run([ { name: 'Javascript', coin: 1000 }, { name: 'PHP', coin: 1200 }, { name: 'Dart', coin: 1400 }, { name: 'Ruby', coin: 1600 }, { name: 'ReactJS', coin: 1600 }, { name: 'React-Native', coin: 1800 }, ])






// var courses = [
//    {
//       Id: 1,
//       Name: 'Javascript',
//       Coin: 400
//    },
//    {
//       Id: 2,
//       Name: 'PHP',
//       Coin: 500
//    },
//    {
//       Id: 3,
//       Name: 'RUBY',
//       Coin: 600
//    },
//    {
//       Id: 4,
//       Name: 'React JS',
//       Coin: 900
//    },
// ]
//    var i = 0;
// var totalCoin = courses.reduce(function(accu, value) {
//       i++;
//          console.log(i, accu, value)
//      return accu + value.Coin

//    } )

// console.log(totalCoin)



//    Array.prototype.reduce2 = function(callBack, result) {

//    }

// var number = [4, 6, 8, 9, 4, 5];
//   var total = number.reduce2(function(accu, value) {

//     return accu + value

//   }, 10)

// console.log(total)
// var i = 0;
// function getRequestBodyFromValues(formValues) {
//   return formValues.reduce(function(accu, valueO) {
//     i++;
//    console.table({
//      'quet': i,
//      'luu': accu,
//      'ok': accu[valueO.field] = [valueO.value]
//    })
//    return accu[valueO.field] = [valueO.value]
//   }, {})
// }

// console.log(getRequestBodyFromValues([
//   { field: 'name', value: 'Sơn Đặng' },
//   { field: 'age', value: 18 },
//   { field: 'address', value: 'Hà Nội' },
// ]))

// Includes
/**includes được hiểu là bao gồm dùng để kiểm tra xem cái phần tử mình muốn tìm nó có nằm trong
 * 1 Array hoặc string hay không đây là phương thức chỉ áp dụng với string và array,
 * cú pháp biến chứa.includes(biến cần tìm, position index) ta có thể đánh số index vào số index
 * là vị trí tìm từ ví dụ số 1 là tìm từ index thứ 1 nếu -1 là tổng index trừ cho -1 */


// var course = ['alo', 'ole'];
// var s = 'ole'
// console.log(course.includes(s,1));
// for (var i of course) {
//   console.log(i)
// }
// Bài tập
// function run(input) {
//  return input.includes('F8');
// }



// var result = run('Học lập trình tại F8')
// console.log(result)

// Math Object
/** Math.Pi sẽ trả về 3,14.... là số Pi
 * Math.Round sẽ trả về số làm tròn ví dụ 1,5 thì ra 2 1,4 thì ra 1
 * Math.abs sẽ trả về số tuyệt đối ví dụ giá trị tuyệt đối của 4 là 4 còn trừ 4 vẫn là 4 đơn giản là biến số am thành dương
 * Math.ceil là làm tròn trên ví dụ 4.1 là 5 dù 4.000001 vẫn là 5 trừ trường hợp 4.00000 thì mới là 4 có nghĩa là biến tất cả số thập phân làm tròn số lớn
 * Math.floor giống như ceil nhưng nó làm tròn dưới
 * Math.min lấy ra số nhỏ nhất trong 1 dãy số cho sẵn ví dụ var alo = [10, 40, 90, -120, ....]
 * Math.max lấy ra số lớn nhất trong 1 dãy số cho sẵn
 * Math.random nó sẽ trả về 1 dãy số thập phân nhỏ hơn 1 ngẫu nhiên */

// // ví dụ về random dưới đây là 1 variable random cho ra các số từ 0 đến 10
// var ran = Math.round(Math.random() * 10);
// console.log(ran)

// // ví dụ làm về cường hóa trong game, random ra con số từ 0 đến 100, nếu ra dứoi 10 thì thành công
// var random = Math.floor(Math.random() * 100 );
//         if (random <h2 10) {
//           console.log('Thành Công')
//         };


// Callback 

// function addFunction(function1) {
//   if (typeof function1 === 'function') {
//         function1('Callback được tạo\!')
//   }

// }
// function addCallback(callback1) {
//         console.log('value: ', callback1)
// }


// addFunction(addCallback)

// viết lại cách hoạt động của map (map2)


// Array.prototype.map2 = function(callBackNap2) {
//    var coursesLength = courses.length
//    var coursesArray = [];
//    for (var i = 0; i <coursesLength; ++i) {
//       var result = callBackNap2(this[i], i)
//       coursesArray.push(result);
//    }
//    return coursesArray
// }

// courses = [
//    'Javascript',
//    'PHP',
//    'Java',
// ]
// function testMap2(course, index) {
//    return `<h2> ${course} </h2>`
// }
// var htmls = courses.map2(testMap2);
// console.log(htmls.join(''))

// // Đây là map chuẩn
// var testMap = courses.map(function(course, index) {
//       return `<h2>${course}</h2>`
//       console.log(course)
// })
// console.log(testMap.join(''))

// Viết lại phương thức reduce2 logic

// Array.prototype.reduce2 = function(callBack, result) {
//    i = 0;
//    if (arguments.length < 2) {
//       i = 1
//       result = this[0]
//    }
//    for (; i < number.length; i++) {
//       result  = callBack(result, this[i], i, number)
//    }
//    return console.log(result)
// }

// var number = [1, 2, 3, 4];
// number.reduce2(function(accu, value, index, originValue) {
//    return accu + value
// })
//    var total = number.reduce(function (accu, value) {

//    }, 0)


//    console.log(total)

// viết lại logic foreach2

// Array.prototype.forEach2 = function(callBack) {
//    for (var i in this) {
//       if (this.hasOwnProperty(i)) {
//          callBack(this[i], i, this)
//       }
//    }
// }

// course = ['Javascript', 'Rupy', 'React JS'];
// course.length = 20

// course.forEach2(function(value, index, originArray) {
//       console.log(value, index, originArray)
// })

// viết lại logic phương thức Filter






// course.forEach(function(course, index, origin) {
//    // console.log(index)
// })

//  viet lai filter

// Array.prototype.filter2 = function(callBack) {
//    var proArray = [];
//    for (var i in course) {
//       if (this.hasOwnProperty(i)) {
//       result = callBack(this[i], i, this)
//       if (result) {
//           proArray.push(this[i])
//       }
//    }}
//    return proArray
// }

// Some2

// Array.prototype.some2 = function(callBack) {
//    outPut = false
//       for (var i in this) {
//          if (this.hasOwnProperty(i)) {
//             var result2 = (callBack(this[i], i, this))
//                if (result2) {
//                   outPut = true
//             }
//          }

//       }
//       return outPut
// }

// Every2

// Array.prototype.every2 = function(callBack) {
//    for (var i in this) {
//       if (this.hasOwnProperty(i)) {
//          var result = callBack(this[i], i, this)
//          if (!result) {
//             return false
//          }
//       }
//    }
//    return true
// }

// course = [
//    {
//       Name: 'Javascript',
//       Coin: 950,
//       isFinish: true,
//    },
//    {
//       Name: 'React JS',
//       Coin: 550,
//       isFinish: true,
//    },
//    {
//       Name: 'Vue JS',
//       Coin: 450,
//       isFinish: false,
//    }
// ];

// var result = course.every2(function(value, index, array) {
//    return value.Coin >
// })
// console.log(result)


// console.log(result)

// var filterCourse = course.filter2(function(value, index, proto) {
//       return value.Coin > 600
// })
// console.log(filterCourse)

// var outPut = course.filter(function(value, index) {
//    var total = value.Coin < 600
//    return total

// })
// console.log(outPut)

// let a = Date.now()
// console.log(a)

// -----------------------------------------------------------------

/* HTML DOM 
1. Element: -- ID, ClassName, TagName, CSS selector(thường dùng), HTML colection
2. Attribute
3. Text
*/

// DOM document.getElementById('id')
// var headerNode = document.getElementById('header')
// console.log([headerNode])

// DOM document.getElementsByClassName('class')
// var headerNodeClass = document.getElementsByClassName('header')
// console.log(headerNodeClass)
// for (var i = 0; i < headerNodeClass.length; i++) {
//       console.log(headerNodeClass[i])
// }

// DOM document.getElementsByTagName('tag')
// var hearderTag = document.getElementsByTagName('div')
// console.log(hearderTag)

// DOM document.querySelector('tag')
// var headerNode = document.querySelectorAll('.header');
// console.log(headerNode[0])

// var h2Element = document.getElementsByTagName('h2')
// console.log(h2Element)

// var boxElement = document.querySelector('.box')
// var childrenElements = boxElement.getElementsByClassName('children')


// var listItems1 = document.querySelectorAll('.parent > li')

// var listItems2 = document.querySelectorAll('.parent > ul > li')

// var listItems3 = document.querySelectorAll('.parent > ul li')
// console.log(listItems3.length)

// var h1Element = document.getElementsByTagName('h1')
// console.log(h1Element)
// var testAtribute = 
//                   document.querySelector('h1')
//                   testAtribute.setAttribute('href', 'heading')


// var checkboxNodes = document.querySelectorAll('input')
//                   checkboxNodes.type
// var checkbox1Element = document.querySelector('input')
//                   checkbox1Element.getAttribute('type', 'checkbox')
//                   checkbox1Element.getAttribute('value', '1')
// var checkboxCheckedAndNotDisabled = document.

// var f8LinkElement = document.querySelector('a:nth-child(1)')
// var f8ShortLink = f8LinkElement.getAttribute('href')
//       document.select
// var testText = document.querySelector('h1')
// console.log(testText.textContent)

// var div1 = document.querySelector('div:first-child')
//         div1.innerHTML = '<li> alo </li>'

// var testHtmlInner = document.querySelector('.box')
//             testHtmlInner.innerHTML = '<h1 title= " no_pro"> ALo </h1>'
//             console.log(testHtmlInner.outerHTML)

// var getDiv1 = document.querySelector('.box')
//                   console.log([getDiv1])

// var h1Element = document.querySelector('h1')
// var h1TagName = h1Element.localName
// var h1NextElementSibling = h1Element.nextElementSibling
// console.log([h1NextElementSibling])

// var textNode1 = document.querySelector('div').firstChild
// var textNode2 = document.querySelector('div').lastChild
// var h1Element = document.querySelector('div h1')
// console.log(h1Element)
// var domStyle = document.querySelector('#box').style
// console.log(domStyle)
// var f8LinkElement = document.querySelector('a:first-child')
// var f8ShortLink = f8LinkElement.getAttribute('href')
// var secondA = document.querySelector('a:nth-child(2)').setAttribute('href',f8ShortLink)
// var elementDiv = document.querySelector('div').setAttribute('data-url', f8ShortLink)
// console.log(elementDiv)

// var boxElement = document.querySelector('.box')
//             boxElement.classList.add('red', 'big');
//             console.log(boxElement.classList.contains('red'))

//             setInterval(() => {
//                   boxElement.classList.contains('big')
//             }, 1000)

// var oneClickTest1 = document.querySelector('span')
// var oneClickTest2 = document.querySelector('h1:nth-child(2) span')
// var oneClickTest4 = document.querySelector('h1:nth-child(3) span')
// var oneClickTest = document.querySelectorAll('span')
// for (var i = 0; i < oneClickTest.length; i++) {
//       oneClickTest[i].onclick = function(e) {
//        if(e.target == oneClickTest1) {
//              console.log('Anh')
//        } if (e.target == oneClickTest2) {
//              console.log('Yêu')
//        }if (e.target == oneClickTest4) {
//              console.log('Nhái')
//        }
//       }
// }

// document.onkeydown = function(e) {
//       switch(e.which){
//       case 65:
//             console.log('nut A');
//             break;
//       }
// }

// var aElement = document.querySelectorAll('a')
//   for (var i = 0; i < aElement.length; i++) {
//     aElement[i].onmouseover = function(e) {
//       console.log(e.target.href.)
//     }
//   }


// var unFocus = document.querySelector('ul')

// unFocus.onmousedown = function(e) {
//   e.preventDefault()
// };
//     unFocus.onclick = function(e) {
//       console.log(e.target);
//     }

// var testDiv = document.getElementById('testDiv').onclick = function(e) {
//   e.preventDefault()
//   console.log(e.target.innerText)
// }

// var testButton = document.querySelector('button').onclick = function(e) {
//   e.stopPropagation()
//   console.log('click')
// }
// var testFind = document.querySelectorAll('li')
// for (var i = 0; i < testFind.length; i++) {
//               testFind[i].onmousedown = function(e) {
//                 console.log(e.target.innerText)
//                 e.preventDefault()
//               }
//             }

// var testClick = document.querySelector('button')

// test1 = function() {
//   console.log('ok')
// };
// test2 = function() {
//   console.log('ngon')
// };

// testClick.addEventListener('click', test1);
// testClick.addEventListener('click', test2);
// setTimeout(function() {
//   testClick.removeEventListener('click', test1)
// },5000)

// // Chuyển đổi định dạng dữ liệu JSON sang JS
// var json = '{"name": 1}'
// console.log(JSON.parse(json))
// // Chuyển đổi định dạng dữ liệu JS sang JSON
// console.log(JSON.stringify(json));

// var promise = new Promise(
//     function(resole, reject){
//         reject([
//             'Javascript', 'PHP'
//         ])
//     }
// );
// promise
//     .then(function(s) {
//         console.log(s)
//     })
//     .catch(function(course) {
//         console.log(course)
//     })
//     .finally(function() {
//         console.log('done')
//     })


// function sleep(ms) {
//     return new Promise(function(resole, reject) {
//         setTimeout(resole, ms)
//     })
// }
// sleep(2000)
// .then(function() {
//     console.log(1)
//     return sleep(100)
// })
// .then(function() {
//     console.log(2)
//     return new Promise(function(resole, reject) {
//         reject('co loi')
//     })
// })
// .then(function() {
//     console.log(5)
//     return sleep(2000)
// })
// .catch(function(err) {
//     console.log(err)
// })

// var promiseTest = Promise.reject('Success')
// .catch(function(data){
//     console.log(data)
//     return 1
// })
// .catch(function(data) {
//     console.log(data)
//     return 2
// })
// .catch(function(data) {
//     console.log(data)
//     return 4
// })
// .catch(function(data) {
//     console.log(data)
// })

// var promise1 = new Promise(function(resole, reject) {
//     setTimeout(function() {
//         resole([1])
//     }, 2000)
// })
// var promise2 = new Promise(function(resole, reject) {
//     setTimeout(function() {
//         resole([2,6])
//     }, 4000)
// })

// Promise.all([promise1, promise2])
//     .then(function(data) {
//         var result1 = data[0]
//         var result2 = data[1]
//         console.log(result1.concat(result2))
//     })


// Cách làm bình luận cho web

// var users = [{
//     id: 1,
//     name: 'Kiên Đàm',
// },
// {
//     id: 2,
//     name: 'Sơn Đặng',
// },
// {
//     id: 4,
//     name: 'Jason Yeah',
// }];


// var comments = [{
//     id: 1,
//     user_id: 1,
//     content: 'Shop ơi cái này có size lớn không?'
// },
// {
//     id: 2,
//     user_id: 2,
//     content: 'Có nha em ơi'
// },
// {
//     id: 3,
//     user_id: 1,
//     content: 'Em lấy 1 cái nha?'
// },
// {
//     id: 4,
//     user_id: 2,
//     content: 'OK ku.'
// },
// ];

// function getUsers(usersInfor) {
//     return new Promise(function (resole, reject) {
//         setTimeout(function () {
//             resole(usersInfor)
//         }, 1000)
//     })
// }

// function getComments(commentsInfor) {
//     return new Promise(function (resole, reject) {
//         setTimeout(function () {
//             resole(commentsInfor)
//         }, 1000)
//     })
// }
// getComments(comments)
//     .then(function (commentsInfor) {
//         var commentsInforfill = commentsInfor.map(function (value) {
//             return value.id
//         })
//         return getUsers(commentsInforfill)
//             .then(function (usersInfor) {
//                 var userId = users.filter(function (value) {
//                     return usersInfor.includes(value.id)
//                 })
//                 return {
//                     user: userId,
//                     comments: commentsInfor,
//                 }
//             })
//     })
//     .then(function (dataAll) {
//         var html = '';
//         commentBlock = document.getElementById('comments_box');
//             dataAll.comments.filter(function(value) {
//                 var userFind = dataAll.user.find(function(value2) {
//                     return value2.id === value.user_id
//                 })
//                 html += `<li>${userFind.name}: ${value.content}</li>`
//                 // console.log(userFind)
//             })
//             commentBlock.innerHTML = html
//     })

// Cách lấy dữ liệu từ backend đưa API về dùng fectch để gọi và nhận

// var apibackends = 'https://jsonplaceholder.typicode.com/posts'
// fetch(apibackends)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (testFetch) {
//         var htmlRender = testFetch.map(function (value) {
//             return `<li><p><h2>${value.title}</h2></p> ${value.body}</li>`
//         })
//         document.getElementById('post_box').innerHTML = htmlRender
//     })
//     .catch(function () {
//         console.log('loi')
//     })


// Tự gọi FAKE REST API tự tạo
// var fakeApi = 'http://localhost:3000/Course'
// fetch(fakeApi)
//     .then(function (fakeApi) {
//        return fakeApi.json()
//     })
//     .then(function (Course) {
//         var html = '';
//         var courseOut = Course.map(function(value) {
//             return `Số Báo Danh: ${value.id} <br /> Trường Học: ${value.School}`
//         })
//         html = courseOut
//         document.getElementById('post_box').innerHTML = html
//      })






// Làm chức năng thêm sửa xóa
var linkAPI = 'http://localhost:3000/Course';


function start() {
    getAPI(renderApi)
}

start()

function getAPI(callBack) {
    fetch(linkAPI)
        .then(function (response) {
            return response.json()
        })
        .then(callBack)
}

function renderApi(gotApi) {
    var gotApiRender = gotApi.map(function (value) {
        return `<li>
        <p>
                <b>Tên sinh viên: </b> ${value.StudentName}<br />
                <b>Năm sinh: </b> ${value.BIRTHDAY}<br />
                <b>Tên trường: </b> ${value.SCHOOL}
        </p>
        </li>`
    })
    document.getElementById('list_student').innerHTML = gotApiRender
}

function handleCreate(data, callBackResponse) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    }
    console.log(data)

    fetch(linkAPI, options)
        .then(function (createStudent) {
            return createStudent
        })
}

function handleCreateBtn() {
    var createBtn = document.getElementById('create-btn')
    createBtn.onclick = function () {
        var getFormName = document.querySelector('input[name="name"]').value
        var getFormYear = document.querySelector('input[name="year"]').value
        var formData = {
            name: getFormName,
            year: getFormYear,
        }
        handleCreate(formData)
    }
}
handleCreateBtn()