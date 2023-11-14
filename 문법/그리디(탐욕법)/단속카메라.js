// https://school.programmers.co.kr/learn/courses/30/lessons/42884
// Lv 3

function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let cameras = [];
    let lastCamera = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if (route[0] > lastCamera) {
            cameras.push(route[1]); 
            lastCamera = route[1]; 
        }
    }

    return cameras.length;
}

solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]);