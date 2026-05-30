import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Chip,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ExamDetail({ exam, open, onClose }) {
  if (!exam) return null;

  const isReal = exam.isRealExam && exam.imageSlug;
  const basePath = import.meta.env.BASE_URL || './';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1,
          overflow: 'hidden',
          bgcolor: '#f5f5f5',
          minHeight: { xs: '70vh', sm: '80vh' },
          maxHeight: '90vh',
        },
      }}
    >
      {/* 顶部标题栏 */}
      <Box
        sx={{
          bgcolor: '#1a1a2e',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
        }}
      >
        <IconButton onClick={onClose} sx={{ color: '#fff' }} size="small">
          <CloseIcon />
        </IconButton>
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, textAlign: 'center', flex: 1, mx: 1 }}>
          {exam.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {exam.isRealExam && (
            <Chip
              label="真题"
              size="small"
              sx={{
                bgcolor: '#ef4444',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.65rem',
                height: 22,
              }}
            />
          )}
          {exam.versionType && (
            <Chip
              label={exam.versionType === 'blank' ? '空白卷' : '解析卷'}
              size="small"
              sx={{
                bgcolor: exam.versionType === 'blank' ? '#3b82f6' : '#10b981',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.65rem',
                height: 22,
              }}
            />
          )}
        </Box>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {isReal ? (
          /* ---- 真题：图片滚动预览 ---- */
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 1,
              gap: 1,
            }}
          >
            {Array.from({ length: exam.totalPages }, (_, i) => {
              const pageNum = String(i + 1).padStart(2, '0');
              const imgSrc = `${basePath}exams/images/${exam.imageSlug}/page_${pageNum}.webp`;
              return (
                <Box
                  key={i}
                  sx={{
                    width: '100%',
                    bgcolor: '#fff',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    borderRadius: 1,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* 页码标签 */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 12,
                      bgcolor: 'rgba(0,0,0,0.55)',
                      color: '#fff',
                      px: 1,
                      py: 0.3,
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      zIndex: 1,
                    }}
                  >
                    第 {i + 1}/{exam.totalPages} 页
                  </Box>
                  <Box
                    component="img"
                    src={imgSrc}
                    alt={`${exam.title} 第${i + 1}页`}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </Box>
              );
            })}

            {/* 底部提示 */}
            <Typography
              sx={{
                py: 3,
                color: 'text.disabled',
                fontSize: '0.75rem',
                textAlign: 'center',
              }}
            >
              —— 共 {exam.totalPages} 页 · 上下滑动浏览完整试卷 ——
            </Typography>
          </Box>
        ) : (
          /* ---- 模拟题：暂无预览 ---- */
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: '50vh', sm: '60vh' },
              px: 4,
              py: 6,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
            >
              {exam.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, textAlign: 'center', maxWidth: 500, lineHeight: 1.8 }}
            >
              {exam.description}
            </Typography>
            <Box
              sx={{
                bgcolor: '#f0f2f7',
                borderRadius: 2,
                p: 3,
                textAlign: 'center',
                maxWidth: 400,
              }}
            >
              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 1 }}>
                模拟试卷预览功能开发中
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'text.disabled' }}>
                真题试卷已支持完整图片预览
              </Typography>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
