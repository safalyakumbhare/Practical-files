// This Program is Under Development Please Do Not refer This Code
var n1 = prompt(parseInt("Enter the first number "));
    
var op = prompt("Enter the Opertion ");
    
var n2 = prompt(parseInt("Enter the Second Number"));
   
var result;
    switch (op)
    {
    case '+':
        result = n1+n2;
        cout<<"result = "<<result;
        break;

        case '-':
        result = n1-n2;
        cout<<"result = "<<result;
        break;

        case '*':
        result = n1*n2;
        cout<<"result = "<<result;
        break;

        case '/':
        result = n1/n2;
        cout<<"result = "<<result;
        
        break;
    default:
        break;
    }