const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var aux = kittens.slice();
  aux.push(name);
  return aux;
}

function prependKitten(name){
  var aux = kittens.slice();
  aux.unshift(name);
  return aux;
}
