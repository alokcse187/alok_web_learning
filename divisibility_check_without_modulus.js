// Divisibility check without % operator where num - number, divisible- by which we have to check divisibility
const divisibleCheck = (num, divisible) => {
    if(num !== 'undefined' && divisible !== 0) {
        while(num <= -divisible || num >= divisible) {
            num = num <= -divisible ? num + divisible : num - divisible;
        }
        return (num === 0);
    }
}
