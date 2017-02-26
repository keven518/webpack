import './layer.less';
import tpl from './layer.tpl';
import tplHTML from './layer.html';

function layer () {
  return {
    name: 'layer',
    tpl: tpl,
    tplHTML: tplHTML
  };
}

export default layer;