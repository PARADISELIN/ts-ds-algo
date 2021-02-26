// https://leetcode-cn.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const minus = nums[i]
    const diff = target - minus
    if (map.has(diff)) {
      return [map.get(diff) as number, i]
    }
    map.set(minus, i)
  }
  return []
}
