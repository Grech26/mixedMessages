const aleNum = () =>  Math.floor(Math.random() * 5 );

console.log(aleNum());

let message = [];
const firstPart = () => {
    
    let aleaNum = aleNum();
    //console.log(aleaNum)
    switch(aleaNum){
        case 0:    
            message.push('Giving up');
        break;
        case 1:    
            message.push('Finding');
        break;
        case 2:    
            message.push('Expecting');
        break;
        case 3:    
            message.push('Sharing');
        break;
        case 4:    
            message.push('Loving');
        break;
        default:
            console.log('This is not supposed to happen');
        break;   
    }

    return message
}

const SecondPart = () => {
    
    let aleaNum = aleNum();
    //console.log(aleaNum)
    switch(aleaNum){
        case 0:    
            message.push('Everything in the world');
        break;
        case 1:    
            message.push('All you wish');
        break;
        case 2:    
            message.push('Something for somebody else');
        break;
        case 3:    
            message.push('nothing you have or you have gained');
        break;
        case 4:    
            message.push('everyone else but you');
        break;
        default:
            console.log('This is not supposed to happen');
        break;   
    }

    return message
}

const thirdPart = () => {
    
    let aleaNum = aleNum();
    //console.log(aleaNum)
    switch(aleaNum){
        case 0:    
            message.push('Is not gonna make you better');
        break;
        case 1:    
            message.push('Maybe wont give you the happiness');
        break;
        case 2:    
            message.push('Could be not the best option');
        break;
        case 3:    
            message.push('Is not gonna save you');
        break;
        case 4:    
            message.push('Is going to make you feel empty');
        break;
        default:
            console.log('This is not supposed to happen');
        break;   
    }

    return message
}

firstPart();
SecondPart();
thirdPart();
console.log(message.join(' '));
