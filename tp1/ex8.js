const wait = ms => new Promise(res => setTimeout(res, ms));
const telechargementSimule = async () => {
    console.log("Début ");

    await wait(2000); 

    console.log("Fin ");
};
telechargementSimule();
