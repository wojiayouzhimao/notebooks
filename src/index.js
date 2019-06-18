import _ from 'lodash';
if (process.env.NODE_ENV) {
    console.log(process.env.NODE_ENV)
}
function component () {
    let element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'webpack113'], ' ')
    return element
}
let element = component()
document.body.appendChild(element)