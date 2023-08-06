function solution(record) {
    var answer = [];
    const idMatchName = {};
    record.forEach((command) =>{
        const splitArr = command.split(" ");
        const action =splitArr[0];
        const userId = splitArr[1];
        if(action === 'Enter'){
            const nickName = splitArr[2];
            idMatchName[userId] = nickName;
            answer.push(userId + '/님이 들어왔습니다.');
        }else if(action === 'Leave'){
            answer.push(userId + '/님이 나갔습니다.');
        }else if(action === 'Change'){
            const nickName = splitArr[2];
            idMatchName[userId] = nickName;
        }
    })

    return answer.map((x) =>{
        const [id, log] = x.split("/");
        return idMatchName[id] + log;
    });
}