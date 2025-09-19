export function findUniqueGenres(genres) {
    let result = [];

    for (let i = 0; i < genres.length; i++) {
        let movieGenres = genres[i];

        for (let j = 0; j < movieGenres.length; j++) {
            let genre = movieGenres[j];

            if (!result.includes(genre)) {
                result.push(genre);
            }
        }
    }

    return result;
}