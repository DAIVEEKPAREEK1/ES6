class custom_localStorage {
  constructor() {
    this.map = new Map()
  }
  setItem(key, value) {
    if (typeof value != "string") {
      return (this.map.set(key, JSON.stringify(value)))
    }
    else {
      return (this.map.set(key, value))
    }
  }
  getItem(key) {
    return (this.map.get(key))
  }
  clear() {
    return (this.map.clear())
  }
  removeItem(key) {
    return (this.key.delete(key))
  }
  length() {
    return (this.map.size)
  }
}
let first = new custom_localStorage()
first.setItem("firstKey", {
  fname: "daiveek",
  lname: "pareek"
})
first.setItem("firstKey", {
  fname: "ram",
  lname: "pareek"
})
console.log(first);