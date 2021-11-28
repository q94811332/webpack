import x from './x.js'
import png from './assets/Koala.jpg'
console.log(x);
console.log('hi');

const div = document.getElementById('app1')
div.innerHTML = `
    <img src="${png}"></img>
`

const button = document.createElement('button')
button.innerHTML = "懒加载"
button.onclick = () => {
    const promise =
        import ('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log("模块加载错误");
    })
}

div.appendChild(button)