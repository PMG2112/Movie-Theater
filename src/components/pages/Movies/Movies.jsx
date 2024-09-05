import { Link, Stack } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useMoviesQuery from '../../../hooks/useMoviesQuery';
import ErrorMessage from '../../UI/ErrorMessage';
import MovieSkeleton from './MovieSKeleton';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  } = useMoviesQuery();

  if (isLoading) return <MovieSkeleton />;

  if (hasError) return <ErrorMessage />;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <RouterLink key={row.id} to={`/movie/${row.kinopoiskId}`}>
        <BearSlideImage imageUrl={row.posterUrlPreview} />
      </RouterLink>
    ));

  const carouselArr = [
    {
      title: 'Popural Films',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
    {
      title: 'Best Films',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data.items),
    },
    {
      title: 'Films',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data.items),
    },
    {
      title: 'Serials',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data.items),
    },
    {
      title: 'Cartoons',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data.items),
    },
  ];

  return (
    <>
      {carouselArr.map(carousel => (
        <Stack key={carousel.title}>
          <Link
            sx={{ mt: 2, mb: 2 }}
            variant="h6"
            component={RouterLink}
            to={carousel.url}
          >
            {carousel.title}
          </Link>
          <BearCarousel
            data={carousel.data}
            slidesPerView={5}
            slidesPerGroup={1}
            isEnableNavButton
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={5000}
            breakpoints={{
              375: {
                autoPlayTime: 0,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          />
        </Stack>
      ))}
    </>
  );
}
