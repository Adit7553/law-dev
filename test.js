s =
"a good   example"
t= s.split(' ')
console.log(t)
t= t.reverse()
let newStr = ""
for(let st of t)
{
    newStr+=st+" ";

}
newStr+='h'
console.log(newStr)

