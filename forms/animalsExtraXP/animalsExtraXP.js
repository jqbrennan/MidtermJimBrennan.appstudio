
for (i = 0; i < 2; i++) {
  let animals = ['dog', 'cat', 'horse', 'mouse', 'pig', 'cow', 'ferret', 'lizard', 'frog']
  let newAnimalPrompt = prompt("Name an animal")
  let newAnimal = newAnimalPrompt.toLowerCase()
  animals.push(newAnimal)
  let lastIndex = (animals.length - 1)
  alert(`The last animal added was ${animals[lastIndex]}`)
}
