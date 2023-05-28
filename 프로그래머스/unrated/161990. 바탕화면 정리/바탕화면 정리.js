function solution(wallpaper) {
    var answer = [];
    let xmax = 0, ymax = 0, xmin = wallpaper[0].length, ymin = wallpaper.length;
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                if(i<ymin) ymin = i;
                if(i>ymax) ymax = i;
                if(j<xmin) xmin = j;
                if(j>xmax) xmax = j;
            }
        }
    }
    return [ymin, xmin, ymax+1, xmax+1];
}