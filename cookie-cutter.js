function CookieCutter() {
  this.cookieString = document.cookie;
  const tempSplitArray = this.cookieString.split(";");
  this.cookies = [];
  tempSplitArray.forEach(function (singleCookie) {
    const tempSingleCookieSplit = singleCookie.trim().split("=");
    this.cookies.push({
      key: tempSingleCookieSplit[0],
      value: tempSingleCookieSplit[1] || "",
    });
  }.bind(this));

  this.get = function (key) {
    let valueFound = false;
    this.cookies.forEach(function (singleCookie) {
      if (singleCookie.key === key) {
        valueFound = singleCookie.value;
        return false;
      }
    });
    return valueFound;
  };

  this.getKeyByValue = function (value) {
    let keyFound = false;
    this.cookies.forEach(function (singleCookie) {
      if (singleCookie.value === value) {
        keyFound = singleCookie.key;
        return false;
      }
    });
    return keyFound;
  };

  this.getByKey = function (key) {
    let cookieFound = false;
    this.cookies.forEach(function (singleCookie) {
      if (singleCookie.value === key) {
        cookieFound = singleCookie;
        return false;
      }
    });
    return cookieFound;
  };

  this.getValueByIndex = function (index) {
    return (this.cookies[index] && this.cookies[index].value) || false;
  };

  this.getKeyByIndex = function (index) {
    return (this.cookies[index] && this.cookies[index].key) || false;
  };

  this.getByIndex = function (index) {
    return this.cookies[index] || false;
  };

  this.getIndex = function (key) {
    let indexFound = false;
    this.cookies.forEach(function (singleCookie, index) {
      if (singleCookie.key === key) {
        indexFound = index;
        return false;
      }
    });
    return indexFound;
  };

  this.set = function (key, value, expires = "", path = "/") {
    let indexFound = this.getIndex(key);
    document.cookie = `${key}=${value}; expires=${expires}; path=${path}`;
    if (indexFound !== false) {
      this.cookies[indexFound].value = value;
    } else {
      this.cookies.push({ key, value });
    }
  };

  this.update = function (key, value, expires = "", path = "/") {
    this.set(key, value, (expires = ""), (path = "/"));
  };

  this.delete = function (key) {
    let indexFound = this.getIndex(key);
    document.cookie = `${key}=; expires=${new Date(-1)} path=/`;
    if (indexFound !== false) {
      this.cookies.splice(indexFound, 1);
    }
  };
}
