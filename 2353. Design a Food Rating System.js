/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foodRatings = {}
    this.topRatings = {}
    let n = foods.length
    for(let i=0; i<n; i++) {
        this.foodRatings[foods[i]] = [ratings[i], cuisines[i]]
        if(!this.topRatings[cuisines[i]] || ratings[i]>this.topRatings[cuisines[i]][0]
        || (ratings[i]===this.topRatings[cuisines[i]][0] 
        && this.topRatings[cuisines[i]][1].localeCompare(foods[i])===1)) {
            this.topRatings[cuisines[i]] = [ratings[i], foods[i]]
        }
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    this.foodRatings[food][0] = newRating
    if(newRating >= this.topRatings[this.foodRatings[food][1]][0] 
    || food===this.topRatings[this.foodRatings[food][1]][1]) {
    this.topRatings[this.foodRatings[food][1]] = [newRating, food]
        if(newRating > this.topRatings[this.foodRatings[food][1]][0] 
        && food===this.topRatings[this.foodRatings[food][1]][1])
            return null
        for(const key in this.foodRatings) {
            if(this.foodRatings[key][1]===this.foodRatings[food][1] 
            && (this.foodRatings[key][0] > this.topRatings[this.foodRatings[food][1]][0]
            || (this.foodRatings[key][0]===this.topRatings[this.foodRatings[food][1]][0] 
            && this.topRatings[this.foodRatings[food][1]][1].localeCompare(key)===1))) {
                this.topRatings[this.foodRatings[food][1]] = [this.foodRatings[key][0], key]
                food = key
            }
        }
    }
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    return this.topRatings[cuisine][1]
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */