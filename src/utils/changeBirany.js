// //十进制转其他
// var x = 110;
// alert(x);
// alert(x.toString(8));
// alert(x.toString(32));
// alert(x.toString(16));
// //其他转十进制
// var x = '110';
// alert(parseInt(x, 2));
// alert(parseInt(x, 8));
// alert(parseInt(x, 16));
// //其他转其他
// //先用parseInt转成十进制再用toString转到目标进制
// alert(String.fromCharCode(parseInt(141, 8)))
// alert(parseInt('ff', 16).toString(2));


export const ChangeBirany = options => {
    // console.log(options)
    let result = ''
    const {old, num, radix} = options
    if (old === 10) {
        // console.log(1)
        result = num.toString(radix)
    } else {
        // console.log(2)
        result = parseInt(num, old).toString(radix)
    }
    return {result: result, radix: radix}
}


