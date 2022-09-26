function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}



const mondayWork = function (action = 'go to the office') {
    return `This Monday, I will ${action}.`;
}







 const wrapAdjective = function(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}

