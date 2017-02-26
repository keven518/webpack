import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
	const NUM = 'webpack 打包成功！';
	alert(NUM);
	var dom = document.getElementById("app");
	var layer = new Layer;
	dom.innerHTML = layer.tplHTML+layer.tpl({
		name: '柯文',
		arr: ['apple','sunsing','oppo']
	});
}

new App()