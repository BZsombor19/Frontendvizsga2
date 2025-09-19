export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {
    let actorId = null;

    for (let i = 0; i < allActors.length; i++) {
        if (allActors[i].name === actorName) {
            actorId = allActors[i].id;
            break;
        }
    }

    if (actorId === null) {
        return [];
    }
    let result = [];

    for (let i = 0; i < allMovies.length; i++) {
        const movie = allMovies[i];

        let haveActor = false;
        for (let j = 0; j < movie.actor_ids.length; j++) {
            if (movie.actor_ids[j] === actorId) {
                haveActor = true;
                break;
            }
        }

        let haveGenre = false;
        for (let k = 0; k < movie.genres.length; k++) {
            if (movie.genres[k] === genre) {
                haveGenre = true;
                break;
            }
        }

        if (haveActor && haveGenre) {
            result.push(movie.title);
        }
    }
    return result;
}