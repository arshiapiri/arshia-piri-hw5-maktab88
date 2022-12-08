function caseInsensitiveSearch(input1,input2) {
    if (typeof(input1) != 'string' || typeof(input2) != 'string')  {
        return 'not string'
}
// return input1.replace(/input2/gi,'')
return input1.replace(input2,'').trim()
}
console.log(caseInsensitiveSearch("hello world  ","hello"))
