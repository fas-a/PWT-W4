import React, { useState } from 'react';
import MovieCard from "../Components/MovieCard";
import NavBar from "../Components/NavBar";
import Pagination from "../Components/Pagination";
import { usePage, router} from '@inertiajs/react';

function Home() {
  const { films } = usePage().props;
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Tambahkan pengecekan untuk memastikan films dan films.data tidak undefined
  if (!films || !films.data) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredMovies = films.data.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    router.get(`/home?page=${page}`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar searchTerm={searchTerm} handleInputChange={handleInputChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {currentMovies.map((movie, index) => {
          console.log("movie:", movie); // Tambahkan logging untuk memeriksa data movie
          return (
            <MovieCard
              key={index}
              // imgSrc={movie.url_banner} // Sesuaikan dengan kolom di tabel
              title={movie.title}
              description={movie.synopsis} // Sesuaikan dengan kolom di tabel
            />
          );
        })}
      </div>
      <Pagination
        currentPage={films.current_page}
        lastPage={films.last_page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;