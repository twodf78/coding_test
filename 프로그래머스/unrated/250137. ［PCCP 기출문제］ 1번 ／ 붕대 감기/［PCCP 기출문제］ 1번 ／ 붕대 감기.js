const healthCurrent = (currentHealth, maxHealth, recoveryAmt) =>{
    return Math.min(maxHealth, currentHealth + recoveryAmt);
}

function solution(bandage, health, attacks) {
    const [skillTime, recoveryPerSecond, additionalRecovery] = bandage;
    let [nextAttackTime, nextAttackAmt] = attacks.at(0); 
    let currentHealth = health;
    let additionalRecoveryTime = 0;
    for(let currentTime = 0; currentTime <= attacks.at(-1)[0]; currentTime++){
        if(currentTime === nextAttackTime){
            currentHealth -= nextAttackAmt;
            additionalRecoveryTime = 0;
            if(currentHealth <= 0) return -1;
            attacks.shift();
            if(attacks.length === 0) break;
            [nextAttackTime, nextAttackAmt] = attacks.at(0); 
        }
        else if(currentHealth < health){
            currentHealth = healthCurrent(currentHealth, health, recoveryPerSecond);
            additionalRecoveryTime++;
            if(additionalRecoveryTime === skillTime){
                currentHealth = healthCurrent(currentHealth, health, additionalRecovery);
                additionalRecoveryTime = 0;
            }
        }else{
            if(currentTime != 0){
                additionalRecoveryTime =additionalRecoveryTime+1 > skillTime ? 0 : additionalRecoveryTime+1;
            }
        }

        
    }
    return currentHealth;
}