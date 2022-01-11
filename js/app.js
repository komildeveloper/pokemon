const elForm = document.querySelector('.form')

const pokemonList = document.createElement('ul')
elForm.appendChild(pokemonList)

for (let pokemon of pokemons) {
  // Creating Elements
  const pokemonItem = document.createElement('li')
  const pokemonCard = document.createElement('div')
  const pokemonLine = document.createElement('div')
  const pokemonImg = document.createElement('img')
  const pokemonCardBody = document.createElement('div')
  const pokemonCardHeading = document.createElement('h5')
  const pokemonCardText = document.createElement('p')
  const pokemonCardHeart = document.createElement('i')
  const pokemonCardFlex = document.createElement('div')
  const pokemonCardFlexWeight = document.createElement('p')
  const pokemonCardFlexHeight = document.createElement('p')

  // Attribute
  pokemonList.setAttribute('class', 'pokemon__list')
  pokemonItem.setAttribute('class', 'pokemon__item')
  pokemonCard.setAttribute('class', 'card border border-dark rounded-3')
  pokemonImg.setAttribute('class', 'card-img-top p-5')
  pokemonImg.setAttribute('src', pokemon.img)
  pokemonCardBody.setAttribute('class', 'card-body')
  pokemonCardHeading.setAttribute('class', 'card-title text-black fw-bold')
  pokemonCardText.setAttribute('class', 'card-text text-black fw-bold mb-3')
  pokemonCardHeart.setAttribute('class', 'far fa-heart')
  pokemonCardFlex.setAttribute('class', 'pokemon__flex')
  pokemonCardFlexWeight.setAttribute('class', 'text-black fw-bold')
  pokemonCardFlexHeight.setAttribute('class', 'text-black fw-bold')

  // Append
  pokemonList.appendChild(pokemonItem)
  pokemonItem.appendChild(pokemonCard)
  pokemonCard.appendChild(pokemonImg)
  pokemonCard.appendChild(pokemonLine)
  pokemonCard.appendChild(pokemonCardBody)
  pokemonCardBody.appendChild(pokemonCardHeading)
  pokemonCardBody.appendChild(pokemonCardText)
  pokemonCardBody.appendChild(pokemonCardFlex)
  pokemonCardFlex.appendChild(pokemonCardFlexWeight)
  pokemonCardFlex.appendChild(pokemonCardFlexHeight)

  // TextContent
  pokemonCardHeading.textContent = pokemon.name
  pokemonCardText.textContent = pokemon.type
  pokemonCardFlexWeight.textContent = pokemon.weight
  pokemonCardFlexHeight.textContent = pokemon.height

  // Style
  pokemonLine.style.width = '100%'
  pokemonLine.style.height = '2px'
  pokemonLine.style.backgroundColor = '#000'
}
