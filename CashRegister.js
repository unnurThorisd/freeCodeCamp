function checkCashRegister(price, cash, cid) 
{
    var currency = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
    
    var out = {
        status: "", 
        change: []
    };

    var changeArr = [];     //Change array - 0 values excluded
    var allChange = [];     //Change array - 0 values included
    var changeDue = cash - price;
    
    var cidCopy = [];
    for (var i = 0; i < cid.length; i++)
    {
        cidCopy.push([cid[i][0], cid[i][1]]);
    }
    
    for (var i = cid.length - 1; i >= 0; i--)
    //Check for each type of coin
    {
        var numberOfCoins = 0;
        while (cid[i][1] > 0)
        //While there are coins in the drawer
        {
        if (changeDue.toFixed(2) - currency[i][1].toFixed(2) < 0)
        //Break if the coin we're checking is larger than the change due
        {
            break;
        }
        changeDue = changeDue.toFixed(2) - currency[i][1].toFixed(2);       //Subtract from the change due
        cid[i][1] = cid[i][1].toFixed(2) - currency[i][1].toFixed(2);       //Remove coin from drawer
        numberOfCoins++;
        }

        if (numberOfCoins > 0)
        {
            changeArr.push([currency[i][0], currency[i][1] * numberOfCoins]);
        }
        allChange.unshift([currency[i][0], currency[i][1] * numberOfCoins]);
    }

    //Check if the amount of cash in drawer is the same as the change due
    var closed = true;
    for (var i = 0; i < cidCopy.length; i++)
    {
        if (cidCopy[i][1] != allChange[i][1])
        {
        closed = false;
        break;
        }
    }
    
    if (changeDue > 0)
    {
        out.status = "INSUFFICIENT_FUNDS";
    }
    else if (closed)
    {
        out.status = "CLOSED";
        out.change = cidCopy;
    }
    else
    { 
        out.status = "OPEN";
        out.change = changeArr;
    }
    return out;
}
    
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
