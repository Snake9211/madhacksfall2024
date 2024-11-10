import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const Search: React.FC = () => {
  const [method, setMethod] = useState('email');
  const [contactInfo, setContactInfo] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Submit form data
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" style={{ fontWeight: 'bold', color: '#c5050c' }}>
          Welcome to Scam Checker
        </Typography>
        <Typography variant="subtitle1" style={{ color: '#666' }}>
          Identify and avoid potential scams by checking messages you’ve received.
        </Typography>
      </Box>

      <Paper elevation={3} style={{ padding: '2rem', borderRadius: '12px' }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="method-label">Method of Contact</InputLabel>
            <Select
              labelId="method-label"
              id="method"
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                setContactInfo('');
              }}
              label="Method of Contact"
              style={{}}
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'right',
                  },
                },
              }}
            >
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type={method === 'email' ? 'email' : 'tel'}
            label={method === 'email' ? 'Email Address' : 'Phone Number'}
            variant="outlined"
            fullWidth
            margin="normal"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            InputProps={{
              style: { },
            }}
          />

          <TextField
            label="Message Content"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={6}
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            required
            InputProps={{
              style: { },
            }}
          />

          <Box textAlign="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: '#c5050c',
                color: '#ffffff',
                fontWeight: 'bold',
                padding: '0.75rem 1.5rem',
              }}
              size="large"
            >
              Check for Scam
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Search;