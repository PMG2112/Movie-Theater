import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

import { useGetStaffByIdQuery } from '../../../services/kinopoiskApi';
import ErrorMessage from '../../UI/ErrorMessage';

export default function ActorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetStaffByIdQuery(id);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) return <ErrorMessage />;

  return (
    <>
      <Grid container spacing={4} pt={1}>
        <Grid item xs={12} md={4}>
          <img
            src={data.posterUrl}
            style={{ width: '100%' }}
            alt={data.nameEn}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack flexDirection="row">
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            ></Button>
            <Stack flexDirection="column">
              <Typography variant="h5">{data.nameEn}</Typography>
              <Typography>{data.nameRu}</Typography>
            </Stack>
          </Stack>
          <Typography gutterBottom variant="h5">
            About:
          </Typography>
          <Grid container>
            <Grid xs={6}>
              <Typography gutterBottom>Carier:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>{data.profession}</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>Growth:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>{data.growth} santimetrs</Typography>
            </Grid>
{/* if (data.birthday)  */}
            <Grid xs={6}>
              <Typography gutterBottom>Birthday:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>
                {data.birthday} (Age:{data.age})
              </Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>Films:</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>{data.films.length}</Typography>
            </Grid>

            <Grid gutterBottom>
              <Typography gutterBottom>Facts:</Typography>
            </Grid>
            <Grid xs={12}>
              {data.facts.map((fact, index) => (
                <Typography gutterBottom key={fact}>
                  {index + 1}.{fact}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Films:</Typography>
        </Grid>
      </Grid>
      <Stack>
        {data.films
          .filter(
            (item, index, self) =>
              index === self.findIndex(el => el.filmId === item.filmId),
          )
          .map((film, index) => (
            <Stack
              key={film.filmId}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>{index + 1}</Typography>
              <Link component={RouterLink} to={`/movie/${film.filmId}`}>
                {film.nameEn ? film.nameEn : film.nameRu}
              </Link>
              <Typography>{film.rating ? film.rating : '-'}</Typography>
            </Stack>
          ))}
      </Stack>
    </>
  );
}
