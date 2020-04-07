# Cookie-Cutter

 * This is a Javascript Class to work with Cookies.
 * You Must create a new CookieCutter Object for it to work properly
 * Example const cookieCutter = new CookieCutter() // new Keyword is important
***
### Available Functions:
  - get
    -- Parameter : cookie_key
    -- return: cookie_value
  - getKeyByValue
    -- Parameter : cookie_value
    -- return: cookie_key
  - getByKey
    -- Parameter : cookie_key
    -- return: cookie_object (object contain both key and value)
  - getValueByIndex
    -- Parameter : cookie_array_index
    -- return: cookie_value
  - getKeyByIndex
    -- Parameter : cookie_array_index
    -- return: cookie_key
  - getByIndex
    -- Parameter : cookie_array_index
    -- return: cookie_object (object contain both key and value)
  - getIndex
    -- Parameter : cookie_key
    -- return: cookie_array_index
  - set
    -- Parameter : cookie_key, cookie_value, cookie_expire_time (default: current, cookie_path (default: /)
  - update
    -- Parameter : cookie_key, cookie_value, cookie_expire_time (default: current, cookie_path (default: /)
  - delete
    -- Parameter : cookie_key

***
**NOTE**:  All get function return false (boolean) if data not found.
