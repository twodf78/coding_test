function solution(routes) {
    let ans = 0;
    routes.sort((a, b) => a[1] - b[1]);
    while(routes.length){
        routes = routes.filter((route) => route[0] > routes[0][1]);
        ans++;
    }
    return ans;
}