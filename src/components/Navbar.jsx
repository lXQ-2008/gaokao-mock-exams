import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar({ searchQuery, onSearchChange }) {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ bgcolor: '#fff' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 3,
          minHeight: { xs: 56, sm: 64 },
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.15rem' },
            color: 'text.primary',
            whiteSpace: 'nowrap',
            letterSpacing: '-0.01em',
          }}
        >
          高考模拟题精选
        </Typography>

        {/* 搜索框 */}
        <TextField
          size="small"
          placeholder="搜索试卷…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{
            maxWidth: 320,
            width: '100%',
            '& .MuiOutlinedInput-root': {
              bgcolor: '#f4f5f7',
              borderRadius: 2,
              fontSize: '0.875rem',
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused': {
                bgcolor: '#fff',
                boxShadow: '0 0 0 2px #2c3e6b',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
