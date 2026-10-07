var twoSum = function(numss, target) {
    const map = new Map();
    for (let i = 0; i <nums.length; i++) {
        const current = nums[i];
        const need = target - current;
        
        if (map.has(need)) {
            return [map.get(need), i];
        }
        
        map.set(current, i);
    }
}