import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import React from 'react';

import MovieCard from '../MovieCard/MovieCard';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack alignItems="center">
        <Pagination
          count={totalPages}
          color="primary"
          size="large"
          shape="rounded"
          page={page}
          onChange={(_, value) => setPage(value)}
          renderItem={item => (
            <PaginationItem
              slots={{ previous: ArrowBack, next: ArrowForward }}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
}
