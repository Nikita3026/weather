const checkIsDayAtUsersPlace = ():boolean => {
    const date = new Date();
    if(date.getHours() > 7 && date.getHours() < 20) {
        return true;
    }
    return false;
}

export default checkIsDayAtUsersPlace;
