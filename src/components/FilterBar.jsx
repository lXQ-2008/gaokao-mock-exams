import { Chip, Stack, Typography } from '@mui/material';
import { SUBJECTS, DIFFICULTIES, EXAM_TYPES } from '../data/examData';

export default function FilterBar({
  activeSubject,
  onSubjectChange,
  activeDifficulty,
  onDifficultyChange,
  activeExamType,
  onExamTypeChange,
}) {
  return (
    <Stack spacing={1.5}>
      {/* 类型 */}
      <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" gap={0.5}>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text.disabled', fontSize: '0.7rem', mr: 0.5, minWidth: 32 }}
        >
          类型
        </Typography>
        {EXAM_TYPES.map((t) => {
          const isActive = activeExamType === t.key;
          return (
            <Chip
              key={t.key}
              label={t.label}
              size="small"
              onClick={() => onExamTypeChange(t.key)}
              variant={isActive ? 'filled' : 'outlined'}
              sx={{
                bgcolor: isActive ? 'text.primary' : 'transparent',
                color: isActive ? '#fff' : 'text.secondary',
                borderColor: isActive ? 'text.primary' : '#e4e7ef',
                fontWeight: isActive ? 600 : 400,
                '&:hover': { bgcolor: isActive ? 'text.primary' : '#f4f5f7' },
                transition: 'all 0.15s ease',
              }}
            />
          );
        })}
      </Stack>

      {/* 科目 */}
      <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" gap={0.5}>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text.disabled', fontSize: '0.7rem', mr: 0.5, minWidth: 32 }}
        >
          科目
        </Typography>
        {SUBJECTS.map((s) => {
          const isActive = activeSubject === s.key;
          return (
            <Chip
              key={s.key}
              label={s.label}
              size="small"
              onClick={() => onSubjectChange(s.key)}
              variant={isActive ? 'filled' : 'outlined'}
              sx={{
                bgcolor: isActive ? 'text.primary' : 'transparent',
                color: isActive ? '#fff' : 'text.secondary',
                borderColor: isActive ? 'text.primary' : '#e4e7ef',
                fontWeight: isActive ? 600 : 400,
                '&:hover': { bgcolor: isActive ? 'text.primary' : '#f4f5f7' },
                transition: 'all 0.15s ease',
              }}
            />
          );
        })}
      </Stack>

      {/* 难度 */}
      <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" gap={0.5}>
        <Typography
          variant="subtitle2"
          sx={{ color: 'text.disabled', fontSize: '0.7rem', mr: 0.5, minWidth: 32 }}
        >
          难度
        </Typography>
        {DIFFICULTIES.map((d) => {
          const isActive = activeDifficulty === d.key;
          return (
            <Chip
              key={d.key}
              label={d.label}
              size="small"
              onClick={() => onDifficultyChange(d.key)}
              variant={isActive ? 'filled' : 'outlined'}
              sx={{
                bgcolor: isActive ? 'text.primary' : 'transparent',
                color: isActive ? '#fff' : 'text.secondary',
                borderColor: isActive ? 'text.primary' : '#e4e7ef',
                fontWeight: isActive ? 600 : 400,
                '&:hover': { bgcolor: isActive ? 'text.primary' : '#f4f5f7' },
                transition: 'all 0.15s ease',
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
