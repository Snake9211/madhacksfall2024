import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";

import { db } from '../firebaseConfig';

interface ScamAnalysisPopupProps {
  open: boolean;
  onClose: () => void;
  contactInfo: string;
  messageContent: string;
  contactReportsCount: number;
  messageReportsCount: number;
}

const ScamAnalysisPopup: React.FC<ScamAnalysisPopupProps> = ({
  open,
  onClose,
  contactInfo,
  messageContent,
  contactReportsCount,
  messageReportsCount,
}) => {
  // Define state variables for report fields
  const [email, setEmail] = useState(contactInfo);
  const [phone, setPhone] = useState(contactInfo);
  
  // Generate a title from the first 5 words of messageContent
  const generatedTitle = messageContent.split(" ").slice(0, 5).join(" ");

  const handleSubmitReport = async (event: React.FormEvent) => {
    event.preventDefault();

    const reportData = {
      title: generatedTitle,
      content: messageContent,
      email: email.includes('@') ? email : '',
      phone: email.includes('@') ? '' : phone, 
      reportID: generateUniqueFirestoreId(),
      time: Date.now() / 1000,
      contactReportsCount,
      messageReportsCount,
    };

    try {
      await addDoc(collection(db, "Scam Report"), reportData);
      alert("Report submitted as scam!");
      onClose(); // Close the dialog after submission
      
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error('Error adding document:', error);
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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ backgroundColor: '#ffffff' }}>AI Scam Analysis Overview</DialogTitle>
      <DialogContent dividers style={{ backgroundColor: '#ffffff' }}>
        <Box mb={2}>
          <Typography variant="h6" color="primary" gutterBottom>
            AI Overview
          </Typography>
          <Typography variant="body1">
            Our AI has analyzed the provided information and found potential scam indicators. Please review the information below to decide if you would like to submit this report as a scam.
          </Typography>
        </Box>

        <Divider style={{ margin: '1rem 0' }} />

        <Box mb={2}>
          <Typography variant="h6" color="secondary" gutterBottom>
            Contact Information Reports
          </Typography>
          <Typography variant="body1">
            This contact information has been reported
            <strong> {contactReportsCount} </strong>
            {contactReportsCount === 1 ? 'time' : 'times'} before by other users.
          </Typography>
        </Box>

        <Divider style={{ margin: '1rem 0' }} />

        <Box mb={2}>
          <Typography variant="h6" color="secondary" gutterBottom>
            Message Content Reports
          </Typography>
          <Typography variant="body1">
            This exact message has been reported
            <strong> {messageReportsCount} </strong>
            {messageReportsCount === 1 ? 'time' : 'times'} before by other users.
          </Typography>
        </Box>
      </DialogContent>
      
      <DialogActions style={{ backgroundColor: '#ffffff' }}>
        <Button onClick={handleSubmitReport} variant="contained" color="primary">
          Submit Report as Scam
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScamAnalysisPopup;