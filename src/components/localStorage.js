const setInLocal=()=>{
    let localStorageData=localStorage.getItem('jsonData')
    if(localStorageData){
        return JSON.parse(localStorage.getItem('jsonData'))
    }else {
        return [];
    }
}
export default setInLocal