const ds = [
    [1,0],
    [-1,0],
    [0,-1],
    [0,1],
]

const directionMap = new Map();
directionMap.set("S", ds[0]);
directionMap.set("N", ds[1]);
directionMap.set("W", ds[2]);
directionMap.set("E", ds[3]);


function solution(park, routes) {
    var answer = [];
    
    const parkGraph = new Array(park.length).fill().map((x)=>new Array(park[0].length).fill("O"));

    for(let i = 0; i< park.length;i++){
        parkGraph[i] = park[i].split("");
    }
    const isMoveable = (dir, moveNum, startX, startY)=>{
        const direction = directionMap.get(dir);
        let x = startX ;
        let y = startY ;

        for (let i = 0; i< moveNum; i++){
            x += direction[0];
            y += direction[1];

            if( x < 0 || y< 0 || x>= park.length || y >=  park[0].length) return false;
            else if(parkGraph[x][y] === "X" )return false;

        }
        return true;
    }
    const moveS = (dir, moveNum, startX, startY)=>{
        const direction = directionMap.get(dir);
        let x = startX ;
        let y = startY ;

        for (let i = 0; i< moveNum; i++){
            parkGraph[x][y] = "O";

            x += direction[0];
            y += direction[1];

            parkGraph[x][y] = "S";

        }

    }
    const findS = () =>{
        for(let i = 0; i< park.length;i++){
            for(let j = 0; j< park[0].length;j++){
                if (parkGraph[i][j] === "S") return [i,j];
            }            
        }
        return [-1,-1];
    }
    routes.forEach((route)=>{
        let [dir, moveNum]  = route.split(" ");
        moveNum = Number(moveNum);
        
        const [x,y] = findS();
        
        if(x!==-1 && isMoveable(dir, moveNum, x, y) ){
            moveS(dir, moveNum, x, y);

        }

    })
    answer=findS();
    return answer;
}