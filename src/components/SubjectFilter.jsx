import { Chip, Stack, Typography } from '@mui/material';
import { SUBJECTS } from '../data/examData';

export default function SubjectFilter({ activeSubject, onSubjectChange }) {
  return (
    <Stack spacing={1} sx={{ flex: 1 }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 0.5 }}>
        科目筛选
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SUBJECTS.map((subject) => {
          const isActive = activeSubject === subject.key;
          return (
            <Chip
              key={subject.key}
              label={subject.label}
              onClick={() => onSubjectChange(subject.key)}
              variant={isActive ? 'filled' : 'outlined'}
              sx={{
                bgcolor: isActive ? subject.color : 'transparent',
                color: isActive ? '#fff' : subject.color,
                borderColor: subject.color,
                fontWeight: isActive ? 600 : 400,
                '&:hover': {
                  bgcolor: isActive ? subject.color : `${subject.color}15`,
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
