// https://school.programmers.co.kr/learn/courses/30/lessons/42579
// Lv3

function solution(genres, plays) {
    let answer = [];
    let obj = {};
    
    genres.forEach((genre, index) => {
        if (!obj[genre]) {
            obj[genre] = {
                play: 0,
                songs: [],
            };
        }

        obj[genre].play += plays[index];
        obj[genre].songs.push({ index, plays: plays[index] });
    });
    
    const sortedGenres = Object.keys(obj).sort((a,b) => {
        return obj[b].play - obj[a].play; 
    });


    sortedGenres.forEach((_sorted) => {
        var songs = obj[_sorted].songs.sort((a, b) => b.plays - a.plays);
        answer = answer.concat(songs.slice(0, 2).map(song => song.index));
    });

    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));