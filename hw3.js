function seprators(num1 = parseInt(100.8)) {
   // let num2= Math.floor(num1).toString().slice(0,2).concat(',')
   //    }
   if (String(num1).length < 4) {
       return num1
   }
   let abc =[String(num1)[0]]
   for(i = 1;i < String(num1).length;i += 3){
      abc.push(',' + String(num1).slice(i,i+3))
   }
   return abc.join('')
}
console.log(seprators())


