for (let [key, value] of Object.entries(response.data.data.user)) {

    if (key.includes("_")) {

        var i,
            frags = key.split("_");

        for (i = 0; i < frags.length; i++) {

            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }

        key = frags.join("");
    } 
    
    else {

        key = key.charAt(0).toUpperCase() + key.slice(1);
    }

    if (key != "Id") {

        //  dispatch("user/set" + `${key}` + `(${value})`);
        //  dispatch(`set${key}`(`${value}`));
        test = functions["set" + key];
        console.log(test);
        dispatch(test(`${value}`));

    }
}
