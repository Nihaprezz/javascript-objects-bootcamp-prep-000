const firstMeal = 'breakfast';
var meals = {[firstMeal]:'oatmeal'}

meals.snack = 'yogurt';
meals['second breakfast'] = 'bagel';
meals.breakfast = 'cereal';

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  
  return obj
}
