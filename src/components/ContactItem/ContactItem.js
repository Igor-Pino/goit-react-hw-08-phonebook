import React from 'react';
import PropTypes from 'prop-types';
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
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <Container className={s.container}>
      <Box sx={{ flexGrow: 1, maxWidth: 800 }}>
        <Grid spacing={4}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <PhoneIphoneIcon />
              </ListItemAvatar>
              <ListItemText primary={name} />
              <ListItemText primary={number} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => onDeleteContact(id)} />
              </IconButton>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Container>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
