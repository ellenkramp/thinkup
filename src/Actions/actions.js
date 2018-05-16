const LOAD_IDEAS_TO_STORE = "LOAD_IDEAS_TO_STORE";
const SEARCH = "SEARCH";

export let loadIdeasToStore = (ideas) => ({
    type: LOAD_IDEAS_TO_STORE,
    payload: { ideas }
});

export let search = (value) => ({
    type: SEARCH, 
    payload: value
});