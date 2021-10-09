class LocalStorageService  {

    set = (key ="" , value="", expires="") =>{
        window.localStorage.setItem(key, value);
        window.localStorage.setItem(key + "_expiry", expires);

    }

    get = (key) =>{
        return window.localStorage.getItem(key);


    }

    remove = (key) =>{
        window.localStorage.removeItem(key);
        window.localStorage.removeItem(key + "_expiry");
    } 

}

export default new LocalStorageService();