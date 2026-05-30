import { useState, useMemo } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import ExamList from './components/ExamList';
import ExamDetail from './components/ExamDetail';
import { EXAMS } from './data/examData';
import FilterBar from './components/FilterBar';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubject, setActiveSubject] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [activeExamType, setActiveExamType] = useState('all');
  const [selectedExam, setSelectedExam] = useState(null);

  const handleViewDetail = (exam) => setSelectedExam(exam);
  const handleCloseDetail = () => setSelectedExam(null);

  const filteredExams = useMemo(() => {
    return EXAMS.filter((exam) => {
      const matchSubject = activeSubject === 'all' || exam.subject === activeSubject;
      const matchDifficulty = activeDifficulty === 'all' || exam.difficulty === activeDifficulty;
      const matchType =
        activeExamType === 'all' ||
        (activeExamType === '真题' && exam.isRealExam) ||
        (activeExamType === '模拟' && !exam.isRealExam);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        exam.title.toLowerCase().includes(q) ||
        exam.region.toLowerCase().includes(q) ||
        exam.source.toLowerCase().includes(q);
      return matchSubject && matchDifficulty && matchType && matchSearch;
    });
  }, [activeSubject, activeDifficulty, activeExamType, searchQuery]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4 } }}>
        {/* 顶部提示语 */}
        <Box
          sx={{
            mb: 3,
            px: 2,
            py: 1.5,
            bgcolor: '#f0f2f7',
            borderRadius: 2,
            border: '1px solid #e4e7ef',
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', fontSize: '0.78rem', textAlign: 'center' }}
          >
            本网站由修改搭建
          </Typography>
        </Box>

        {/* 页面标题 */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.8rem' },
              mb: 0.5,
              color: 'text.primary',
            }}
          >
            高考真题与模拟题
          </Typography>
          <Typography variant="body2" color="text.secondary">
            收录 2024 — 2026 年高考真题及优质模拟卷 · 共 {EXAMS.length} 套
          </Typography>
        </Box>

        {/* 筛选栏 */}
        <FilterBar
          activeSubject={activeSubject}
          onSubjectChange={setActiveSubject}
          activeDifficulty={activeDifficulty}
          onDifficultyChange={setActiveDifficulty}
          activeExamType={activeExamType}
          onExamTypeChange={setActiveExamType}
        />

        {/* 结果提示 */}
        <Typography
          variant="body2"
          color="text.disabled"
          sx={{ mb: 2, mt: 3, fontSize: '0.78rem' }}
        >
          共找到 {filteredExams.length} 套
          {searchQuery.trim() && ` — 「${searchQuery}」`}
        </Typography>

        {/* 试卷列表 */}
        <ExamList
          exams={filteredExams}
          onViewDetail={handleViewDetail}
        />
      </Container>

      {/* 底部 */}
      <Box
        component="footer"
        sx={{
          py: 4,
          textAlign: 'center',
          color: 'text.disabled',
          mt: 6,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
          高考真题与模拟题精选 · 仅供参考
        </Typography>
      </Box>

      {/* 详情弹窗 */}
      <ExamDetail
        exam={selectedExam}
        open={!!selectedExam}
        onClose={handleCloseDetail}
      />
    </Box>
  );
}
