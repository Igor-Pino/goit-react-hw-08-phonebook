import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function InteractiveList() {
  return (
    <Container maxWidth="640px">
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <PhoneIphoneIcon />
              </ListItemAvatar>
              <ListItemText primary="Name" />

              <ListItemText primary="number" />
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Container>
  );
}
