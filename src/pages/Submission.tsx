import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import { db } from '../firebaseConfig';

const Submit: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [communicationType, setCommunicationType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const reportData = {
      title,
      content,
      category,
      communicationType,
      email,
      phone,
      reportID: generateUniqueFirestoreId(),
      time: Date.now() / 1000,
    };

    try {
      await addDoc(collection(db, "Scam Report"), reportData);
      alert("Report submitted!");
      setTitle("");
      setContent("");
      setCategory("");
      setCommunicationType("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  function generateUniqueFirestoreId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let autoId = '';
    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return autoId;
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" style={{ fontWeight: 'bold', color: '#c5050c' }}>
          Submit a New Report
        </Typography>
      </Box>

      <Paper elevation={3} style={{ padding: '2rem', borderRadius: '12px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            required
            label="Content"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                },
              }}
            >
              <MenuItem value="Phishing">Phishing</MenuItem>
              <MenuItem value="Job">Job</MenuItem>
              <MenuItem value="Housing">Housing</MenuItem>
              <MenuItem value="Identity Theft">Identity Theft</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="communicationType-label">Communication Type</InputLabel>
            <Select
              labelId="communicationType-label"
              id="communicationType"
              value={communicationType}
              onChange={(e) => setCommunicationType(e.target.value)}
              label="Communication Type"
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                },
              }}
            >
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Phone">Phone Call / Text Message</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label={`Scammer Contact: ${communicationType}`}
            type={communicationType === "Email" ? "email" : "tel"}
            variant="outlined"
            fullWidth
            margin="normal"
            value={communicationType === "Email" ? email : phone}
            onChange={(e) => {
              (communicationType === "Email" ? setEmail : setPhoneNumber)(e.target.value);
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
              Submit Report
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Submit;