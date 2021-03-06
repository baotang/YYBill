// obtained from react native tutorials
import {PixelRatio,Platform} from 'react-native';
import Dimensions from 'Dimensions';
import color from './color';
const Util = {
  OS: Platform.OS,
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  selectedColor:'#53cac3',
  themeColor: '#00beff',
  statusBarHeight: Platform.OS == 'ios' ? 20 : 25,
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navHeight: Platform.OS == 'ios' ? 64 : 69
  },
  color:color,
  guid() {
    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
};
export default Util;