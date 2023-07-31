function solution(phone_book) {
    const hashMap = {}
    
    for(const phoneNumber of phone_book) {
        hashMap[phoneNumber] = 1
    }
    
    for(const phoneNumber of phone_book) {
        let temp = ""
        for(let number of phoneNumber) {
            temp += number
            if(hashMap[temp] && temp != phoneNumber) {
                return false
            }
        }
    }
    
    return true
}