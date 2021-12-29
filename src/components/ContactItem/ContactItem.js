// import * as React from 'react';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import ListItemText from '@mui/material/ListItemText';
// import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Grid';
// import DeleteIcon from '@mui/icons-material/Delete';

// export default function InteractiveList() {
//   return (
//     <Container maxWidth="640px">
//       <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//         <Grid item xs={12} md={6}>
//           <List>
//             <ListItem
//               secondaryAction={
//                 <IconButton edge="end" aria-label="delete">
//                   <DeleteIcon />
//                 </IconButton>
//               }
//             >
//               <ListItemAvatar>
//                 <PhoneIphoneIcon />
//               </ListItemAvatar>
//               <ListItemText primary="Name" />

//               <ListItemText primary="number" />
//             </ListItem>
//           </List>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, phone, onDeleteContact }) => (
  <li>
    <div>
      <span>{name}</span>
      <span>{phone}</span>
    </div>
    <button onClick={() => onDeleteContact(id)}>X</button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
