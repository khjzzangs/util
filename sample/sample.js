
/**
 * @description 클래스화 방법 ES6부터 도입
 * @creator hjkim
 * @email   khj20825@gmail.com
 * @Example 
 * var common = new Common();
 * **
 */
class NullUtil {  //클래스 선언
    
    /**
     * 공백도 빈값으로 처리
     * @param {*} val 
     * @Example 
     * var comm = new Common(); 
     * comm.isEmpty("")  // true
     * comm.isEmpty(null)  // true
     * comm.isEmpty(undefined)  // true
     * comm.isEmpty(" ")  // false
     * comm.isEmpty(false)  // true  (개선대상)
     */
    isEmpty(val) { 
        return !val;
    }

    /**
     * 공백을 비어있지 않다고 처리 
     * @param {*} val 
     */
    isBlank(val) { 
        return "";
    }
    /**
     * 
     * @param {*} val 
     */
    trim(val) {
        return "";
    }
    
}


/**
 * 객체화 방법
 * @creator     hjkim
 * @email       khj20825@gmail.com
 * @description 
 * @Example
 * var comm = new Common();
 */
var Common = function() {
   
    this.isEmpty = function(val) {
        return !val;
    }
    this.isBlank = function(val) {
        return !val;
    }
}


