export let getAllIdeas = () => {
    return (
        fetch("https://mysterious-everglades-33844.herokuapp.com/", {
        method: "GET",
        mode: "cors"
    })
)}