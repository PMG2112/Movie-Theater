import { Skeleton, Stack } from '@mui/material';
import React from 'react';

export default function MoviesListTopSkeleton() {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="32px"
        width="250px"
        sx={{ mb: 2, mt: 2 }}
      />
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {Array(15)
          .fill(null)
          .map((_, index) => (
            <React.Fragment key={index}>
              <Stack flexDirection="column">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height="322px"
                  width="215px"
                />
                <Skeleton animation="wave" variant="text" width="120px" />
                <Skeleton animation="wave" variant="text" width="120px" />
              </Stack>
            </React.Fragment>
          ))}
      </Stack>
    </>
  );
}
