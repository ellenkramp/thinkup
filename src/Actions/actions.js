const LOAD_IDEAS_TO_STORE = "LOAD_IDEAS_TO_STORE";


export let loadIdeasToStore = (ideas) => ({
    type: LOAD_IDEAS_TO_STORE,
    payload: { ideas }
});