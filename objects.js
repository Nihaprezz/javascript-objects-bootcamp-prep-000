const firstMeal = 'breakfast';
var meals = {[firstMeal]:'oatmeal'}

meals.snack = 'yogurt';
meals['second breakfast'] = 'bagel';
meals.breakfast = 'cereal';

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  
  return obj
}

const recipe = {eggs : 3};

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups');

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj,{[key]: value})
}

console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'));

function updateObjectWithObject(targetObject, updatesObject){
  return Object.assign({}, targetObject, updatesObject);
}

var meals2 = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };




