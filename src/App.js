import logo from './logo.svg';
import './App.css';
import MovieList from "./MovieList";
import Shawshank from './Shawshank.jpg';
import Green from './Green.jpg';
import Touch from './touch.jpg';
import God from './god.jpg';
import twelve from './12.jpeg';

const movies = [
    {title: 'Skazani na Shawshank', category: 'Drama', type: '/napisy', airing: '17:00', photo: Shawshank, airing2: '19:00', premiere: 'premiera', forkids: 'dla dzieci'},
    {title: 'Zielona mila', category: 'Drama', type: '/napisy', airing: '17:00', photo: Green,},
    {title: 'Nietykalni', category: 'Drama', type: '/napisy', airing: '17:00', photo: Touch,},
    {title: 'Ojciec chrzestny', category: 'Drama', type: '/lektor', airing: '17:00', photo: God,},
    {title: 'Dwunastu gniewnych ludzi', category: 'Drama', type: '/dubbing', airing: '17:00', photo: twelve,},
  ]

function App() {
  return (
    <div className="App">
      <h1>Repertuar</h1>
        <div className='list'>
        <MovieList title = {movies[0].title} category = {movies[0].category} type = {movies[0].type} airing = {movies[0].airing} airing2 = {movies[0].airing2} photo = {movies[0].photo} premiere = {movies[0].premiere} forkids = {movies[0].forkids}/>
        <MovieList title = {movies[1].title} category = {movies[1].category} type = {movies[1].type} airing = {movies[1].airing} photo = {movies[1].photo}/>
        <MovieList title = {movies[2].title} category = {movies[2].category} type = {movies[2].type} airing = {movies[2].airing} photo = {movies[2].photo}/>
        <MovieList title = {movies[3].title} category = {movies[3].category} type = {movies[3].type} airing = {movies[3].airing} photo = {movies[3].photo}/>
        <MovieList title = {movies[4].title} category = {movies[4].category} type = {movies[4].type} airing = {movies[4].airing} photo = {movies[4].photo}/>
        </div>
    </div>
  );
}

export default App;
