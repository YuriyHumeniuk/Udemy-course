// Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“German Beno")) – should be “G.B.” (should convert lower case names to upper)
function abbrev_name (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0].charAt(0) + "." + " " + split_names[1].charAt(0) + ".") // charAt[x] grab symbol atX position
    }
        return (split_names[0].charAt(0) + ".") 
}

console.log(abbrev_name("Yuriy Humeniuk"))


