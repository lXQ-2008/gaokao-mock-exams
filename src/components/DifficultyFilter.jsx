import { Chip, Stack, Typography } from '@mui/material';
import { DIFFICULTIES } from '../data/examData';

export default function DifficultyFilter({ activeDifficulty, onDifficultyChange }) {
  return (
    <Stack spacing={1} sx={{ minWidth: { md: 200 } }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 0.5 }}>
        难度筛选
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {DIFFICULTIES.map((diff) => {
          const isActive = activeDifficulty === diff.key;
          return (
            <Chip
              key={diff.key}
              label={diff.label}
              onClick={() => onDifficultyChange(diff.key)}
              variant={isActive ? 'filled' : 'outlined'}
              sx={{
                bgcolor: isActive ? diff.color : 'transparent',
                color: isActive ? '#fff' : diff.color,
                borderColor: diff.color,
                fontWeight: isActive ? 600 : 400,
                '&:hover': {
                  bgcolor: isActive ? diff.color : `${diff.color}15`,
                },
                transition: 'all 0.2s ease',
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
