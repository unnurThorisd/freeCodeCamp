function telephoneCheck(str) 
{
    var bracketOpen = str.indexOf("(");
    var bracketClose = str.indexOf(")");

    //Check for valid brackets
    if ((bracketClose != bracketOpen + 4) && !(bracketOpen == -1 && bracketClose == -1))
    {
        return false;
    }
    if ((bracketClose == bracketOpen + 4) && bracketOpen == -1)
    {
        return false;
    }

    var numberPattern = /\d/g;
    var numbers = str.match(numberPattern);

    if (numbers.length != 10 && (numbers.length == 11 && str[0] != 1))
    //Validate country code
    {
        return false;
    }
    var valid = /^[0-9]?\s?\(?[0-9][0-9][0-9]\)?\s?\-?[0-9][0-9][0-9]\s?\-?[0-9][0-9][0-9][0-9]\b/;
    return valid.test(str);
}
  
telephoneCheck("1 555-555-5555");