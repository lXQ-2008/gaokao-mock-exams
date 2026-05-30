import { Grid, Box, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ExamCard from './ExamCard';

export default function ExamList({ exams, onViewDetail }) {
  if (exams.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 12,
          color: 'text.secondary',
        }}
      >
        <SearchOffIcon sx={{ fontSize: 48, mb: 2, color: 'text.disabled' }} />
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
          没有找到匹配的试卷
        </Typography>
        <Typography variant="body2" color="text.disabled" sx={{ mt: 0.5 }}>
          试试调整筛选条件或搜索关键词
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {exams.map((exam, index) => (
        <Grid item xs={12} sm={6} key={exam.id}>
          <Box
            className="fade-in-up"
            sx={{ animationDelay: `${index * 0.04}s` }}
          >
            <ExamCard
              exam={exam}
              onViewDetail={onViewDetail}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
