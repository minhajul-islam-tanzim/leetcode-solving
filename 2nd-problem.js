const str = "    hellow world"

const array = str.trim().split(" ")

    function lengthOfLastWord(s){
        const last = s[s.length -1]
        const lastLength = last.length
        return lastLength
    }

    const result = lengthOfLastWord(array)
console.log(result)