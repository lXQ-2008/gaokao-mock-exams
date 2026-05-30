import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { getSubjectColor, getDifficultyColor } from '../data/examData';

export default function ExamCard({ exam, onViewDetail }) {
  const subjectColor = getSubjectColor(exam.subject);
  const difficultyColor = getDifficultyColor(exam.difficulty);

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        py: 1,
        border: exam.isRealExam ? '1px solid #f0d5d5' : 'none',
      }}
    >
      <CardContent sx={{ flex: 1, pb: 0.5, px: 3 }}>
        {/* 真题标记 + 标题 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
          {exam.isRealExam && (
            <VerifiedIcon sx={{ fontSize: 18, color: '#dc2626', mt: 0.3, flexShrink: 0 }} />
          )}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              lineHeight: 1.45,
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              color: 'text.primary',
            }}
          >
            {exam.title}
          </Typography>
        </Box>

        {/* 标签行 */}
        <Stack direction="row" spacing={0.8} flexWrap="wrap" gap={0.5} sx={{ mb: 2 }}>
          <Chip
            label={exam.subject}
            size="small"
            sx={{
              bgcolor: `${subjectColor}14`,
              color: subjectColor,
              fontWeight: 600,
            }}
          />
          <Chip
            label={exam.difficulty}
            size="small"
            sx={{
              bgcolor: `${difficultyColor}14`,
              color: difficultyColor,
              fontWeight: 600,
            }}
          />
          {exam.isRealExam && (
            <Chip
              label="真题"
              size="small"
              sx={{
                bgcolor: '#fef2f2',
                color: '#dc2626',
                fontWeight: 700,
                border: '1px solid #fecaca',
              }}
            />
          )}
          {exam.version && (
            <Chip
              label={exam.version}
              size="small"
              sx={{
                bgcolor: exam.version === '空白卷' ? '#eff6ff' : '#f0fdf4',
                color: exam.version === '空白卷' ? '#2563eb' : '#16a34a',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            />
          )}
        </Stack>

        {/* 描述 */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.7,
            fontSize: '0.8rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {exam.description}
        </Typography>

        {/* 元信息 */}
        <Stack direction="row" spacing={2} sx={{ color: 'text.disabled' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
            <LocationOnIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
              {exam.region}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
            <CalendarTodayIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
              {exam.date}
            </Typography>
          </Box>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 2, pt: 0 }}>
        <Button
          size="small"
          variant="text"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          onClick={() => onViewDetail(exam)}
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '0.78rem',
            '&:hover': { bgcolor: 'rgba(44,62,107,0.06)' },
          }}
        >
          查看详情
        </Button>
      </CardActions>
    </Card>
  );
}
