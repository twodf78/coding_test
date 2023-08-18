function solution(bridge_length, weight, truck_weights) {
    let totalTimePassed = 1;
    const truckMap = truck_weights.map((x)=>{
        return{
            weight: x,
            time: 0,
        }
    });
    let currentTruckOnBridge = [];
    let totalWeightOnBridge = 0;
    
    const whenTimePassed= (passedTime) =>{
        totalTimePassed+= passedTime;
        for(let j = 0; j< currentTruckOnBridge.length;j++){
            const idx = currentTruckOnBridge[j];
            truckMap[idx].time += passedTime;
            if(truckMap[idx].time > bridge_length){
                const certainTruck = truckMap[currentTruckOnBridge.shift()];
                totalWeightOnBridge -= certainTruck.weight;
                j--;
            }
        }
    }
    
    const putOneTruckOnBridge = (truckIdx, weight) =>{
        currentTruckOnBridge.push(truckIdx);
        totalWeightOnBridge+= weight;
        whenTimePassed(1);
    }
    
    
    
    for(let i = 0; i< truck_weights.length; i++){
        
        const currentTruck = truckMap[i];

        
        if(bridge_length >= currentTruckOnBridge.length && currentTruck.weight + totalWeightOnBridge <= weight){
            
            putOneTruckOnBridge(i, currentTruck.weight);
        }
        else if(currentTruck.weight + totalWeightOnBridge <= weight){
            
            const firstTruck = truckMap[currentTruckOnBridge.shift()];
            const timeNeededToPassTheFirstTruck = bridge_length - firstTruck.time;
            totalWeightOnBridge-= firstTruck.weight;
            whenTimePassed(timeNeededToPassTheFirstTruck);
            putOneTruckOnBridge(i, currentTruck.weight);

        }else if(bridge_length >= currentTruckOnBridge.length){
            
            while(currentTruck.weight + totalWeightOnBridge > weight){
                const firstTruck = truckMap[currentTruckOnBridge.shift()];
                const timeNeededToPassTheFirstTruck = bridge_length - firstTruck.time;
                totalWeightOnBridge-= firstTruck.weight;
                whenTimePassed(timeNeededToPassTheFirstTruck);
            }
            putOneTruckOnBridge(i, currentTruck.weight);
            
        }else{
            
            while(currentTruck.weight + totalWeightOnBridge > weight || bridge_length < currentTruckOnBridge.length){
                const firstTruck = truckMap[currentTruckOnBridge.shift()];
                console.log("firstTruck",firstTruck)
                
                const timeNeededToPassTheFirstTruck = bridge_length - firstTruck.time;
                totalWeightOnBridge-= firstTruck.weight;
                whenTimePassed(timeNeededToPassTheFirstTruck);
            }
            putOneTruckOnBridge(i, currentTruck.weight);
        }
        
    }

    return totalTimePassed + bridge_length - truckMap[currentTruckOnBridge.pop()].time;
}