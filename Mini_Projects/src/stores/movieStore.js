import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const MOVIES = [
  { id: 1,  title: 'Inception',               genre: 'Sci-Fi',  year: 2010, rating: 8.8, description: 'A thief who steals corporate secrets through dream-sharing technology.',          poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
  { id: 2,  title: 'The Dark Knight',          genre: 'Action',  year: 2008, rating: 9.0, description: 'Batman faces the Joker, a criminal mastermind who terrorizes Gotham City.',       poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { id: 3,  title: 'Interstellar',             genre: 'Sci-Fi',  year: 2014, rating: 8.6, description: 'Explorers travel through a wormhole in space to ensure humanity\'s survival.',   poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
  { id: 4,  title: 'Parasite',                 genre: 'Thriller',year: 2019, rating: 8.5, description: 'A poor family schemes to become employed by a wealthy family.',                  poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
  { id: 5,  title: 'The Shawshank Redemption', genre: 'Drama',   year: 1994, rating: 9.3, description: 'Two imprisoned men bond over years, finding solace and redemption.',             poster: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
  { id: 6,  title: 'Pulp Fiction',             genre: 'Crime',   year: 1994, rating: 8.9, description: 'Lives of two mob hitmen, a boxer, and a gangster intertwine.',                  poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' },
  { id: 7,  title: 'The Matrix',               genre: 'Sci-Fi',  year: 1999, rating: 8.7, description: 'A hacker discovers the world is a simulation and joins a rebellion.',           poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
  { id: 8,  title: 'Forrest Gump',             genre: 'Drama',   year: 1994, rating: 8.8, description: 'The presidencies of Kennedy and Nixon through the eyes of an Alabama man.',     poster: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
  { id: 9,  title: 'Dune',                     genre: 'Sci-Fi',  year: 2021, rating: 8.0, description: 'A noble family becomes embroiled in a war for the desert planet Arrakis.',     poster: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg' },
  { id: 10, title: 'Oppenheimer',              genre: 'Drama',   year: 2023, rating: 8.3, description: 'The story of American scientist J. Robert Oppenheimer and the atomic bomb.',   poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  { id: 11, title: 'Get Out',                  genre: 'Thriller',year: 2017, rating: 7.7, description: 'A Black man uncovers disturbing secrets when visiting his girlfriend\'s family.',poster: 'https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg' },
  { id: 12, title: 'The Godfather',            genre: 'Crime',   year: 1972, rating: 9.2, description: 'The aging patriarch of an organized crime dynasty transfers control to his son.',poster: 'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg' },
]

export const useMovieStore = defineStore('movies', () => {
  // state
  const movies      = ref(MOVIES)
  const searchQuery = ref('')
  const activeGenre = ref('All')
  const sortBy      = ref('rating')

  // getters
  const allGenres = computed(() => ['All', ...new Set(movies.value.map(m => m.genre))])

  const filteredMovies = computed(() => {
    let result = movies.value

    if (activeGenre.value !== 'All')
      result = result.filter(m => m.genre === activeGenre.value)

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      result = result.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q)
      )
    }

    return [...result].sort((a, b) => {
      if (sortBy.value === 'title') return a.title.localeCompare(b.title)
      if (sortBy.value === 'year')  return b.year - a.year
      return b.rating - a.rating
    })
  })

  const totalMovies = computed(() => movies.value.length)

  // actions
  function setSearch(query) { searchQuery.value = query }
  function setGenre(genre)  { activeGenre.value = genre }
  function setSortBy(field) { sortBy.value      = field }

  function resetFilters() {
    searchQuery.value = ''
    activeGenre.value = 'All'
    sortBy.value      = 'rating'
  }

  return {
    movies, searchQuery, activeGenre, sortBy,
    allGenres, filteredMovies, totalMovies,
    setSearch, setGenre, setSortBy, resetFilters,
  }
})