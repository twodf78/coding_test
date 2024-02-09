function solution(genres, plays) {
    const dict = [];
    const genreTime = {};
    
    for(let i = 0 ;i< genres.length; i++){
        const genre = genres[i];
        const play = plays[i];
        if(!genreTime[genre]){
            genreTime[genre] = play;
        }else{
            genreTime[genre] += play;
        }
        dict.push({
            idx: i,
            genre: genres[i],
            playCount: plays[i],
        })
    }
    
    dict.sort((a, b)=>{
        if(b.genre === a.genre){
            return b.playCount - a.playCount;
        }
        return genreTime[b.genre] - genreTime[a.genre];
    })
    
    const answer = [dict[0].idx];
    let previousGenre = dict[0].genre;
    let genreCount = 1;
    for(let i = 1; i< dict.length; i++){
        const currentGenre = dict[i].genre;
        const currentIdx = dict[i].idx;


        if(currentGenre === previousGenre){
            if(genreCount < 2){
                answer.push(currentIdx);
                genreCount++;
            }
        }else{
            genreCount = 1;
            answer.push(currentIdx);
        }
        previousGenre = currentGenre;
    }

    return answer;
}