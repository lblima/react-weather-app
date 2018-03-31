export default dispatch => next => action => {
    console.log(`ACTION: ${action.type}`, action);

    next(action);
}