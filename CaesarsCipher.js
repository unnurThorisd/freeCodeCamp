function rot13(str) 
{
    var message = "";
    var alphabet = [];
    for (var i = 0; i < 26; i++)
    {
        alphabet.push(String.fromCharCode(i + 65));
    }
    for (var i = 0; i < str.length; i++)
    {
        var index = alphabet.indexOf(str[i]);
        if (index >= 0)
        //Alphabetic characters
        {
            if (index <= 12)
            //Shift from A to Z
            {
                message += alphabet[alphabet.length - (13 - index)];
            }
            else
            {
                message += alphabet[index - 13];
            }
        }
        else
        //Non-alphabetic characters
        {
            message += str[i];
        }
    }
    return message;
}
  
console.log(rot13("SERR CVMMN!"));
